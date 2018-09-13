module.exports = function component() {
  var canvas = document.createElement('canvas');

  canvas.id = 'canvasTetris';
  canvas.height = 600;
  canvas.width = 600;
  canvas.style.border = 'gray 1px solid';
  canvas.innerHTML = 'Error. Canvas didn\'t work.';

  return canvas;
}
