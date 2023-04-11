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
  constructor({ position, size, imageSrc }) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.position = position;
    this.size = size;
    this.imageSrc = imageSrc;
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
    'https://cdn.jsdelivr.net/gh/NicPix30/2D-Game-Template@main/backgroundLevel1.png',
  size: {
    width: canvas.width,
    height: canvas.height,
  },
});

//basic player
const player1 = new Player({
  position: {
    x: canvas.width / 2,
    y: 362,
  },
  imageSrc:
    'https://cdn.jsdelivr.net/gh/NicPix30/2D-Game-Template@main/box.png',
  size: {
    width: 50,
    height: 50,
  },
});

//____________________________________________________________________________________________________________________________________
//                                              Controls User Input on the WASD Keys
//                 This is done to make movement and other actions smoother instead of using normal keypress which stutters
const TickRate = 30,
  keyDown = {},
  keyMap = {
    87: 'up',
    65: 'left',
    83: 'down',
    68: 'right',
  };

window.addEventListener('keydown', (event) => {
  keyDown[keyMap[event.which]] = true;
});

window.addEventListener('keyup', (event) => {
  keyDown[keyMap[event.which]] = false;
});

var tick = function () {
  if (keyDown['up']) {
    // up code
  } else if (keyDown['down']) {
    // down code
  } else if (keyDown['left']) {
    player1.position.x -= 10;
  } else if (keyDown['right']) {
    player1.position.x += 10;
  }

  setTimeout(tick, TickRate);
};

tick();
//____________________________________________________________________________________________________________________________________

function coreAnimationLoop() {
  window.requestAnimationFrame(coreAnimationLoop);
  c.clearRect(0, 0, canvas.width, canvas.height);
  backgroundLevel1.draw();
  player1.draw();
}

coreAnimationLoop();
