App.Views.UserInfo = Backbone.View.extend ({

    el: '#user-info-header',


    initialize: function(model) {
      console.log('new User header created');
      this.renderUserData();//var newUser = $('#user-info-template').html();
      //this.template = Handlebars.compile(newUser);
      //this.$el.html(newUser);
    },

    events: {
      'click .edit-button': 'edit'
      //'click .submit-button': 'renderUserData',
      //'click .submit-button': 'hide'
    },

    renderUserData: function() {
      //var model = this.model;
      var template = Handlebars.compile($('#user-info-template').html());
      this.$el.append(template(this.model.toJSON()));
    },

    edit: function(){

    }


});
