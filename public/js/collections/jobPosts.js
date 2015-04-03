App.Collections.JobPosts = Backbone.Collection.extend ({
    initialize: function() {
    	console.log("JobPosts collection created");
    },
    url: '/job_posts',
    model: App.Models.JobPost
});
