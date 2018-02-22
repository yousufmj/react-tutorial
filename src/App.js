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

    switchNameHandler = (newName) => {
        this.setState({
            persons:  [
                { name: newName, age: 25},
                { name: 'manu', age: 26},
                { name: 'stefanuu', age: 29}
            ]
        })
    }

    nameChangedHandler = (event) => {
        this.setState({
            persons:  [
                { name: 'Max', age: 25},
                { name: event.target.value, age: 26},
                { name: 'stefanuu', age: 29}
            ]
        })
    }
    render () {
        return (
            <div className="App">
                <h1>I am a react app</h1>
                <button onClick={ () => this.switchNameHandler('new name') }>Switch Name</button>

                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'duper')}
                    changed={this.nameChangedHandler}
                >
                        my hobies: games
                </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />

            </div>
        );

    }
}

export default App;