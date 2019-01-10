
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

$(document).ready(function(){
    let todoItems = new TodoItems();
    todoItems.fetch({
        success: function(){
            let todoItemsView = new TodoItemsView({ model: todoItems });
            $("body").append(todoItemsView.render().$el);
        }
    })
})