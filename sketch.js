var fr,mr;

function setup() {
  createCanvas(1200,800);
  fr=createSprite(200,200,50,80);
  fr.shapeColor="green";
  fr.debug=true;
  mr=createSprite(400,200,80,30);
  mr.shapeColor="green";
  mr.debug=true;
  mr.velocityY=5
  fr.velocityY=-5
}

function draw() {
  background(0); 
  mr.x=World.mouseX;
  mr.y=World.mouseY; 
  if(istouching()){

    fr.shapeColor= "red"
    mr.shapeColor= "red"

  }
  else{
    fr.shapeColor="green";
    mr.shapeColor="green";
}
  drawSprites(); 
} 


