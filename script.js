var locations = []; // this array will hold your objects

// object constructor
function State(state, rev, count){
  this.state = state;
  this.revenue = rev;
  this.locationCount = count;
  this.averageRevenue = function(){
    return Math.round(this.revenue / this.locationCount);
  };
}
// object instances
var Ill = new State("Illinois", 5000, 12);
var Minn = new State("Minnesota", 300, 3);
var Nev = new State("Nevada", 25000, 1);

// push object instances to locations array
locations.push(Ill);
locations.push(Minn);
locations.push(Nev);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
