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
    }
});
