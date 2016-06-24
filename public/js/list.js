(function($){

	$('#hamburger').one('click', showPanel2);
	
	function showPanel1(){
		console.log('hey')
		$("#panel2").hide();
		$('#panel1').show();
		$('#hamburger img').css('transform', 'rotate(0deg)')
		$('#hamburger').one('click', showPanel2);
	}
	function showPanel2(){
		$("#panel1").hide();
		$('#panel2').show();
		$('#hamburger img').css('transform', 'rotate(90deg)')
		$('#hamburger').one('click', showPanel1);
	}

	$("#review-weekly-standards").click(function(e){
		e.preventDefault();
		$(".list-overlay").hide();
		$("#rw-rating").show();
	});
	$("#disclosure").click(function(e){
		e.preventDefault();
		$(".list-overlay").hide();
		$("#rw-disclosure").show();
	});

	$(".list-overlay").click(function(e){
		e.preventDefault();
		$(".list-overlay").hide();
	})

}(jQuery));