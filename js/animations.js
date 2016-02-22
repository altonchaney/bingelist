
	function filterEpisodes(kind){
		var $episodeKind = $('.show-episode.'+kind);
		var $episodeKindSelector = $('.list-item.'+kind);
		
		if ($episodeKind.css('display') == 'none') {
			$episodeKind.fadeIn(300);
		} else {
			$episodeKind.fadeOut(300);
		}
		
		if ($episodeKindSelector.css('opacity') == '1') {
			$episodeKindSelector.animate({opacity: '.5'}, 300);
		} else {
			$episodeKindSelector.animate({opacity: '1'}, 300);
		}
	}
	
	$('.list-item.required').click(function(){ filterEpisodes('required'); });
  $('.list-item.maybe').click(function(){ filterEpisodes('maybe'); });
  $('.list-item.filler').click(function(){ filterEpisodes('filler'); });