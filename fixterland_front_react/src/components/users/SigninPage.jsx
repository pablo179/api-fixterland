import React,{Component} from 'react';
import {SigninComponent} from './SigninComponent'
import {Dialog,FlatButton} from 'material-ui'
class SigningPage extends Component{
    state={
        newUser:{},
        open:false,
    }
    handleNewUser=(e)=>{
        let {newUser} = this.state;
        let field = e.target.name;
        newUser[field] = e.target.value;
        this.setState({newUser})
    }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

    signUp=(e)=>{
        e.preventDefault()
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/users/';
        console.log(this.state.newUser)
        var request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(this.state.newUser),
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>{r.json().then(data=>{
                if(r.statusText==='Bad Request'){
                    this.handleOpen()
                   }else{
                    console.log(data)
                    let url ='http://localhost:8000/api-token-auth/';
                    var request2 = new Request(url,{
                        method: 'POST',
                        body: JSON.stringify(this.state.newUser),
                        headers: new Headers({
                          'Content-Type': 'application/json'
                        })
                      });
                      fetch(request2)
                      .then(r=>{
                        if(r.ok)return r.json()
                        console.log(r.json())
                        return
                      })
                      .then(data=>{
                        console.log(data)
                        localStorage.setItem('userToken',JSON.stringify(data.token));
                        this.props.history.push('/creatingprofile')
                      }).catch(e=>{
                        console.log(e)
                        this.handleOpen();
                      })
                   }
            })
            
        }).catch(e=>{
            console.log(e)
            this.handleOpen()
        })
    }

    render(){
        let{newUser}=this.state;
        
        return(
        <div className="Signin_container">
        <Dialog
          title="Error"
          actions={[
            <FlatButton
              label="Aceptar"
              primary={true}
              onClick={this.handleClose}
            />,
          ]}
          modal={true}
          open={this.state.open}
        >
          Es posible que el nombre de usuario ya exista o los datos ingresados
          sean incorrectos.
        </Dialog>
            <SigninComponent
            {...newUser}
            signUp={this.signUp}
            handleNewUser={this.handleNewUser}
            />}
            </div>
        )
    }
}
export default SigningPage