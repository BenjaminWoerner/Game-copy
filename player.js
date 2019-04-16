'use strict';

// functions to check whether movement is possible (based on classes wall vs. path)

function Player (canvas) {
  this.size = 15;
  this.canvas = canvas;
  this.x = 15;
  this.y = 15;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 1;
  this.directionY = 0;
  this.directionX = 0;
  // this.wall = new Wall(this.canvas)
}

Player.prototype.draw = function() {
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  this.ctx.fillStyle = 'green';
  this.ctx.fill();
}

Player.prototype.update = function() {
  this.y = this.y + this.directionY * this.speed;
  this.x = this.x + this.directionX * this.speed;
}

Player.prototype.setDirectionY = function(newDirectionY) {
  this.directionY = newDirectionY;
}

Player.prototype.setDirectionX = function(newDirectionX) {
  this.directionX = newDirectionX;
  
}

//Player.prototype.checkWall = function(){

  //this.x+this.r > wall x



