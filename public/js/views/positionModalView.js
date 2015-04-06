App.Views.PositionModal = Backbone.View.extend({

initialize: function() {
    this.template = Handlebars.compile( $('#position-modal-template').html() );
    this.render();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON()) );
  },

  setModel: function(newModel) {
    this.model = newModel;
    this.render();
  },
});
