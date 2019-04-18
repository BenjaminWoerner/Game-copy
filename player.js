'use strict';

function Player (canvas) {
  this.size = 20;
  this.canvas = canvas;
  this.x = 18;
  this.y = 18;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 2;
  this.directionY = 0;
  this.directionX = 0;
  this.image = document.getElementById('playerimg')
  this.img = new Image();
  this.img.src = "./assets/player.png"


}

Player.prototype.draw = function() {
   
  this.ctx.drawImage(this.img, this.x-this.size, this.y-this.size, 45, 45);
  
  //this.ctx.beginPath();
  //this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  //this.ctx.fillStyle = 'red';
  //this.ctx.fill();
}

Player.prototype.setDirectionY = function(newDirectionY) {
  this.directionY = newDirectionY;
}

Player.prototype.setDirectionX = function(newDirectionX) {
  this.directionX = newDirectionX; 
}

Player.prototype.bounceX = function(){
  this.directionX = this.directionX*-1
  this.directionY = this.directionY*-1
}

Player.prototype.update = function() {
  this.y = this.y + this.directionY * this.speed;
  this.x = this.x + this.directionX * this.speed;
}






