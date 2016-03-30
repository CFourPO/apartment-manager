$(function() {
	$('a.link').on('click', function(event) {
		var el = $(this).parent('li').data('link');
		var thisContent = $('' + el + '');
		thisContent.show();
		
		event.preventDefault();
		});
});