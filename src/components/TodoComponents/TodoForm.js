import React from 'react';

class TodoForm extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render()
    {
        return(
            <form onSubmit={e => {e.preventDefault(); this.props.submitcb(this.state.value); this.setState({value: ''}); }}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={e => this.setState({value: e.target.value})} />
                </label>
                <input type="submit" value="Add Todo" />
                <input type="reset" value="Clear Complete" onClick={() => {this.setState({value: ''}); this.props.clearcb();}}/> 
            </form>
        );
    }
}

export default TodoForm;