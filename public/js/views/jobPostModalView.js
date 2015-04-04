App.Views.JobPostModal = Backbone.View.extend ({

    el: '#show-modal',

    initialize: function() {
      // App.employerModal = new App.Views.EmployerModal({ model: App.employer });
      this.template = Handlebars.compile( $('#job-post-modal-template').html() );
      this.render();
    },

    events: {
      'click .close': 'hideModal',
      'click .employer': 'getEmployerData'
    },

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );
    },

    setModel: function(newModel) {
      this.model = newModel;
      this.render();
    },

    hideModal: function() {
      this.$el.fadeOut(500);
      this.model = null;
    },

    getEmployerData: function() {
      var employer = this.model.get('employer_name');
      if (employer) {
        $.ajax({url: window.location + 'employer_info?name=' + employer, method:'GET'})
        .done(this.cleanEmployerData);
      }
    },

    cleanEmployerData: function(data){
      data = $.parseJSON(data).response.employers[0];
        if(data.exactMatch){
          this.showEmployer(data);
        }
    },

    showEmployer: function(data){
      
    }


});
