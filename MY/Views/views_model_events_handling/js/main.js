let Song = Backbone.Model.extend({
    defaults:{
        listeners: 0
    }
});
let SongView = Backbone.View.extend({
    initialize: function(){
        this.model.on("change", this.onModelChange, this)
    },
    onModelChange: function(){
        console.log('Model Change');
        this.render();
    },
    render: function(){
        this.$el.html( this.model.get('title') + " listeners:  "+ this.model.get('listeners') + " <button>Listen</button> <button class='bookmark'>Bookmark</button>");
        
        return this;
    }
});
let song = new Song({title: "Blue in Green"});
let songView = new SongView({el: "#container", model: song});
songView.render();