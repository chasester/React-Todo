// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

class TodoList extends React.Component
{

    render()
    {
        return(
            <div className='list-container'>
                {this.props.todoListItems.map((x,i)=> <div className='list-item' key={i} onClick={()=> this.clicked()}>{x}</div>)}
            </div>
        );
    }

    clicked()
    {
        
    }
}

export default TodoList;