var createCanvas = require('./createCanvas');

var wrapper = document.createElement('div');
var title = document.createElement('h1');

document.body.style.margin = '0';
document.body.style.background = '#95d89c';
wrapper.style.width = '100%';
wrapper.style['text-align'] = 'center';
title.innerHTML = 'Tetris';

wrapper.appendChild(title);
wrapper.appendChild(createCanvas());
document.body.appendChild(wrapper);