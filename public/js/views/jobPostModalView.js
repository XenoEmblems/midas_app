App.Views.JobPostModal = Backbone.View.extend ({

    el: '#show-modal',

    initialize: function() {
      this.template = Handlebars.compile( $('#job-post-modal-template').html() );
      this.render();
    },

    events: {
      'click .close': 'hideModal'
    },

    render: function() {
      this.$el.html( this.template( App.jobPost.toJSON() ) );
      this.$el.show();
    },

    setModel: function(newModel) {
      this.model = newModel;
    },

    hideModal: function() {
      this.$el.fadeOut(250);
      this.model = null;
    }
});
