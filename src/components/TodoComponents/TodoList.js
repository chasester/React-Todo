// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component
{

    render()
    {
        return(
            <div className='list-container'>
                {this.props.todoListItems.map((x,i)=> <div className={`list-item ${x.active ? "" : "item-inactive"}`} key={i} onClick={()=> this.clicked(i)}>{x.name}</div>)}
            </div>
        );
    }

    clicked(i)
    {
        this.props.listitemcb(i);
    }
}

export default TodoList;