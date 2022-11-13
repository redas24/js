let canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;


let ctx = canvas.getContext('2d');
ctx.font = '30px Cursive';
ctx.fillText ("JavaScript learning path", 50, 50);
document.body.appendChild(canvas);