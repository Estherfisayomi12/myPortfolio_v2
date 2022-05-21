/* This is a jQuery function that is executed when the document is ready. It is checking the scroll
position of the document and if it is greater than 50, it is changing the background color of the
element with the id of leadstoheader2. */
$(document).ready(function () {
	var scrollPos = 0;
	$(document).scroll(function () {
		scrollPos = $(this).scrollTop();
		if (scrollPos > 50) {
			$('#leadstoheader2').css('background-color', '#fff');
			$('.header-list').css('color', 'rgb(6, 6, 94)');
			$('.header-img').attr('src', '/img/log.png');
		} else {
			$('#leadstoheader2').css('background-color', 'rgb(6, 6, 94)');
			$('.header-list').css('color', '#fff');
			$('.header-img').attr('src', '/img/log1.png');
		}
	});
});
