App.Views.JobOps = Backbone.View.extend({
	el: '#job-ops',

	events: {
		'click .show-me-jobs': 'showJobs',
		'keypress': 'showJobsToo'
	},

	showJobs: function(){
		console.log("HEYYYYYY");
		$('.show-me-jobs').remove();
		this.$el.append(App.jobsView.$el);
	},

	showJobsToo: function(event) {
		var x = event.keyCode;
    if (x == 13) {
			$('.show-me-jobs').remove();
			this.$el.append(App.jobsView.$el);
    }
	}
});
