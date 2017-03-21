var express = require('express');   //引入required模块 使用require指令载入node模块
var app = require('express')();
var http = require('http').createServer(app);   //创建服务器，服务器可监听客户端的请求，类似于apache、ngix等http服务器
var io = require('socket.io')(http);

//设置静态文件路径
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendfile('index.html');
});

var connectedSockets={};
var allUsers=[{nickname:"",color:"#000"}];//初始值即包含"群聊",用""表示nickname
io.on('connection',function(socket){

    //有新用户进入聊天室
    socket.on('addUser',function(data){ 
        if(connectedSockets[data.nickname]){//昵称已被占用
          socket.emit('userAddingResult',{result:false});
        }else{
            socket.emit('userAddingResult',{result:true});
            socket.nickname=data.nickname;
            connectedSockets[socket.nickname]=socket;//保存每个socket实例,发私信需要用
            allUsers.push(data);
            socket.broadcast.emit('userAdded',data);//广播欢迎新用户,除新用户外都可看到
            socket.emit('allUser',allUsers);//将所有在线用户发给新用户
        }

    });

    //有用户发送新消息
    socket.on('addMessage',function(data){ 
        if(data.to){//发给特定用户
            connectedSockets[data.to].emit('messageAdded',data);
        }else{//群发
            socket.broadcast.emit('messageAdded',data);//广播消息,除原发送者外都可看到
        }


    });


    //有用户退出聊天室
    socket.on('disconnect', function () {  
            socket.broadcast.emit('userRemoved', {  //广播有用户退出
                nickname: socket.nickname
            });
            for(var i=0;i<allUsers.length;i++){
                if(allUsers[i].nickname==socket.nickname){
                    allUsers.splice(i,1);
                }
            }
            delete connectedSockets[socket.nickname]; //删除对应的socket实例

        }
    );
});

//使用listen方法绑定端口
http.listen(3002, function () {
    console.log('listening on *:3002');
});