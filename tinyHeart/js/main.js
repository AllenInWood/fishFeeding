var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;

var fruit;

var mom;
var baby;

var mx;
var my;

document.body.onload = game;
function game()
{
	//console.log("onload");
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}
function init()
{
	//get canvas context
	can1 = document.getElementById("canvas1");//fishes, dust, ui, circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById("canvas2");//background, ane, fruits
	ctx2 = can2.getContext('2d');

	//listen to mouse move
	can1.addEventListener('mousemove' , onMouseMove, false);

	bgPic.src = "./src/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;
}
function gameloop()
{
	window.requestAnimFrame(gameloop);//setInterval, setTimeout, frame per second
	//console.log("loop");
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if(deltaTime >40) deltaTime = 40;

	//console.log(deltaTime);
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	ctx1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	monFruitsCollision();

	baby.draw();
}
function onMouseMove(e)
{
	if(e.offSetX || e.layerX)
	{
		mx = e.offSetX == undefined ? e.layerX : e.offSetX;
		my = e.offSetY == undefined ? e.layerY : e.offSetY;
		//console.log(mx);
	}
}