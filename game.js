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
    this.checkWall();
    // console.log(this.player.direction)

    window.requestAnimationFrame(loop);
  }
  window.requestAnimationFrame(loop);
}

Game.prototype.clearCanvas = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.updateCanvas = function() {
  this.player.update();
}

Game.prototype.drawCanvas = function() {
  this.player.draw();
  this.wall.draw();
}

Game.prototype.checkWall = function() {
  let wallArray = this.wall.wallsarray;
  for (let i = 0; i < wallArray.length; i++) {
    
    //this.wallsarray.forEach ((element) => {
      // debugger;
      if (
        this.player.x+this.player.size >= wallArray[i][0] &&
        this.player.x+this.player.size <= wallArray[i][0]+wallArray[i][2]
        
        //||
        
        //this.player.x-this.player.size >= element[0] &&
        //this.player.x-this.player.size <= element[0]+element[2]
        
        
        ) {
          console.log("true")
          break;
        } else {console.log("false")}
     // });
    }

}