import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import SpecificGame from './Pages/SpecificGame/SpecificGame';

class App extends React.Component {

   

    render() {
  
      return (
        <div className="App">

          <Header />

          <Switch>
            
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/game/:gameId" exact component={SpecificGame} />

          </Switch>
          
        </div>
      );
  }
}

export default App;
