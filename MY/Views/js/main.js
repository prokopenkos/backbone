
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
let Song = Backbone.Model.extend();
let Songs = Backbone.Collection.extend({
    model: Song
})
let SongView = Backbone.View.extend({
    tagName: "li",
    render: function(){
        this.$el.html(this.model.get('title'));

        return this;
    }
})
let SongsView = new Backbone.View.extend({
    render: function(){
        let self = this;
        this.model.each(function(song){
            let songView = new SongView({ model: song });
            self.$el.append(songView.render().$el);
        })
    }
})

let songs = new Songs([
    new Song({title: "Song title 2"}),
    new Song({title: "Song title 3"}),
    new Song({title: "Song title 4"})
])

let songsView = new SongsView({ el: '#songs', model: songs});
songsView.render();