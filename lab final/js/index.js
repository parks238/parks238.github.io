$(document).ready(function() {
	
	
	var filterArray = [];
	

	// SETUP
	// ----------------------------------------------------------
	// Add a new array to filterArray for each filter-group
	// ----------------------------------------------------------
	$('#filters .filter-group').each( function(index) {
		filterArray.push([]);
	});
	
	
	// CLICK
	// ----------------------------------------------------------
	$('[data-filter-toggle]').on('click', function() {
		var filter = $(this).attr('data-filter-toggle'),
			parent = $(this).parent('.filter-group'),
			parentIndex = $('#filters .filter-group').index(parent);
		
		
		$(this).toggleClass('is-active');
		
		
		if ($(this).hasClass('is-active')) {
			
			
			filterArray[parentIndex].push(filter);
		} else {
			
			var i = filterArray[parentIndex].indexOf(filter);
			if (i != -1) {
				filterArray[parentIndex].splice(i, 1);
			}
		}
		
		
		render();
	});
	
	
	function render() {
		var filterGroupsActive = countActiveFilterGroups(),
			filterGroupMatches,
			filtersShowing = [],
			itemTags;
		

		
		if (filterGroupsActive === 0) {
			$('.item').removeClass('is-hidden');
			return false;
		}

		
		$('.item').each(function(index) {
			itemTags = $(this).attr('data-filter-tags').split(',');
			filterGroupMatches = 0;
			
			
			for (i = 0; i < filterArray.length; i++) {
				if (findOne(filterArray[i], itemTags)) {
					filterGroupMatches++;
				}
			}
			
			
			if (filterGroupMatches === filterGroupsActive) {
				$(this).removeClass('is-hidden');
			} else {
				$(this).addClass('is-hidden');
			}
			
			
			if (! $(this).hasClass('is-hidden')) {
				for (i = 0; i < itemTags.length; i++) {
					if (! findOne(filtersShowing, [itemTags[i]])) {
						filtersShowing.push(itemTags[i]);
					}
				}
			}
		});
		
		
		
	}

	
	
	function countActiveFilterGroups() {
		var filterGroupsActive = 0;
		
		for (i = 0; i < filterArray.length; i++) { 
			if (filterArray[i].length != 0){
				filterGroupsActive++;
			}
		}
		return filterGroupsActive;
	}

	
	
	function findOne(haystack, query) {
		return query.some(function (v) {
			return haystack.indexOf(v) >= 0;
		});
	};
	
});











