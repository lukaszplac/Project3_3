$( document ).ready(function(index) {
  $("header > nav > .row > ul>li").each(function() {
  		$(this).delay(500*index).queue(function() { 
  			$(this).addClass('animated fadeInRight').deque(); 
  			})
  	})
});