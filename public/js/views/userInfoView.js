App.Views.UserInfo = Backbone.View.extend ({

    el: '#user-form',

    initialize: function() {
      var newUser = $('#user-form-template').html();
      this.template = Handlebars.compile(newUser);
      this.render();
    },

    events: {
      'click .submit-button' : 'submit'
    },

    submit: function() {
      var newUserHtml = this.newUser(this.model.toJSON());
      this.$el.html(newUserHtml);
    }
});
