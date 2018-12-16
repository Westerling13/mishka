ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.938575, 30.322847],
        zoom: 16
    });

    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/icon-map-pin.svg',
        iconImageSize: [67, 100],
        iconImageOffset: [-40, -95]
    });

    myMap.geoObjects.add(myPlacemark);
    myMap.behaviors.disable('scrollZoom');
}
