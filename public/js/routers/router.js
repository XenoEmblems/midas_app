App.Routers.JobPostRouter = Backbone.Router.extend({

  initialize: function() {
    console.log('New Job Post Router initialized');
    App.jobPost = new App.Models.JobPost();
    App.employer = new App.Models.Employer();
    App.position = new App.Models.Position();
    App.userInfo = new App.Models.UserInfo();


    App.jobPosts = new App.Collections.JobPosts();
    App.jobPostModal = new App.Views.JobPostModal({ model: App.jobPost });
    App.userInfoModal = new App.Views.UserInfoModal();
    App.jobPosts.fetch({reset: true});
    App.jobsView = new App.Views.JobPostList({ collection: App.jobPosts });
    App.jobOps = new App.Views.JobOps();
},



  //routes: {
  //  // '': 'index',
  //  '/job_posts': 'listView',
  //  '/job_posts/:id': 'showSingleView',
  //  '/employer/:id': 'showEmployer',
  //  '/positions/:id': 'showPosition'
  //},
//
  //listView: function() {
  //  this.empty();
  //  $('#main').html(new App.jobsView.$el);
  //},
//
  //showUserForm: function() {
  //  $('#user-form-header').html(new App.userFormView.$el);
  //},
//
  //showSingleView: function() {
  //  var job = new App.Models.JobPost({ job_ID: id });
  //  App.jobPostModal.render();
  //},
//
  //showEmployer: function() {
  //  var employer = new App.Models.Employer({ employer_id: id });
  //  App.employerPostModal.render();
  //},
//
  //showPosition: function() {
  //  var position = new App.Models.Position({ position_id: id });
  //  App.positionModal.render();
  //}

});
