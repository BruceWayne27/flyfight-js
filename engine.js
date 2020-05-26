//var speed=5;//mylane speed

var time=0;
var planeId="myplane";//replace id myplane
var goingw=false;
var goinga=false;
var goingd=false;
var goings=false;
var pwidth=60;
var pheight=45;//我方大小
var ewidth=25;//敌方大小
var eheight=25;
var enemyspeed=5;
var enemyxspan=0.3;//敌方摇摆大小
var bulletspeed=200;//子弹速度
var enemyxspeed=30;//敌方速度
var enemynumber=200;//敌方数量
var hz=35;//游戏刷新率


var Contances={
	SPEED:6,
	key_w:87,
	key_a:65,
	key_s:83,
	key_d:68,
	boundary_w:440,
	boundary_a:0,
	boundary_s:0,
	boundary_d:243,
	//bspeed:8;
}

function $(id){//get id
		return document.getElementById(id);
	
}
function gety(plane){
	
	return plane.style.bottom.replace('px','')-0;
}
function getx(plane){
	
	return plane.style.left.replace('px','')-0;
}
function sety(plane,y){
	
	plane.style.bottom=y+"px";
}
function setx(plane,x){
	
	 plane.style.left=x+"px";
}




