import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import ContactsList from "./components/contacts-list.component";
import EditContact from "./components/edit-contact.component";
import CreateContact from "./components/create-contact.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={ContactsList} />
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/create" component={CreateContact} />
      </div>
    </Router>
  );
}

export default App;
