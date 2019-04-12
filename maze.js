'use strict';

// create maze on canvas (initially just one) to be loaded in main (?)

var canvas = document.getElementById("gameCanvas");

function buildMaze {

  function drawWall {
    // loop to interate over wall coordinates array and draw for each start/end position pair:
    ctx.moveTo(x,y);
    ctx.lineTo(x,y);
    ctx.stroke();
  }




}






// create classes for path, wall, goal, and treasure (initially just placeholder)

// Arrays that store coordinates for path, wall, goal, and treasures