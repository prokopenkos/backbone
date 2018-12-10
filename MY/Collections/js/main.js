
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

var Song = Backbone.Model.extend();
var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({title: "Song 1", genre: "Disco", downloads: 110}),
    new Song({title: "Song 2", genre: "Dancing", downloads: 123}),
    new Song({title: "Song 3", genre: "Pop", downloads: 210})
])
songs.add(new Song({title: "Song 4", genre: "Jazz", downloads: 10}), {at:0}); // Insert on first place in the collection
songs.push(new Song({title: "Song 5", genre: "Jazz", downloads: 12})); // Insert on last place in the collection
let songsJazz = songs.where({genre: "Jazz"});
console.log(songsJazz);


let filteredSongs = songs.filter(function(song){ //Filtering Method
    return song.get("downloads") > 100
})
console.log('Filtered songs', filteredSongs);

songs.each(function(song){ //Collection each method
    console.log(song);
})

let firstSong = songs.at(0);
console.log(firstSong);
let songWithIdC1 = songs.get("c1");
songs.remove(firstSong);
console.log(firstSong);