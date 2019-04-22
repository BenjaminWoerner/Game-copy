'use strict';

var wallsarray = [
  [100, 100, 10, 200],
  [200, 0, 10, 400],
  [500, 300, 10, 300],
  [300, 400, 10, 200],
  [300, 100, 10, 100],
  [300, 100, 200, 10],
  [400, 200, 200, 10],
  [100, 400, 100, 10],
  [100, 500, 400, 10],
  [400, 200, 200, 10],
];

function Wall (canvas) {
  this.size = 25;
  this.canvas = canvas;
  this.x = 100;
  this.y = 100;
  this.ctx = this.canvas.getContext('2d');
  this.wallsarray = wallsarray;
  this.goalX = 580;
  this.goalY = 580;
  this.goalSize = 15; 
}

Wall.prototype.draw = function() {
  this.ctx.fillStyle = 'black';
  wallsarray.forEach ((element) => {
    this.ctx.fillRect(element[0], element[1], element[2], element[3]);
  });

  this.ctx.beginPath();
  this.ctx.arc(this.goalX, this.goalY, this.goalSize, 0, 2 * Math.PI);
  this.ctx.fillStyle = 'green';
  this.ctx.fill();


}











