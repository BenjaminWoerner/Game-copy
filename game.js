'use strict';

function Game(canvas) {
  this.player = null;
  this.wall = null;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
};

Game.prototype.startLoop = function() {

  this.player = new Player(this.canvas);
  this.wall = new Wall(this.canvas);

  const loop = () => {
    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    //this.checkWall();
    

    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop);
};

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.updateCanvas = function() {
  this.checkWall();
  this.player.update();
  
};

Game.prototype.drawCanvas = function() {
  this.player.draw();
  this.wall.draw();
};

Game.prototype.checkWall = function() {
  this.wallArray = this.wall.wallsarray;
  
  this.blocked = false
  

  //this.blockUp = false;
  //this.blockDown = false;
  //this.blockLeft = false;
  //this.blockRight = false;
  
  for (let i = 0; i < this.wallArray.length; i++) {
    if (
      this.player.x >= this.wallArray[i][0]-this.player.size &&
      this.player.x <= this.wallArray[i][0]+this.wallArray[i][2]+this.player.size &&
      this.player.y >= this.wallArray[i][1]-this.player.size &&
      this.player.y <= this.wallArray[i][1]+this.wallArray[i][3]+this.player.size &&
      this.blocked === false){
        this.blocked = true;
      }
  };
  
  console.log(this.blocked);

  if (this.blocked === true){
    this.player.bounceX();
  }

}




    //if (this.player.x >= this.wallArray[i][0]-this.player.size && !this.blockLeft) { // left
    //  this.blockLeft = true;
    //}
      //if( this.player.x <= this.wallArray[i][0]+this.wallArray[i][2]+this.player.size && !this.blockRight) {
      //this.blockRight = true;
   // }
    
    // right
     // if( this.player.y >= this.wallArray[i][1]-this.player.size  && !this.blockUp)  {
      //this.blockUp = true;

    //} // top
      //if( this.player.y <= this.wallArray[i][1]+this.wallArray[i][3]+this.player.size && !this.blockDown) {
      //this.blockDown = true;

     
    
      // bottom

      //||
      
      //this.player.x-this.player.size >= element[0] &&
      //this.player.x-this.player.size <= element[0]+element[2]
      
      
     // ) {



  //  wallArray.forEach ((element) => {
      // debugger;
      //if (
      //  this.player.x >= wallArray[i][0]-this.player.size 
      //  &&
      //  this.player.x <= wallArray[i][0]+wallArray[i][2]+this.player.size
     //   &&
      //  this.player.y >= wallArray[i][1]-this.player.size
      //  &&
       // this.player.y <= wallArray[i][1]+wallArray[i][3]+this.player.size

        //||
        
        //this.player.x-this.player.size >= element[0] &&
        //this.player.x-this.player.size <= element[0]+element[2]
        
        
       // ) {
          //this.player.directionX = this.player.directionX*-1; 
          //this.player.directionY = this.player.directionY*-1;
          //this.player.speed = 0;
        
       // } 
       // else {
       //   this.player.speed = 1
       //  
       // }
     // });