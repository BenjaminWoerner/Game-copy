# NomNomNom (working title)

## Description
NomNomNom is a game where the payer has to navigate through a maze while picking up treasures placed throughout the maze. The duration it takes to reach the endpoint is timed. All treasured have to be picked up to complete (reaching endpint wih treasures still in the maze will not let the player complete the level).


## MVP (DOM - CANVAS)
*CANVAS*, The mvp is a game where the player can move through the maze and the duration is timed.


## Backlog
- Animations of player & events
- Multiple levels
    - Time limit
    - Dynamically placed treasures
- Leaderboard
- Treasure collection
- Enemies


## Data structure
### game.js
```
Game(){
  this.canvas;
  this.ctx;
}

Game.prototype.startGame(){
}

Game.prototype.startLoop(){
  loop()
}

Game.prototype.updateAll(){
}

Game.prototype.clearAll(){
}

Game.prototype.renderAll(){
}

Game.prototype.checkAllCollisons(){
}

Game.prototype.finishGameCallback(){
}
```

### player.js
```
Player(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Character.prototype.update(){
}

Character.prototype.render(){
}

Character.prototype.move(){
}

Character.prototype.checkCollisionWithBlock(block){
}



```

### block.js
```
Block(){
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
}

Block.prototype.render(){
}
```


## States y States Transitions
```
- splashScreen()
  - destroyGameOver(if)
  - buildSplash()
  - addEventListener(startGame)
  
  
- starGame()
  - destroySplash()
  - destroyGameOver()
  - create new Game()
  - game.start()
  
  
- gameOver()
  - destroyGame()
  - buildGameOver()
  - addEventListener( if splashScreen, else startGame) 
```

## Task
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Main - 3 states transitions
- Game - buildDom
- Game - TimeOut test
- Game - 3 states transitions
- Main - GameWon
- Main - destroy Game
- Main - GameWon RESTART
- Main - removeGameWon
- Game - restartGame
- Game - addEventListener
- Block - create
- Game - create player
- Player - create
- Player - move
- Player - gravity
- Player - collision
- Player - jump
- Game - check win

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/Gabriel0liver/skull-jumper)
[Link Deploy](https://Gabriel0liver.github.io/skull-jumper/)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)
