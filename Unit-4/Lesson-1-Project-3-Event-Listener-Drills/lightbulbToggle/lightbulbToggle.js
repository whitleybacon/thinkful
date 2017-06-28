/*
Use event listeners to detect when user clicks on
an element with the .js-lightbulb class. Then
the current element should get the class .bulb-on applied
and any other elements that previously had the .bulb-on class
should have it removed.
*/

function handleBulbClicks() {
  $('.lightbulb').click(function(event){
    $('.lightbulb').removeClass('bulb-on');
    $(this).addClass('bulb-on')
  });  
}

$(function() {
  handleBulbClicks();
});