var App = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {}
};

$(function() {
	console.log('Loaded, bro.');
	App.jobPosts = new App.Collections.JobPosts();
	App.jobsView = new App.Views.JobPostList({ collection: App.jobPosts });
	App.router = new App.Routers.JobPostRouter();
});
