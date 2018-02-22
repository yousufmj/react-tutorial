import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            { name: 'max', age: 25},
            { name: 'manu', age: 26},
            { name: 'stef', age: 21}
        ]
    }

    switchNameHandler = () => {
        this.setState({
            persons:  [
                { name: 'Maximiian', age: 25},
                { name: 'manu', age: 26},
                { name: 'stefanuu', age: 29}
            ]
        })
    }
    render () {
        return (
            <div className="App">
                <h1>I am a react app</h1>
                <button onClick={this.switchNameHandler}>Switch Name</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

            </div>
        );

    }
}

export default App;