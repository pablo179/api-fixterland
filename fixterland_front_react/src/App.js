import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';

class App extends Component {

  state={
    logged: false,
    user:{},
    profile:{
      title:[],
      lvl:0,
    },
  }

  render() {
    return (
      <div className="App">
        <Routes
          
        />
      </div>
    );
  }
}

export default App;
