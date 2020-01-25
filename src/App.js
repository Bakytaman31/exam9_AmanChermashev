import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Route, Switch} from "react-router-dom";
import Contacts from "./containers/Contacts/Contacts";
import AddContact from "./containers/AddContact/AddContact";
import EditContact from "./containers/EditContact/EditContact";

function App() {
    return (
        <div className="App">
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Contacts}/>
                <Route path="/addContact" exact component={AddContact}/>
                <Route path="/editContact/:id" component={EditContact}/>
            </Switch>
        </div>
    );
}

export default App;