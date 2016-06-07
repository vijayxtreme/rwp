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

Function.prototype.test = function(){
	var fn = this, args = Array.prototype.slice.call(arguments),
	object = args.shift();

	return function(){
		return fn.call(object)
	}
}

var myObj = {}
function dummy(){
	return this;
}
console.log(dummy())

var dummied = dummy.test(myObj);
console.log(dummied());