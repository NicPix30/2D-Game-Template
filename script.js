//2D Game Template
//Naming Convention Rules:
//GameObjects have camel case with a underscore (_playerObject, _playerProjectiles)
//UI will have a camel case (playerHealthUi, enemyDamageMeter)

//________________________________________________________________________________________________

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

//class for all sprites in the game
class Sprite {
  constructor({ position, imageSrc, size }) {
    this.position = position;
    this.image = new Image();
    this.image.src = imageSrc;
    this.size = size;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}

class Player {
  constructor({ position, size, imageSrc, physics }) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.position = position;
    this.size = size;
    this.imageSrc = imageSrc;
    this.physics = physics;
  }
  draw() {
    c.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.width,
      this.size.height
    );
  }
}

//basic background image
const backgroundLevel1 = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  imageSrc:
    '',
  size: {
    width: canvas.width,
    height: canvas.height,
  },
});

//basic player
const player1 = new Player({
  position: {
    x: canvas.width / 2,
    y: canvas.height / 1.7,
  },
  imageSrc:
    '',
  size: {
    width: canvas.width / 20,
    height: canvas.height / 20,
  },
  physics: {
    friction: 2,
    velocity: 0,
    acceloraction: 1,
    minspeed: 0.2,
    maxspeed: 13,
  },
});

//____________________________________________________________________________________________________________________________________
//                                              Controls User Input on the WASD Keys
//                 This is done to make movement and other actions smoother instead of using normal keypress which stutters
const TickRate = 30,
  keyDown = {},
  keyMap = {
    87: 'up',
    38: 'up',
    37: 'left',
    65: 'left',
    40: 'down',
    83: 'down',
    39: 'right',
    68: 'right',
  };

let keyPressed = false;
window.addEventListener('keydown', (event) => {
  keyDown[keyMap[event.which]] = true;
  keyPressed = true;
});

window.addEventListener('keyup', (event) => {
  keyDown[keyMap[event.which]] = false;
  keyPressed = false;
});

var PhysicsUpdateLoop = function () {
  if (keyDown['up']) {
    // up code
  } else if (keyDown['down']) {
    // down code
  } else if (keyDown['left'] && !keyDown['right']) {
    if (player1.physics.velocity > -player1.physics.maxspeed) {
      player1.physics.velocity -= player1.physics.acceloraction;
    }
  } else if (keyDown['right'] && !keyDown['left']) {
    if (player1.physics.velocity < player1.physics.maxspeed) {
      player1.physics.velocity += player1.physics.acceloraction;
    }
  }

  player1.position.x += player1.physics.velocity;
  if (keyPressed == false) {
    player1.physics.velocity =
      player1.physics.velocity / player1.physics.friction;
  }
  if (
    player1.physics.velocity < player1.physics.minspeed &&
    player1.physics.velocity > -player1.physics.minspeed
  ) {
    player1.physics.velocity = 0;
  }

  setTimeout(PhysicsUpdateLoop, TickRate);
};

PhysicsUpdateLoop();

setInterval(function debbuger() {
  console.log(player1.physics.velocity);
}, 2000);

//____________________________________________________________________________________________________________________________________

function coreAnimationLoop() {
  window.requestAnimationFrame(coreAnimationLoop);
  c.clearRect(0, 0, canvas.width, canvas.height);
  backgroundLevel1.draw();
  player1.draw();
}

coreAnimationLoop();
