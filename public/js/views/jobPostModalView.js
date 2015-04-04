App.Views.JobPostModal = Backbone.View.extend ({

    el: '#show-modal',

    initialize: function() {
      // App.employerModal = new App.Views.EmployerModal({ model: App.employer });
      this.template = Handlebars.compile( $('#job-post-modal-template').html() );
      this.render();
    },

    events: {
      'click .close': 'hideModal',
      'click .employer': 'showEmployerModal'
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
    },

    setModel: function(newModel) {
      this.model = newModel;
      this.render();
    },

    hideModal: function() {
      this.$el.fadeOut(500);
      this.model = null;
    },

    showEmployerModal: function() {
      console.log('employer clicked');
      console.log();
      $('#show-modal').empty();
    }
});
