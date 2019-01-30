var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y + 55;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//this is controlled through code not the user

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //if enemy is not passed boundary
        //move forward
        //increment x by speed *dt
    //else
        //reset position to start
        if(this.x < this.boundary) {
            this.x += this.speed * dt;
        }
        else {
            this.x= this.resetPos; 
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


class Hero {
    constructor () {
        this.sprite = 'images/char-boy.png';
        this.step = 101;
        this.jump = 83
        this.startX = this.step * 2 ;
        this.startY = (this.jump * 4) + 55; 
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;
        

    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  
  
    handleInput(input) {
        switch(input) {
            case 'left':
            if( this.x > 0) {
                this.x -= this.step;
            } 
                 break;
            case 'up': 
            if(this.y > this.jump) {
                this.y -= this.jump;
            }
               break;
            case 'right': 
                if (this.x < this.step *4 ) {
                this.x += this.step;
            }
                break;
            case 'down':
            if( this.y < this.jump *4) {
                this.y += this.jump;
            }
                break;

            }
        
        }
        update() {
        for (let enemy of allEnemies) {
        if (this.y === enemy.y && (enemy.x + enemy.step/2 > this.x && enemy.x < this.x + this.step/2)) {
            this.reset();
         }
                if (this.y < 0) {
                    this.victory = true;
                    this.reset();
                }
            
            if (this.y === 55) {
                console.log('Win');
                this.victory = true;
            }
        }

          
    }
        

        reset () {
            this.y = this.startY;
            this.x = this.startX;
            }
        }




const player = new Hero();
const bug1 = new Enemy(-101, 0, 200);
const bug2 = new Enemy(-101, 83, 300);
const bug3 = new Enemy((-101*2.5), 83, 300);
const allEnemies = [];
allEnemies.push(bug1, bug2, bug3);
console.log(allEnemies);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
    //init allEnemies array
    //For each enemy create and push new Enemy object in the above array



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
