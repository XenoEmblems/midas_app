App.Views.JobOps = Backbone.View.extend({
	el: '#job-ops',

	events: {
		'click #show-all-jobs': 'showJobs',
		'click #show-javascript': 'showJavascriptJobs',
		'click #show-node': 'showNodeJobs',
		'click #show-backbone': 'showBackboneJobs',
		'click #show-ruby': 'showRubyJobs',
		'click #show-front-end': 'showFrontEndJobs',
		'click #show-internships': 'showInternshipJobs',
		'click #user-name': 'showUserJobs',
		'keypress': 'showJobsToo'
	},

	showJobs: function(){
		console.log('this button clicked');
		$('.special-buttons').empty();
		this.$el.append(App.jobsView.$el);
	},

	showUserJobs: function() {
		console.log('back clicked');
		this.$el.append(App.jobsView.$el);
	},


	showJavascriptJobs: function(){
		$('button').remove();
		$.ajax({url: '/job_posts/query?q=javascript', method:'GET'})
		.done(function(data){
			App.javascriptJobs = new App.Collections.JobPosts(data);
			App.javascriptList = new App.Views.JobPostList({collection: App.javascriptJobs});
			App.jobOps.showJavascript();
		})

	},

	showNodeJobs: function(){
		$('button').remove();
		$.ajax({url: '/job_posts/query?q=node', method:'GET'})
		.done(function(data){
			App.nodeJobs = new App.Collections.JobPosts(data);
			App.nodeList = new App.Views.JobPostList({collection: App.nodeJobs});
			App.jobOps.showNode();
		})

	},

	showBackboneJobs: function(){
		$('button').remove();
		$.ajax({url: '/job_posts/query?q=backbone', method:'GET'})
		.done(function(data){
			App.backboneJobs = new App.Collections.JobPosts(data);
			App.backboneList = new App.Views.JobPostList({collection: App.backboneJobs});
			App.jobOps.showBackbone();
		})

	},

	showRubyJobs: function(){
		$('button').remove();
		$.ajax({url: '/job_posts/query?q=ruby', method:'GET'})
		.done(function(data){
			App.rubyJobs = new App.Collections.JobPosts(data);
			App.rubyList = new App.Views.JobPostList({collection: App.rubyJobs});
			App.jobOps.showRuby();
		})

	},

	showFrontEndJobs: function(){
		$('button').remove();
		$.ajax({url: '/job_posts/query?q=front%20end', method:'GET'})
		.done(function(data){
			App.frontEndJobs = new App.Collections.JobPosts(data);
			App.frontEndList = new App.Views.JobPostList({collection: App.frontEndJobs});
			App.jobOps.showFrontEnd();
		})

	},

	showInternshipJobs: function(){
		$('button').remove();
		$.ajax({url: '/job_posts/title_query?q=Intern', method:'GET'})
		.done(function(data){
			App.internshipsJobs = new App.Collections.JobPosts(data);
			App.internshipsList = new App.Views.JobPostList({collection: App.internshipsJobs});
			App.jobOps.showInternships();
		})

	},

	showJavascript: function(){
		$('.special-buttons').empty();
		this.$el.append(App.javascriptList.$el);
	},

	showNode: function(){
		$('.special-buttons').empty();
		this.$el.append(App.nodeList.$el);
	},

	showBackbone: function(){
		$('.special-buttons').empty();
		this.$el.append(App.backboneList.$el);
	},

	showRuby: function(){
		$('.special-buttons').empty();
		this.$el.append(App.rubyList.$el);
	},

	showFrontEnd: function(){
		$('.special-buttons').empty();
		this.$el.append(App.frontEndList.$el);
	},

	showInternships: function(){
		$('.special-buttons').empty();
		this.$el.append(App.internshipsList.$el);
	},


});
