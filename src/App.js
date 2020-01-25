import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>

            </Switch>
        </div>
    );
}

export default App;