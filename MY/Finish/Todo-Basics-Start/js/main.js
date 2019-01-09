
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

$(document).ready(function(){
    let todoItems = new TodoItems([
        new TodoItem({ id:1, description: "TodoItem1"}),
        new TodoItem({ id:2, description: "TodoItem2"}),
        new TodoItem({ id:3, description: "TodoItem3"}),
    ]);

    let todoItemsView = new TodoItemsView({ model: todoItems });
    $("body").append(todoItemsView.render().$el);


})