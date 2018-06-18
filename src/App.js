import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Author from "./Components/Author";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Quête : Création d'un composant React</h1>
                </header>
                <p className="App-intro">
                    <Author name='Julien' />
                </p>
            </div>
        );
    }
}

export default App;
