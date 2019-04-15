'use strict';

// Player object storing visual representataion and location (x, y) to be manipulated

// functions for movement in all 4 directions 

// functions to check whether movement is possible (based on classes wall vs. path)

function Player(canvas) {
  this.size = 25;
  this.canvas = canvas;
  this.x = 50;
  this.y = this.canvas.height/2;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 3;
  this.direction = 0;
}

Player.prototype.draw = function() {
  this.ctx.fillStyle = 'green';
  this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2, this.size, this.size);
}

Player.prototype.update = function() {
  this.y = this.y + this.direction * this.speed;
}

Player.prototype.setDirection = function(newDirection) {
  this.direction = newDirection;
}


