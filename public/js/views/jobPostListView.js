App.Views.JobPostList = Backbone.View.extend ({

      el: '#main',

      initialize: function() {
        console.log("new JobPostList view created");
        console.log(this.collection);
        this.template = Handlebars.compile( $('#list-view-template').html() );
        this.listenTo(this.collection, 'reset', this.renderAll() );
        this.collection.fetch();
      },

      renderAll: function() {
        console.log("renderAll called")
        console.log(this.collection.length); // this isn't getting reset...
        this.collection.each(function (one) {
          console.log("heyyyyyy");
        })
      },

      renderOne: function(model) {
        console.log(model);
        this.$el.append("RENDER ONE CALLED");
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
