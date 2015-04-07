App.Views.JobOps = Backbone.View.extend({
	el: '#job-ops',

	events: {
		'click #show-all-jobs': 'showJobs',
		'click #show-javascript': 'showJavascriptJobs',
		'click #show-node': 'showNodeJobs',
		'click #show-backbone': 'showBackboneJobs',
		'click #show-ruby': 'showRubyJobs',
		'click #show-front-end': 'showFrontEndJobs',
		'click #show-git': 'showGitJobs',
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

	showJobsByQuery: function(){
		$('#job-ops').empty();
		console.log(this);
		var query = $(this).data('query');
		console.log(query);
		var url = '/job_posts/query?q=' + query;
		var collectionName = 'App.' + query + 'Jobs';
		var listName = 'App.' + query + 'List';
 		$.ajax({url: url, method: 'GET'})
		.done(function(data){
			collectionName = new App.Collections.JobPosts(data);
			listName = new App.Views.JobPostList({collection: collectionName});
			App.jobOps.showList(query);
		})
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

	showGitJobs: function(){
		$('button').remove();
		$.ajax({url: '/job_posts/query?q=git', method:'GET'})
		.done(function(data){
			App.gitJobs = new App.Collections.JobPosts(data);
			App.gitList = new App.Views.JobPostList({collection: App.gitJobs});
			App.jobOps.showFrontEnd();
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

	showGit: function(){
		$('.special-buttons').empty();
		this.$el.append(App.gitList.$el);
	},


});
