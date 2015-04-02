App.Routers.JobPostRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('New Job Post Router initialized');
    // App.navigationView = new App.Views.JobsNavigationView;
    App.jobPosts = new App.Collections.JobPosts;
    App.jobPosts.fetch();
  },

  routes: {
    '':'home',
    'posts':'index',
  },

  home: function() {
    console.log('sup.');
  },

  // index: function() {
  //   App.navigationView.showPosts();
  // },

  show: function(id) {

  }

});
