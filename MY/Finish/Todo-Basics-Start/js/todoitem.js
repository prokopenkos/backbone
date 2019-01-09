let TodoItem = Backbone.Model.extend({
    defaults:{
        isCompleted: false
    },
    url: "fakeUrl",
    validate: function(attr){
        if(!attr.description)
            return "Description is required."
    },
    toggle: function(){
        this.set("isCompleted", !this.get("isCompleted"));
    }
});