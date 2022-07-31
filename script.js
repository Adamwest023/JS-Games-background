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
backgroundLayer1.src = 'assets/background-layers/layer-2.png';
const backgroundLayer3 = new Image();
backgroundLayer1.src = 'assets/background-layers/layer-3.png';
const backgroundLayer4 = new Image();
backgroundLayer1.src = 'assets/background-layers/layer-4.png';
const backgroundLayer5 = new Image();
backgroundLayer1.src = 'assets/background-layers/layer-5.png';


function animate() {
    ctx.drawImage(backgroundLayer3, 0, 0);
    requestAnimationFrame(animate);
};

animate();
