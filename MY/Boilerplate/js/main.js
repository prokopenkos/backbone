
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    initialize: function(){
        console.log("A new sog was been created.")
    }
});

var song = new Song();
