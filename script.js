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

backgroundLevel1.draw();
