$(document).ready(function() {

	// Mobile Navigation
	$(".main_content_nav_m").addClass("hide");
	$(".main_content_nav_m").addClass("hide").before('<div class="nav_small_m"><span class="icon-list"></span></div>');
	$(".nav_small_m").click(function(){
		$(".main_content_nav_m").slideToggle(750);
	});
	$(window).resize(function(){
		if(window.innerWidth > 480) {
			$(".main_content_nav_m").removeAttr("style");
		}
	});

	// SVG Logo Fallback

	if(!Modernizr.svg) {
    $('img[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
    });
	};

	// Pagination 
	var $pagination = $('.pagination');

	$pagination
	.find('.older')
	.on('click', function(event) {

		event.preventDefault();

		var $this = $(this);

		$.ajax($this.attr('href'))
		.done(function(data) {

			var $dummy = $('<div></div>').html(data),
				$postExcerpts = $dummy.find('.post-excerpt'),
				$older = $dummy.find('.pagination .older');

			$postExcerpts.insertBefore($pagination);

			$this.attr('href', $older.attr('href'));

			if(!$older.length) $this.remove();
		});
	});
});