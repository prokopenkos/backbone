let Song = Backbone.Model.extend();
let SongView = Backbone.View.extend({
    render: function(){
        let template = _.template($("#songTemplate").html());
        let html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    }
});
let song = new Song({ title: "Title 1", plays: 20000});
let songView = new SongView({ el: "#container", model: song});
songView.render();
