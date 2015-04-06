App.Views.JobOps = Backbone.View.extend({
	el: '#job-ops',

	events: {
		'click .show-me-jobs': 'showJobs'
	},

	showJobs: function(){
		$('.show-me-jobs').remove();
		this.$el.append(App.jobsView.$el);
	}
});
