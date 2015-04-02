App.Views.JobPostListView = Backbone.View.extend ({

    el: #main,

    intitialize: function() {
      this.listenTo(this.collection, 'reset', this.renderAll());
    },

    renderAll: function() {
      this.collection.each(this.renderOne, this);
    },

    renderOne: function() {
      this.$el.append(new App.Views.JobPostModalView({ model: jobPost }).$el);
    },

    events: {
  'click .show-more': 'showModal'
    },

    showModal: function(event) {
      var model = this.collection.get( $(event.target).data('id') );
      model.fetch({
        success: function(model) {
          console.log(model);
          new App.Views.JobPostModalView({ model: model });
        }
  });
}
});
});
