function init(){
  tour = new Tour({
    steps: });
};

$(document).ready(function() {
  $('#start-tour-button').on('click', function() { 
    init();
    tour.init().start(true);
    $(this).fadeOut();
    $('#restart-tour-button').delay(500).fadeIn();
  });
  $('#restart-tour-button').on('click', function() { tour.goTo(0); });
});

