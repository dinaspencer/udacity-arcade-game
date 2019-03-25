// Enemies our player must avoid
class Enemy  {
    constructor(x, y) {
    this.x=x;
    this.y=y+60;
    this.sidemove=101;
    this.sprite = 'images/enemy-bug.png';
    this.screenEdge=this.sidemove*5;
    this.speed=Math.floor(Math.random() * 240) + 60;

  }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
    update(dt) {
        if(this.x<this.screenEdge){
          this.x+= this.speed * dt;
        }
        else this.x=-101;

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    }

// Draw the enemy on the screen, required method for game
    render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  }

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class Hero {
    constructor() {
        this.sprite='images/char-cat-girl.png';
        this.sidemove=101;
        this.updownmove=83;
        this.startPosX=this.sidemove*2;
        this.startPosY=this.updownmove*5;
        this.x=this.startPosX;
        this.y=this.startPosY;
        }
    
    
    render(){
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
        }

    update(){
            for (let enemy of allEnemies){
              if((this.y-23===enemy.y)&&((enemy.x+enemy.sidemove/2)>this.x)&&(enemy.x<(this.x+this.sidemove/2))){
                this.resetPlayer();
              }
            };

            if (this.y===0){
              this.levelUp();
              this.resetPlayer();
            }
          
        }

    resetPlayer(){
          this.x=this.startPosX;
          this.y=this.startPosY;
        }

          
    levelUp(){
          for (let enemy of allEnemies){
            enemy.speed+=20;
          }

          //allEnemies.push(new Enemy(0, 83));
      }

    handleInput(moves){
            switch (moves){
              case 'left': 
              if (this.x>0){
                   this.x-=this.sidemove};
              break;
              case 'up': 
              if (this.y>0){
                this.y-=this.updownmove};  
              break;
              case 'right': 
              if (this.x<this.sidemove*4){
                this.x+=this.sidemove};
              break;
              case 'down': 
              if (this.y<this.updownmove*5){
                this.y+=this.updownmove};
                break;
            }
            }
    }

class Gem {
  constructor(x, y){
    this.sprite='images/gem-green.png';
    this.x=x;
    this.y=y+60;
  //this.gemAppear= every 10 seconds?
    
  }

  render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

  update(){
      //if player collides with gem, 
      //points go up and gem disappears - gem only stays 10 sec
      //set timer 
  }  
}    


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Hero();

const enemy1 = new Enemy(10,0);
const enemy2 = new Enemy(0, 83);
const enemy3 = new Enemy(50,166);
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

const gem = new Gem(101,166);


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



//game play: 
//arrow keys move the player 
//bugs move x speed (random?)
//when player reaches y=500, reset and add level - every level, bug speed increases by 5



//hearts and gems appear randomly - when player collides with them, they disappear and 
//extra points are given
//hearts are added (collide with heart) and removed (collide with bug)

//levels mean new enemies are added (push to add to array)
//game is over when no hearts are left


/* GEMS CLASS
randomly appear, set timer




if player collides with gem, add 100 points

// Draw the gem on the screen, required method for game
   


HEARTS CLASS

class Lives {
  constructor (){
  this.x= 
  this.y= TOP OF SCREEN AND IN THE MIDDLE
  ---add icon full image and icon empty image for this

  }

 render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
      DO IN CSS; ADD AND REMOVE CLASSES?? 
}
}


class Heart {
  constructor(){
  this.x=
  this.y= --random
  this.timeAppear= every 30 seconds?
  this.sprite='Heart.png';
  }

  render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
  
}

*/


