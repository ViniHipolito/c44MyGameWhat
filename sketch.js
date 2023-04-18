var block, ground, doge;
var blockIMG1,blockIMG2, backgroundIMG, dogeIMG;

function preload(){
blockIMG1 = loadAnimation("knight1.png");
blockIMG2 = loadAnimation("knight2.png");
backgroundIMG = loadImage("background.webp");
dogeIMG = loadImage("doge.png")
}

function setup() {
  createCanvas(800,400);
  block = createSprite(400, 200, 50, 50);
  block.addAnimation("idle1", blockIMG1);
  block.addAnimation("idle2", blockIMG2);
  ground = createSprite(400, 320, 800, 20);
  ground.visible = false;
  doge = createSprite(560,200,10,10);
  doge.addAnimation("idle1", dogeIMG)
  doge.scale = 0.2;
}

function draw() {
  background(backgroundIMG);  
  drawSprites();
  block.collide(ground);
  block.velocityY = block.velocityY + 0.5;
  textSize(30);
  fill("black")
  text("Opa olá ai! Aqui é o Vini Soares",0,30);
  textSize(25);
  text("Se você está aqui, provável que veio do Projeto 69",0,50);
  textSize(21);
  text("Escaneie o QR Code que totalmente não deve te levar para um vídeo de among us",0,70);
  textSize(25);
  text("Pode Confia :)",0,90);
  textSize(16.3);
  text("Fato interesante: Peguei qualquer projeto pra colocar o qr code, então decidi pegar o qual que sei mexer bem",0,320);
}