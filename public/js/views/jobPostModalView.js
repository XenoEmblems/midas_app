App.Views.JobPostModal = Backbone.View.extend ({

    el: '#show-modal',

    initialize: function() {
      // App.employerModal = new App.Views.EmployerModal({ model: App.employer });
      this.template = Handlebars.compile( $('#job-post-modal-template').html() );
      this.render();
    },

    events: {
      'click .close': 'hideModal',
      'click .employer': 'getEmployerData',
      'click .back': 'render'
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

    // checks to see if we have an employer name 
    // and calls our API if we do
    getEmployerData: function() {
      var employer = this.model.get('employer_name');
      if (employer) {
        $.ajax({url: window.location + 'employer_info?name=' + employer, method:'GET'})
        .done(this.checkEmployerData);
      }
    },

    // checks to see if we found an exact match
    // using a field called "exactMatch" in the glassdoor api 
    // and makes a model if we do
    checkEmployerData: function(data){
      data = $.parseJSON(data).response.employers[0];
      if(data.exactMatch) {
        var newEmployer = new App.Models.Employer(data);
        App.jobPostModal.showEmployer(newEmployer);   
      }
    },

    showEmployer: function(employerModel){
      var employerModal = new App.Views.Employer({model: employerModel});
      this.$el.html(employerModal.$el.html())
      
    }


});
