App.Views.Employer = Backbone.View.extend({


  initialize: function() {
    this.template = Handlebars.compile( $('#employer-modal-view').html() );
    console.log("do i have a model?", this.model)
    this.render();
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    //this.$el.html( this.template.html() );
  }


});
