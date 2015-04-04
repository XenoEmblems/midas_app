App.Collections.JobPosts = Backbone.Collection.extend ({
    initialize: function() {
    	console.log("JobPosts collection created");
    },
    url: '/job_posts',
    model: App.Models.JobPost
});


// addSongs: function(data) {
// 		console.log(data);
// 		var results = data.results;
// 		App.collection.currentModel = 'song';
//
// 		var songModels = results.map(function(song) {
// 			return new App.Models.Song(song);
// 		});
//
// 		App.collection.reset(songModels);
// 	},