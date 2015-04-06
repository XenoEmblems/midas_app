App.Views.UserInfoModal = Backbone.View.extend ({

    el: '#user-modal',


    initialize: function() {
      this.template = $('#user-form-template');
      this.render();
    },

    events: {
      'click .submit-button': 'captureData',
      'keypress': 'keyAction'
    },

    render: function(){
      this.$el.html(this.template.html());
      this.$el.show();
    },

    captureData: function() {
      var data = {
            name: $("#user-name-form").val(),
            address: $("#user-address-form").val(),
            city: $("#user-city-form").val(),
            state: $("#user-state-form").val(),
            zip: $("#user-zip-form").val(),
            phoneNumber: $("#user-phone-number-form").val(),
            email: $("#user-email-form").val(),
      };
      var newModel = new App.Models.UserInfo(data);
      console.log(newModel);
      var newView = new App.Views.UserInfo({model: newModel});//new App.Views.UserInfo(newModel);
      this.hide();
    },

    keyAction: function(e) {
      var data = {
            name: $("#user-name-form").val(),
            address: $("#user-address-form").val(),
            city: $("#user-city-form").val(),
            state: $("#user-state-form").val(),
            zip: $("#user-zip-form").val(),
            phoneNumber: $("#user-phone-number-form").val(),
            email: $("#user-email-form").val(),
      };
      var code = e.keyCode || e.which;
        if(code == 13) {
          var newModel = new App.Models.UserInfo(data);
          console.log(newModel);
          var newView = new App.Views.UserInfo({model: newModel});
          this.hide();
        }
    },

    hide: function() {
      this.$el.fadeOut(500);
      this.model = null;
    }
});
