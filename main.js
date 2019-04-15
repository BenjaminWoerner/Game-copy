'use strict';

function main() {

  const mainElement = document.querySelector('main');

  function buildDom(html) {
    mainElement.innerHTML = html
    return mainElement;
  }


  function buildSplashScreen() {
    const splashScreen = buildDom(`
      <section>
        <h1>NomNomNom</h1>
        <button class="start-button">Start</button>
      </section>
    `);

    const startButton = document.querySelector('.start-button');

    startButton.addEventListener('click', buildGameScreen);
  }

  function buildGameScreen() {
    const gameScreen = buildDom(`
      <section class="game-container">
        <canvas></canvas>
      </section>
    `);

    const gameContainerElement = document.querySelector('.game-container')

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height);

    
    const game = new Game(canvasElement);
    game.startLoop();



    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 37) {
        game.player.setDirectionX(-1)
      } else if (event.keyCode === 39) {
        game.player.setDirectionX(1)
      }
      game.checkWall.call(game);

    })

    document.addEventListener('keyup', function(event) {
      if(event.keyCode === 37 || event.keyCode === 39) {
        game.player.setDirectionX(0);
      }
    })
    

    document.addEventListener('keydown', function(event) {
      if (event.keyCode === 38) {
        game.player.setDirectionY(-1)
      } else if (event.keyCode === 40) {
        game.player.setDirectionY(1)
      }
    })

    document.addEventListener('keyup', function(event) {
      if(event.keyCode === 38 || event.keyCode === 40) {
        game.player.setDirectionY(0);
      }
    })
  }

  function buildGameOverScreen() {
    const gameOverScreen = buildDom(`
      <section>
        <h1>Game Over</h1>
        <button class="restart-button">Restart</button>
      </section>
    `)

    const restartButton = document.querySelector('.restart-button');

    restartButton.addEventListener('click', buildGameScreen);

  }

  buildSplashScreen();
}

window.addEventListener('load', main)