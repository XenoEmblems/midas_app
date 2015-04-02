App.Views.JobPostModal = Backbone.View.extend ({

    el: '#modal',

    intialize: function {
      console.log('single post modal view is happening!');
      this.template = Handlebars.compile( $('#job-post-modal-template').html() );
      this.render();
    },

    render: function() {
      this.$l.html(this.template(this.model.toJSON() ) );
      this.$el.show;
    },

    events: {
      'click .close': 'hideModal'
    },

    hideModal: function() {
      this.$el.fadeOut(250);
      this.model = null;
    }
});
