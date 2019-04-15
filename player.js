'use strict';


// functions for movement in all 4 directions 

// functions to check whether movement is possible (based on classes wall vs. path)

function Player (canvas) {
  this.size = 25;
  this.canvas = canvas;
  this.x = 50;
  this.y = 50;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.directionY = 0;
  this.directionX = 0;
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
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

