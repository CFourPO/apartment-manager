$(document).ready(function(){
	var scrollPos = 0;
	var homeList = $('#home-list');
	var homeList_startPos = '-150px';
	homeList.css('top', homeList_startPos);

	var isListInvisible = true;

	$(document).scroll(function() {
		scrollPos = $(this).scrollTop();
		if(isListInvisible) {
			homeList.animate({top: '+=150px'}, 600);
			isListInvisible = false;
		}
	});
});
