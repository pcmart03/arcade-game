// Enemies our player must avoid
var Enemy = function() {
    this.x = -100;
    this.y = this.randomRow();
    this.speed = 120
    this.sprite = 'images/enemy-bug.png';
}

Enemy.prototype.randomRow = function() {
  var num = Math.floor((Math.random()*3 + 1));
  if (num == 1) {
    row = 60;
  } else if (num == 2) {
    row = 140;
  } else {
    row = 220;
  }
  return row;
}
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
      if (this.x < 500) {
        this.x += this.speed * dt;
      } else {
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
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 380;
}

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
