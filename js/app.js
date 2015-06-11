// Enemies our player must avoid
var Enemy = function() {
    this.x = -100;
    this.y = this.randomRow();
    this.speed = 120
    this.sprite = 'images/enemy-bug.png';
}

// Pick a row for the enemy at random
Enemy.prototype.randomRow = function() {
  var num = Math.floor((Math.random()*3 + 1));
  row = num * 73;
  return row;
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
      if (this.x < 500) {
        this.x += this.speed * dt;
      } else {            //returns enemy to start and picks a new row.
        this.x = -100;
        this.y = this.randomRow();
      }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
  this.startX = 200;
  this.startY = 380;
  this.sprite = 'images/char-boy.png';
  this.x = this.startX;
  this.y = this.startY;
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
  switch(key) {
    case 'left':
      if (this.x > 0) {
        this.x -= 35;
      }
      break;
    case 'up':
      if (this.y > 60) {
        this.y -= 35;
      } else {
        this.reset();
      };
      break;
    case 'right':
      if (this.x < 405) {
        this.x += 35;
      }
      break;
    case 'down':
      if (this.y < 380){
        this.y += 35;
      }
      break;
  }
};

Player.prototype.reset = function () {
  this.x = this.startX;
  this.y = this.startY;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var normalEnemy = new Enemy();
var fastEnemy = new Enemy();
    fastEnemy.speed = 160;
var veryFastEnemy = new Enemy();
    veryFastEnemy.speed = 200;
var slowEnemy = new Enemy();
    slowEnemy.speed = 90;

var allEnemies = [
  normalEnemy, fastEnemy, veryFastEnemy, slowEnemy
];

var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
