# Joinyy.github.io


Simple website hosting a snake game, written in js with p5. Inspired by some YouTube video, but nothing copypasted.

## 1. File structure:
### 1.1 snake.js

Contains the snake-class with the following member variables and functions:

#### 1.1.1 Member variables:


  ``dir = 0; // right = 0, left = 1, up = 2, down = 3``
  Direction of the snake.
  
  ``x = floor((game.xMax - 1) / 2);``
  x position of the snakehead.
  
  ``y = floor((game.yMax - 1) / 2);``
  y position of the snakehead.
  
  ``length = 0;``
  length of the snaketail.
  
  ``hist = [];``
  all positions of the snaketail.

#### 1.1.2 Member methods:

