App.Views.JobPostList = Backbone.View.extend ({

      el: '#main',

      intitialize: function() {
        this.template = Handlebars.compile( $('#list-view-template').html() );
        this.listenTo(this.collection, 'reset', this.renderAll() );
      },

      renderAll: function() {
        this.collection.each(this.renderOne, this);
      },

      renderOne: function(model) {
        var previewTemplate = Handlebars.compile($('#list-preview-template').html());
        this.$el.append(previewTemplate(model.toJSON()));
      },

      renderModal: function(model) {
        this.$el.append(new App.Views.JobPostModal({ model: model }).$el);
      },

      events: {
        'click .show-more': 'showModal'
      },

      showModal: function(event) {
        var model = this.collection.get( $(event.target).data('id') );
        model.fetch({
          success: function(model) {
            console.log(model);
            new App.Views.JobPostModal({ model: model });
          }
      });
    }
  });
