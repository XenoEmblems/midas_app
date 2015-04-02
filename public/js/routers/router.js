App.Routers.JobPostRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('New Job Post Router initialized');
    // App.navigationView = new App.Views.NavigationView;
    App.jobPosts = new App.Collections.JobPosts;
    App.posts.fetch();
  },

  routes: {
    '':'home',
    'posts':'index',
  },

  home: function() {
    console.log('sup.');
  },

  index: function() {
    App.navigationView.showPosts();
  },

  show: function(id) {
    App.navigationView.showPosts();
    $('#' + id).click();
  }

});
