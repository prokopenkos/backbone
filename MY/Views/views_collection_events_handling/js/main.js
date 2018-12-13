let Song = Backbone.Model.extend();
let Songs = Backbone.Collection.extend({
    model: Song
})
let SongView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(){
        this.model.on("add", this.onSongAdded, this);
        this.model.on("remove", this.onSongRemoved, this);
    },
    onSongAdded: function(song){
        let songView = new SongView({ model: song});
        this.$el.append(songView.render().$el);
    },
    onSongRemoved: function(song){
        this.$("li#" + song.id).remove();
    },
    render: function(){
        let self = this;
        console.log( self )
        for (let index = 0; index < this.model.length; index++) {
            const song = this.model.models[index];

            let songView = new SongView({ model: song});
            self.$el.append(songView.$el);
        }
    }
});
let songs = new Songs([
    new Song({ id: 1, title: "title 1"}),
    new Song({ id: 2, title: "title 2"}),
    new Song({ id: 3, title: "title 3"})
]);
let songView = new SongView({ el: "#songs", model: songs});
songView.render();
