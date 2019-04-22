'use strict';

class Player {
  constructor(canvas){
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

  draw () {
    this.ctx.drawImage(this.img, this.x-this.size, this.y-this.size, 45, 45);
  }

  setDirectionY (newDirectionY) {
    this.directionY = newDirectionY;
  }

  setDirectionX (newDirectionX) {
    this.directionX = newDirectionX;
  }

  bounceX (){
    this.directionX = this.directionX*-1
    this.directionY = this.directionY*-1
  }

  update (){
    this.y = this.y + this.directionY * this.speed;
    this.x = this.x + this.directionX * this.speed;
  }

};






