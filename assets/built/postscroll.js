(function($) { "use strict";

	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery);

// contents from source of casper:
$(document).ready(function () {
    // FitVids - start
    var $postContent = $(".post-full-content");
    $postContent.fitVids();
    // FitVids - end

    // Replace nav with title on scroll - start
    Casper.stickyNavTitle({
        navSelector: ".site-nav-main",
        titleSelector: ".post-full-title",
        activeClass: "nav-post-title-active",
    });
    // Replace nav with title on scroll - end

    // Hover on avatar
    var hoverTimeout;
    $(".author-list-item").hover(
        function () {
            var $this = $(this);

            clearTimeout(hoverTimeout);

            $(".author-card").removeClass("hovered");
            $(this).children(".author-card").addClass("hovered");
        },
        function () {
            var $this = $(this);

            hoverTimeout = setTimeout(function () {
                $this.children(".author-card").removeClass("hovered");
            }, 800);
        }
    );
});
