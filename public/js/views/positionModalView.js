App.Views.PositionModal = Backbone.View.extend({

  el: '#modal',

  initialize: function() {
    this.template = Handlebars.compile( $('#position-modal-template').html() );
    this.render();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    this.$el.show();
  },

  events: {
    'click .close': 'hideModal'
  },

  hideModal: function() {
    this.$el.fadeOut(250);
    this.model = null;
  }

});