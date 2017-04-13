$(function() {

  $('.modalactivator').click(function(){
    $('.overlays').addClass('is-open');
    return false;
  });

  $('.close-btn').click(function(){
    $('.overlays').removeClass('is-open')
  });


});
