App.Routers.JobPostRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('New Job Post Router initialized');
    App.jobPost = new App.Models.JobPost();
    App.employer = new App.Models.Employer();
    App.position = new App.Models.Position();

    App.jobPosts = new App.Collections.JobPosts();
    App.jobsView = new App.Views.JobPostList({ collection: App.jobPosts });



    // App.jobPostModal = new App.Views.JobPostModal({ model: App.jobPost });
    // App.employerModal = new App.Views.EmployerModal({ model: App.employer });
    // App.positionModal = new App.Views.PositionModal({ model: App.position });
    App.jobPosts.fetch();
  },

  routes: {
    // '': 'index',
    '/job_posts': 'listView',
    '/job_posts/:id': 'showSingleView',
    '/employer/:id': 'showEmployer',
    '/positions/:id': 'showPosition'
  },

  listView: function() {
    this.empty();
    // App.jobPostModal.hide();
    // App.employerModal.hide();
    // App.positionModal.hide();
    $('#main').html(new App.jobsView.$el);
  },

  showSingleView: function() {
    var job = new App.Models.JobPost({ job_ID: id });
    App.jobPostModal.render();
  },

  showEmployer: function() {
    var employer = new App.Models.Employer({ employer_id: id });
    App.employerPostModal.render();

  },

  showPosition: function() {
    var position = new App.Models.Position({ position_id: id });
    App.positionModal.render();
  }

});
