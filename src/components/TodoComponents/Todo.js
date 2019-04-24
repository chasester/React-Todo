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
                <TodoList todoListItems={this.state.todoItems} listitemcb={i => this.onclicked(i)} />
                <TodoForm submitcb={str => this.addItem(str)} clearcb={() => this.clear()}/>
            </div>
        );
    }
    onclicked(i)
    {
        var arry = this.state.todoItems;
        arry[i].active = !arry[i].active
        this.setState({todoItems : arry});
    }
    clear()
    {
        var arr = this.state.todoItems;
        arr = 
        this.setState({todoItems : arr.filter(x=> x.active)});
    }

    addItem(str)
    {
        if(str.split(" ").length === 0) return;
        this.state.todoItems.push({name : str, active : true});
        this.setState({todoItems : this.state.todoItems})
    }
}

export default Todo;