var locations = []; // this array will hold your objects

// object constructor

// object instances

// push object instances to locations array

// DO NOT MODIFY THIS CODE
$document.ready(function () {
  locations.forEach(function (element, index) {
    var $ol = $('<ol></ol>');
    $ol.append('<span>' +  element.state + '</span>');
    $ol.append('<span>' +  element.revenue + '</span>');
    $ol.append('<span>' +  element.locationCount + '</span>');
    $ol.append('<span>' +  element.averageRevenue() + '</span>');
    $('main').append($ol);
  });
});
