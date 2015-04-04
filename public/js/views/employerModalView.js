App.Views.EmployerModal = Backbone.View.extend({

  el: '#show-modal',

  initialize: function() {
    // App.employerModal = new App.Views.EmployerModal({ model: App.employer });
    this.template = Handlebars.compile( $('#employer-modal-template').html() );
    this.listenTo(this.model, 'change', App.jobPostModal.showModal);
    this.render();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
  },

  setModel: function(newModel) {
    this.model = newModel;
    this.render();
  },

  events: {
    'click .close': 'hideModal'
  },

  hideModal: function() {
    this.$el.fadeOut(500);
    this.model = null;
  }

});
