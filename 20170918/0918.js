$(document).ready(function() {

  var top = $('.tab');

  top.on('click focusin', function() {
    $(this).parent().addClass('active')
      .siblings().removeClass('active')
  });
});