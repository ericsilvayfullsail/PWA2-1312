/*
Description: DESCRIPTION INFO GOES HERE
1Main.js
*/

$(function(){

	//application functions
	var loadLang = function(){
		$.ajax({
			url: 'xhr/list.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				var langs = response.languages;
				var html = '';
				var html = $.render(langs, 'langtemplate');

				$('#languages').append(html);
			}
		});
	};

	//app init
	var init = function(){
		$.get('templates/languages.html', function(htmlArg){
			var lang = $(htmlArg).find('#lang-template').html();
			$.template('langtemplate', lang);
		});
	};

	init();

	//app events
	$('button').on('click', function(e){
		loadLang();
		return false;
	});









	// $.ajax({
	// 	url: 'xhr/list.php',
	// 	type: 'get',
	// 	dataType: 'json',
	// 	success: function(response){
	// 		//console.log(response);

	// 		var langs = response.languages;
	// 		var html = '';

	// 		for(var i = 0, max = langs.length; i < max; i++){
	// 			html+=''+
	// 			'<div class="language">'+
	// 				'<h2>'+langs[i].name+'</h2>'+
	// 				'<p id="descrip">'+langs[i].description+'</p>'+
	// 				'<p id="version">'+langs[i].version+'</p>'+
	// 			'</div>';
	// 		};
	// 		$('#languages').append(html);
	// 	}
	// });
});