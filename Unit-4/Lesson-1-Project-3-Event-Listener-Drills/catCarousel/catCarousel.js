/*
When the user clicks a thumbnail image, that image 
should be displayed in the full size image container at the top.
*/

function handleThumbnailClicks() {
  $('.thumbnail').click(function(event) {
    var imgSrc = $(this).find('img').attr('src');
    $('.hero img').attr('src', imgSrc);
  })
}

$(function() {
  handleThumbnailClicks();
});