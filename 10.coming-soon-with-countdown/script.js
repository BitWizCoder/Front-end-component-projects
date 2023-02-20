$('#clock').countdown('2023/10/10', function(event) {
    var $this = $(this).html(event.strftime(''
      + '<div class="main">'
      + '<h1 class="count">%w <span> weeks </span></h1>'
      + '<h1 class="count">%d <span> days</span></h1>'
      + '<h1 class="count">%H <span> hr</span></h1>'
      + '<h1 class="count">%M <span> min</span></h1>'
      + '<h1 class="count">%S <span> sec</span></h1>'
      + '<div/>'
      ));
  });