const canvas = document.querySelector('canvas');
const c = canvas.getContext('2D');

class Sprite
{
  constructor({position})
  {
    this.position = position
    this.image = new Image();
    this.image.src = ''
  }
}