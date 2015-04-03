App.Views.JobPostList = Backbone.View.extend ({

      el: '#main',

      initialize: function() {
        console.log("new JobPostList view created");
        console.log(this.collection);
        this.template = Handlebars.compile( $('#list-view-template').html() );
        this.listenTo(this.collection, 'reset', this.renderAll);
        this.$el.on('click', '.job-post-preview', this.showModal);
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

      showModal: function() {
          var jobID = $(this).attr("data-job"); //get the job id from the html
          var job = App.jobPosts.get(jobID);  //get the right job from collection
          App.jobPostModal.setModel(job); //tell the modAl what modEl to use
          App.jobPostModal.$el.show(); //and show it

      }
  });
