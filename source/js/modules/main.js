var picturefill = require('picturefill');
var menu = require('./menu');
var modal = require('./modal');
var map = require('./map');

menu();
if (document.querySelector('.modal')) {
  modal();
}
if (document.querySelector('#map')) {
  ymaps.ready(map);
}
