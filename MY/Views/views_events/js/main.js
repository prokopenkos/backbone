let Song = Backbone.Model.extend();
let SongView = Backbone.View.extend({
    events:{
        "click": "onClick",
        "click .bookmark": "onClickBookmark"
    },
    onClick: ()=>{
        console.log('listen Clicked');
    },
    onClickBookmark: function(e){
        e.stopPropagation();
        console.log('Bookmark Clicked');
    },
    render: function(){
        this.$el.html(this.model.get('title') + " <button>Listen</button> <button class='bookmark'>Bookmark</button>");
        
        return this;
    }
});
let song = new Song({title: "Blue in Green"});
let songView = new SongView({el: "#container", model: song});
songView.render();