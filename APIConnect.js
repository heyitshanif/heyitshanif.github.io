var instaGram ={};

(function () {
	instaGram.search = search;
	function search(tag) {//url :tempat untuk meminta data, alamtnya
		//kalo pake function search|| var url="https://graph.facebook.com/search?q=%23"+ tag + "&limit=10000&access_token=CAAVeYmFZCg9QBABZCQZCjJLLuqCkgxGc4KSMgAhz1WZCkVfSj1FgyYS0YFGWgv6KRKlN4hZA4ON087h5BrblCyim0QID573bOq2aydZCKV4BlpZA7i9mZABXUBNufalexI0ra7J5WmUQZCsAuB4XVZBYfHSSZBujl1uUOxKgSkd4T3h5C6qVRGsBiruE2SUGnLcuvBh1OmyQvEoqgZDZD";
		var url="https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=ad35d04d41bb4119986744cf288a4ff5";
		$.getJSON(url, toScreen);//callback: kalau minta sesuatu entah kemana web server, mereka tidak kasih feedbacknya kasih , sehingga bisa lanjut keperintah langsung, jadi pas feedbacknya datangnya kapan aja masuknya ke callback
		instaGram.search = search;
	}
	function getData(data){console.log(data);}
	function toScreen(photos){
		$.each(photos.data, function(index,photo){
		//styling di dalem sini:
		var gambar="<div id='instagramActivity'><img src='"+photo.images.low_resolution.url+"'/></div>"
			$('#instagramActivity').append(gambar);
			//buat top like slider 
			//var topLike=""
		});
	}
}
)();
instaGram.search('majorglasses');//Hashtag
/*$(function(){
	$('#btnSearch').click(function(){
		var strInput = $('#inputSearch').val();
		$('#photo-wrapper').html("");
		instaGram.search('DIE');
	});*/
//});

//token = 808138500.ad35d04.e2596cbd5102485e91dccbf30cfc5b56