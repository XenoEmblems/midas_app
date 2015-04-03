App.Views.EmployerModal = Backbone.View.extend({

  el: '#show-modal',

  initialize: function() {
    this.template = Handlebars.compile( $('#employer-modal-template').html() );
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
    this.$el.fadeOut(500);
    this.model = null;
  }

});
