var bg, snowman,snowmanImg,snow,snowImg;





function preload(){
  bg=loadImage("snow2.jpg")
  snowmanImg=loadImage("snowMan.PNG")

  snowImg=loadImage("snow4.webp");
}




function setup() {
  createCanvas(800,400);
 snowman= createSprite(250, 250);
 snowman.addImage(snowmanImg);
 snowman.scale=0.5;

 snow= createSprite(250, 150);
 snow.addImage(snowImg);
 snow.scale=0.1;


}

function draw() {
  background(bg); 

  if(keyDown("up_arrow")){
snowman.y=snowman.y-2
  }
  if(keyDown("down_arrow")){
    snowman.y=snowman.y+2
      }
      if(keyDown("left_arrow")){
        snowman.x=snowman.x-2
          }
          if(keyDown("right_arrow")){
            snowman.x=snowman.x+2
              }

  
  
  
  drawSprites();
}
