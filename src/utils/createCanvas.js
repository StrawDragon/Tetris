module.exports = function component(id, height, width) {
  var canvas = document.createElement('canvas');

  canvas.id = id;
  canvas.height = height;
  canvas.width = width;
  canvas.style.border = 'gray 1px solid';
  canvas.innerHTML = 'Error. Canvas didn\'t work.';

  return canvas;
}
