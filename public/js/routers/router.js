/*

  Using the router to create models, collections and views at startup
  and to fetch our main collection of job posts

*/

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


});
