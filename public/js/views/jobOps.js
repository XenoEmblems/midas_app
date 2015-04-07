App.Views.JobOps = Backbone.View.extend({
	el: '#job-ops',

	events: {
		'click .show-me-jobs': 'showJobs',
		'keypress': 'showJobsToo'
	},

	showJobs: function(){
		$('.show-me-jobs').remove();
		this.$el.append(App.jobsView.$el);
	},

	showJobsToo: function(event) {
		var x = event.keyCode;
    if (x == 13) {
			$('.show-me-jobs').remove();
			this.$el.append(App.jobsView.$el);
    	}
	},

	showJavascriptJobs: function(){
		$('.show-me-jobs').remove();
		$.ajax({url: '/job_posts/query?q=javascript', method:'GET'})
		.done(function(data){
			App.javascriptJobs = new App.Collections.JobPosts(data);
			App.javascriptList = new App.Views.JobPostList({collection: App.javascriptJobs});
			App.jobOps.showList('javascript');
		})

	},

	showList: function(listName){
		if (listName === 'javascript'){
			this.$el.append(App.javascriptList.$el)
		}
	}

});
