App.Collections.JobPosts = Backbone.Collection.extend ({
    url: '/job_posts',
    model: App.Models.JobPost
});
