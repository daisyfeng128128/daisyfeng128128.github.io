var lottery = {
	name:["小米0","小米1","小米2","小米3","小米4","小米5","小米6","小米7"],
	p:0
}

function clickBtn(){
	var n = Math.floor(Math.random()*8+1);
		lottery.p = 45 * n + 1822.5;
	$(this).unbind().css("cursor","wait");
	$('.lottery').css({
		"transition":"all 5s ease-in-out",
		"transform":"rotate("+lottery.p+"deg)",
		"-webkit-transform":"rotate("+lottery.p+"deg)"
	});
}
$('.btn').bind('click',clickBtn);

/*
 监听动画结束事件
 */
$('.lottery')[0].addEventListener('transitionend',function(){
	$('.btn').bind('click',clickBtn).css("cursor","pointer");
	result();
	$(this).css({
		"transition":"none",
		"transform":"none",
		"-webkit-transform":"none"
	})
})

function result(){
	var num = (lottery.p - 1822.5)/45;
	if(num % 2 == 0){
		alert("很遗憾，请"+lottery.name[num-1]+"!");
	}else{
		alert("恭喜您，获得"+lottery.name[num-1]+"!");
	}
}
$(".addBtn").click(function(){
	$(".pop").show();
	$(".mask").show();
})
$(".cancel").click(function(){
	$(".pop").hide();
	$(".mask").hide();
})












