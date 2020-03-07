import React from 'react';
import './App.sass';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import BlogList from './components/BlogList';
import Footer from './components/Footer'
import Signin from './components/Signin';
import { GlobalProvider } from './contexts/GlobalState';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route path="/article" component={BlogList}></Route>
            <Route path="/signin" component={Signin}></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </GlobalProvider>

    </div>
  );
}

export default App;
