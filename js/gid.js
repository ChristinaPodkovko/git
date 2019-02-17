$("#button-next").on('click', function(event) {
    var leftStyle = $('.galary')[0].offsetLeft;
    $('.galary').animate({"left": leftStyle-200 + "px"}, 'slow')
 });
 $("#button-prev").on('click', function(event) {
    var rightStyle = $('.galary')[0].offsetRight;
    $('.galary').animate({"right": rightStyle+200 + "px"}, 'slow')
 });