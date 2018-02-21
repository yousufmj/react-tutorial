import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    render () {
        return (
            <div className="App">
                <h1>I am a react app</h1>
                <Person name="Yousuf" age="21" />
                <Person name="Jon" age="26" >My Hobbies: Gaming</Person>
            </div>
        );

    }
}

export default App;