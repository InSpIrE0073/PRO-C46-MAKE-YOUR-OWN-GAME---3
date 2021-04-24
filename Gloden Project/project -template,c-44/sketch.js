var BGimage
var Tosan,Tosanimage;
var Scubby,Scubbyimage;
var obstacles,obstaclesimage;
var tosanBullet,tosanBulletimage;
var scubbyBullet,scubbyBulletimage;


function preload (){
BGimage=  loadImage("Images/BAckground.jpg")
Tosanimage=  loadImage("Images/chursh.png")
Scubbyimage = loadImage("Images/CT.png")
obstaclesimage = loadImage("Images/GLow.gif")
tosanBulletimage= loadImage("Images/Tbullet.png")
scubbyBulletimage= loadImage("Images/Sbullet.png")
}


function setup() {
  createCanvas(displayWidth,displayHeight);
Tosan=createSprite(50,displayHeight-240,50,80);
Tosan.addImage(Tosanimage);
Tosan.scale = 0.5;

Scubby=createSprite(displayWidth-100,displayHeight-240,50,80);
Scubby.addImage(Scubbyimage);
Scubby.scale = 0.5;

obstacles=createSprite(displayWidth/2,displayHeight-240,50,80);
obstacles.addImage(obstaclesimage);
obstacles.scale = 0.1;

invisibleGround=createSprite(displayWidth/2,displayHeight-140,displayWidth,20);
invisibleGround.visible=false;





  } 
 

function draw() {
  background(BGimage);  
if(keyDown("space") ){
tosanBullet= createSprite(50,displayHeight-240,50,80)
tosanBullet.addImage(tosanBulletimage);
tosanBullet.velocityX=3;
tosanBullet.scale= 0.3;
}
enemyAttack();

if(keyDown("w")){
Tosan.velocityY=-10

}
//tosan.velocityY=tosan.velocityY + 0.8

Tosan.collide(ground);
drawSprites()
}
function enemyAttack(){
if(frameCount %60 === 0 ){
scubbyBullet= createSprite(displayWidth-100,displayHeight-240,50,50)
scubbyBullet.addImage(scubbyBulletimage);
scubbyBullet.velocityX=-3;
scubbyBullet.scale = 0.2;

} 

}