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

### main.js

Functions to load start, main, and game over screens

functions to manage transitions

functions to connect keyboard commands to to player movements (from player.js) and events (from game.js)

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

// Player object storing visual representataion and location (x, y) to be manipulated

// functions for movement in all 4 directions 

// functions to check whether movement is possible (based on classes wall vs. path)



### maze.js

Create maze constructore
Create maze data array (simple ony at first)
Create confinement function (to only allow movement on the path)



## Task
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - destroySplash
- Main - 3 states transitions
- Game - buildDom
- Game - TimeOut test
- Game - 3 states transitions

- Maze: Constuctor
- Maze: Maze Array

- Player: Player object
- Player: Player movement

- Main: connect Maze and Playewr and test

- Maze: Confinement function

- Game: Collision functions and winning condition

- Game add timer

## Links


### Trello
[Link url] https://trello.com/b/FIolwstx/untitled-board


### Git
URls for the project repo and deploy
[Link Repo] https://github.com/BenjaminWoerner/NomNomNom-Game


### Slides
URls for the project presentation (slides)
[Link Slides.com]
