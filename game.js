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
  
  this.goalCollision = false;

  if(this.player.x > this.wall.goalX-this.wall.goalSize && this.player.y > this.wall.goalY-this.wall.goalSize) {
    this.goalCollision = true;
  }
  
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
      this.blocked === false
      
      || this.player.y-this.player.size < 0 || this.player.x-this.player.size < 0 
      || this.player.y+this.player.size > 600 || this.player.x+this.player.size > 600
      )
      
      
      {
        this.blocked = true;
      }
  };
  

 if (this.blocked === true){
    this.player.bounceX();
  }

}



