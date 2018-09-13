module.exports = function component() {
  var element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}
