var loadImage = function (path, width, height) {
  var img = document.createElement('img');
  var result = {
    dom: img,
    width: width,
    height: height,
    loaded: false,
  };

  img.onload = function () {
    result.loaded = true;
  }

  img.src = path;

  return result;
};

var drawImage = function (img, x, y, context) {
  /* console.log(!img.loaded, img);
  if (!img.loaded) {
    console.error('Not loaded image!');
    return;
  } */

  context.drawImage(
    img.dom,
    0,
    0,
    img.width,
    img.height,
    x,
    y,
    img.width,
    img.height
  );
}

module.exports = {
  loadImage: loadImage,
  drawImage: drawImage,
};
