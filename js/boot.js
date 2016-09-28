// JavaScript Document
$(function(){
	function login() {
	  var btn = $("#btn_login");
	  btn.button('loading');
	  setTimeout(function () { btn.button('reset'); },2000);
	}
	

	var oHdNavL = $(".hdNavL");
	var aHdNav = $(".hdNavL li");
	var oBox = aHdNav[aHdNav.length - 1];
	
	for(var i = 0; i < aHdNav.length - 1; i++){
		aHdNav[i].onmouseover = function(){
			move(oBox,this.offsetLeft);
		};
	};


	var speed = 0;
	var left = 0;
	function move(obj,iTarget,color){
		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			speed += (iTarget - left)/5;//加速度
			speed *= 0.7;  //摩擦
			
			left += speed;
			obj.style.left = Math.round(left) + "px";
			
			//if(obj.offsetLeft == iTarget){
			if(obj.offsetLeft == iTarget && Math.abs(speed) < 1){
				clearInterval(obj.timer);
			}
			
		},30);
	}
	
	$(".searchBtn").click(function(){
		$(this).css("borderRadius","20");
	});



});
