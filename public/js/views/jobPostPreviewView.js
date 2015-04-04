App.Views.JobPostPreviewView = Backbone.View.extend({
	className: 'preview',
	initialize: function() {
		console.log("new jobPost preview created");
		this.template = Handlebars.compile($('#preview-template').html());
		this.listenTo(this.model, 'destroy', this.remove);
		this.render();
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}

});