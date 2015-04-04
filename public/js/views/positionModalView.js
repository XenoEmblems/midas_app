App.Views.PositionModal = Backbone.View.extend({

  className: 'position-modal',

  initialize: function() {
    this.template = Handlebars.compile( $('#position-modal-template').html() );
    this.render();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
  },

  events: {
    'click .close': 'hideModal'
  },

  hideModal: function() {
    this.$el.fadeOut(500);
    App.jobPostModal.render();
  }

});
