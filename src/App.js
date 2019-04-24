import React from 'react';
import './App.css'
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='container'>
        <Todo todolist={[{name:"hello", id: Date.now(), active : true}, {name:"World", id : Date.now(), active : true},{name:"Yay", id: Date.now(), active : false}]}/>
      </div>
    );
  }
}

export default App;
