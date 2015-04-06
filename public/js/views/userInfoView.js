App.Views.UserInfo = Backbone.View.extend ({

    el: '#user-info-header',


    initialize: function(model) {
      console.log('new User form created');
      var newUser = $('#user-form-template').html();
      this.template = Handlebars.compile(newUser);
      this.$el.html(newUser);
    },

    events: {
      'click .submit-button': 'renderUserData',
      'click .submit-button': 'hide'
    },

    renderUserData: function() {
      var model = this.model;
      var template = Handlebars.compile($('#user-form-template').html());
      var data = {
            name: $("#user-name").val(),
            address: $("#user-address").val(),
            city: $("#user-address-city").val(),
            state: $("#user-address-state").val(),
            zip: $("#user-address-zip").val(),
            phoneNumber: $("#user-phone-number").val(),
            email: $("#user-email").val(),
      };
      this.$el.append(this.template(this.data.toJSON()));
    },

    hide: function() {
      this.$el.fadeOut(500);
      this.model = null;
    }
});
