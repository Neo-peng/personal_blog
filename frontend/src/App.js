import React from 'react';
import './App.sass';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route path="/article" component={BlogList}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
