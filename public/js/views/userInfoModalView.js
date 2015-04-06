App.Views.UserInfoModal = Backbone.View.extend ({

    el: '#user-modal',


    initialize: function() {
      this.template = $('#user-form-template');
      this.render();
    },

    events: {
      'click .submit-button': 'captureData',
    },

    render: function(){
      this.$el.html(this.template.html());
      this.$el.show();
    },

    captureData: function() {
      var data = {
            name: $("#user-name").val(),
            address: $("#user-address").val(),
            city: $("#user-address-city").val(),
            state: $("#user-address-state").val(),
            zip: $("#user-address-zip").val(),
            phoneNumber: $("#user-phone-number").val(),
            email: $("#user-email").val(),
      };
      var newModel = new App.Models.UserInfo(data);
      console.log(newModel);
      var newView = new App.Views.UserInfo({model: newModel});//new App.Views.UserInfo(newModel);
      this.hide();
      //NOW DO SOMETHING WITH THIS DATA
    },

    hide: function() {
      this.$el.fadeOut(500);
      this.model = null;
    }
});
