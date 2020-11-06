var moving
var constant

function setup() {
  createCanvas(800,400);
 moving =  createSprite(100, 360, 40, 50);
moving.shapeColor = "green"
 constant = createSprite(400,200,30,67)
constant.shapeColor = "green"

}

function draw() {
  background(0);
  
  moving.y = mouseY
  moving.x = mouseX

if(moving.x- constant.x < moving.width/2+constant.width/2 &&
   constant.x - moving.x < moving.width/2+constant.width/2 &&
   moving.y - constant.y < moving.height/2+constant.height/2&&
   constant.y - moving.y < moving.height/2+constant.height/2    
   ){

   moving.shapeColor = "red"
  constant.shapeColor = "red"
   }

   else{

    moving.shapeColor = "green"
    constant.shapeColor = "green"
    
   }



  drawSprites();
}