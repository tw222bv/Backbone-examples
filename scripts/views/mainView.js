define(['backbone', "jquery"] , function(Backbone, $) {
  return Backbone.View.extend({
  	render: function (){
  		this.$el.html("<h2> Hello World-helvete</h2>");
  		return this;
  	}
  });
});
