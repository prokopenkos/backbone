
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    initialize: function(){
        console.log("A new sog was been created.")
    },
    defaults:{
        genre: "Jazz"
    }
});

var song = new Song({
    artist: "Artist",
    publishYear: 1967
});
song.set("title", "Blue in Green");

console.log(song.get("artist"));
song.set({artist: "TestArtist"})
console.log(song.get("artist"));