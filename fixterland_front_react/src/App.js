import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {Dialog,FlatButton} from 'material-ui'

class App extends Component {

  state={
    logged: false,
    user:{},
    open:false,
  }

  componentWillMount(){
    this.checkIfuser()
}

logIn=(user)=>{
  console.log(user);
  let url ='http://localhost:8000/api-token-auth/';
  var request = new Request(url,{
    method: 'POST',
    body: JSON.stringify(user),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  });
  fetch(request)
  .then(r=>{
    if(r.ok)return r.json()
    console.log(r.json())
    return
  })
  .then(data=>{
    console.log(data)
    localStorage.setItem('userToken',JSON.stringify(data.token));
    this.setState({logged:true})
  }).catch(e=>{
    console.log(e)
    this.handleOpen();
  })
}

  logOut=()=>{
    localStorage.removeItem('userToken');
    this.setState({logged:false})
  }
  
  checkIfuser=()=>{
    let userToken=JSON.parse(localStorage.getItem('userToken'));
    console.log(userToken);
    if(userToken){
      this.setState({logged:true})
    }else{
      this.setState({logged:false})
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };
  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    let {logged}=this.state;
    return (
      <div className="App">

        <audio src={require('./components/media/themefix.mp3')} autoPlay loop></audio>
          
        <Dialog
          title="Error"
          actions={[
            <FlatButton
              label="Aceptar"
              primary={true}
              onClick={this.handleClose}
            />
          ]}
          modal={true}
          open={this.state.open}
        >
          Usuario o contrraseña incorrectos
        </Dialog>
        <Routes
            logIn={this.logIn}
            logged={logged}
        />
      </div>
    );
  }
}

export default App;
