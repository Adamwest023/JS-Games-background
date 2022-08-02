const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//creating the canvas parameters 
const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 5;

//use a constructor type to add our background images 
const backgroundLayer1 = new Image();
backgroundLayer1.src = 'assets/background-layers/layer-1.png';
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'assets/background-layers/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'assets/background-layers/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'assets/background-layers/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'assets/background-layers/layer-5.png';

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 0;
        this.width = 2400
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;

    }
    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.speed) {
            this.x = this.width + this.x - this.speed;
        }
        if (this.x2 <= -this.speed) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed);
    }
    draw() {
        
    }
}

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    requestAnimationFrame(animate);

};

animate();
