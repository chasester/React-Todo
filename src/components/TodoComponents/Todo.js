import React from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

class Todo extends React.Component
{
    constructor(props)
    {
        super(props)
         this.state = {todoItems : props.todolist && props.todolist.length ? props.todolist : []};
    }
    
    render()
    {
       
        return(
            <div className='todo-container'>
                <h1>TO DO LIST</h1>
                <TodoList todoListItems={this.state.todoItems} />
                <TodoForm callback={str => this.addItem(str)}/>
            </div>
        );
    }

    addItem(str)
    {
        console.log('helo')
        if(str.split(" ").length === 0) return;
        this.state.todoItems.push(str);
        this.setState({todoItems : this.state.todoItems})
    }
}

export default Todo;