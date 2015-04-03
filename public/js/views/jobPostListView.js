App.Views.JobPostList = Backbone.View.extend ({

      el: '#list',

      initialize: function() {
        console.log("new JobPostList view created");
        console.log(this.collection);
        this.template = Handlebars.compile( $('#list-view-template').html() );
        this.listenTo(this.collection, 'reset', this.renderAll);
      },

      events: {
        'click .job-post-preview': 'showModal'
      },

      renderAll: function() {
          for (var i = 0; i < this.collection.length; i++) {
            var job = this.collection.models[i];
            this.renderOne(job);
          }
      },



      renderOne: function(model) {
        var previewTemplate = Handlebars.compile($('#preview-template').html());
        this.$el.append(previewTemplate(model.toJSON()));
      },

      renderModal: function(model) {
        // this.$el.append(new App.Views.JobPostModal({ model: model }).$el);
        this.$el.prependTo($('body'));
      },

      events: {
        'click .job-post-preview': 'showModal'
      },

      showModal: function(model) {
          console.log('this has been clicked');
            App.jobPostModal.setModel(model);
            // App.jobPostModal.render();
            App.jobPostModal.$el.show();
      }
  });
