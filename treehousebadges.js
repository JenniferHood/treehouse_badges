// mycode.js
var url = 'https://teamtreehouse.com/jenniferminetree.json';
var icon_url = [];

$.ajax(url).done(showBadges);
 function showBadges(results){
	 console.log(results);
	 var myBadges = results.badges;
	 for (var i = 0; i < myBadges.length; ++i){
		 var img = $('<img>', { 'src': myBadges[i].icon_url  });
		 img.attr('width', 100);
		 img.attr('height', 100);
		 img.appendTo('body');
	 }
 };

//TODO 
//  var user = new badgeGrid('body', results){
	// 	 user.render();
	//  }
