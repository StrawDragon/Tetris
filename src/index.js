var createCanvas = require('./utils/createCanvas');
var imageUtils = require('./utils/image');
var getTetriminoMap = require('./constants/tetrimino');

var loadImage = imageUtils.loadImage;
var drawImage = imageUtils.drawImage;

var width = 600, height = 600;
var wrapper = document.createElement('div');
var title = document.createElement('h1');
var canvasTetris = createCanvas('canvasTetris', height, width);

document.body.style.margin = '0';
document.body.style.background = '#95d89c';
wrapper.style.width = '100%';
wrapper.style['text-align'] = 'center';
title.innerHTML = 'Tetris';

wrapper.appendChild(title);
wrapper.appendChild(canvasTetris);
document.body.appendChild(wrapper);

var contextTetris = canvasTetris.getContext('2d');
var contextBuf = createCanvas('canvasBuf', height, width).getContext('2d');

var background = loadImage(
  './images/background.png',
  width,
  height,
);

var well = loadImage(
  './images/well.png',
  250,
  485,
);

var block = loadImage(
  './images/block.png',
  16,
  16,
);

var tetrimino = {
  figure: 5,
  rotate: 0,
  color: '#aacc55',
  draw: function (x, y, canvas) {
    var tetriminoMap = getTetriminoMap(this.figure, this.rotate);

    for (var i = 0; i < 4; i++) {
      for (var j = 0; j < 4; j++) {
        if (tetriminoMap[j][i] === 1) {
          canvas.fillStyle = this.color;
          canvas.fillRect(x + i * 16, y + j * 16, 16, 16);
          drawImage(block, x + i * 16, y + j * 16, canvas);
        }
      }
    }
  }
}

var process = function () {
  drawImage(background, 0, 0, contextBuf);
  drawImage(well, 70, 50, contextBuf);
  tetrimino.draw(200, 200, contextBuf);
  contextTetris.save();
  contextTetris.drawImage(contextBuf.canvas, 0, 0, width, height);
  contextTetris.restore();

  /* var timer = setInterval(
    processStep,
    50
  ); */

  /* function processStep() {
    drawImage(background, 0, 0);
    drawImage(girl, x, 260 - 216);
    context.save();
    //blank();
    context.drawImage(contextBuf.canvas, 0, 0, width, height);
    context.restore();
  }; */
}

setTimeout(process, 500);
