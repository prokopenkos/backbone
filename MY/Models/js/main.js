
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend({
    initialize: function(){
        console.log("A new sog was been created.")
    },
    defaults:{
        genre: "Jazz"
    },
    validate: function(attr){
        if(!attr.name) return 'Name is required'
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

console.log(song.isValid());
console.log(song.validationError);

let Animal = Backbone.Model.extend({
    walk: function(){
        console.log('Animal walking ...');
    }
})

let Dog =  Animal.extend({
    walk: function(){
        console.log('Dog walking ...');
    }
});
let dog = new Dog();
dog.walk();