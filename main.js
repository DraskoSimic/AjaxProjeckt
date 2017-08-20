$(document).ready(function($){
	$.ajax({
		url: 'http://mysafeinfo.com/api/data?list=presidents&format=json',
		type: 'get',
		dataType: 'json'
	})
	.done(function(result){
		result.forEach(function(e, i){
			console.log(e.nm);
		})
	})
});