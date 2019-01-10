let TodoItemsView = Backbone.View.extend({
    tagName: 'ul',
    id: 'todoItems',

    initialize: function(options){
        if(!(options && options.model))
            throw new Error('model is not specified.');
        
        this.model.on("add", this.onAddTodoItem, this);
        this.model.on("remove", this.onRemoveTodoItem, this);

    },
    onRemoveTodoItem: function(todoItem){
        this.$("li#" + todoItem.id).remove();
        console.log('Removed', todoItem);
    },
    onAddTodoItem: function(todoItem){
        let view = new TodoItemView({ model: todoItem });
        this.$el.append(view.render().$el);
    },
    events: {
        "click #add" : "onClickAdd",
        "keypress #newTodoItem" : "onKeyPress",
    },
    onKeyPress: function(e){
        if(e.keyCode == 13)
            console.log("Enter Pressed");
    },
    onClickAdd: function(){
        let todoItem = new TodoItem({ title: this.$("#newTodoItem").val() });
        todoItem.save();

        this.model.add(todoItem);
    },
    render: function(){
        let self = this;

        this.$el.append("<input type='text' autofocus id='newTodoItem'></input>");
        this.$el.append("<button id='add'>Add</button>");
        this.model.each(function(todoItem){
            let view = new TodoItemView({ model: todoItem});
            self.$el.append(view.render().$el);

        })

        return this;
    }
});