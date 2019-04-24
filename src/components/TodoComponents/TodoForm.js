import React from 'react';



class TodoForm extends React.Component
{

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        this.props.submitcb(this.state.value);
        event.preventDefault();
        this.setState({value: ''});
    }
    handleReset(event) 
    {
        this.setState({value: ''});
        this.props.clearcb();
    }
    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add Todo" />
                <input type="reset" value="Clear Complete" onClick={()=> this.handleReset()}/> {/* doesnt manually call the reset for some reason?*/}
            </form>
        );
    }
}

export default TodoForm;