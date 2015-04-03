App.Views.JobPostList = Backbone.View.extend ({

      el: '#main',

      initialize: function() {
        console.log("new JobPostList view created");
        console.log(this.collection);
        this.template = Handlebars.compile( $('#list-view-template').html() );
        this.listenTo(this.collection, 'reset', this.renderAll);
        this.$el.on('click', '.job-post-preview', this.showModal);
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
        var jobId = $('div').data('job');
      },

      renderModal: function(model) {
        // this.$el.append(new App.Views.JobPostModal({ model: model }).$el);
        this.$el.prependTo($('body'));
      },

      // events: {
      //   'click .job-post-preview': 'showModal'
      // },

      showModal: function() {
          console.log('preview has been clicked');
            App.jobPostModal.setModel();
            // App.jobPostModal.render();
            App.jobPostModal.$el.show();
      }
  });
