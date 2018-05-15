import React,{Component} from 'react';
import {TextField, RaisedButton} from 'material-ui';

class Login extends Component{
    Islogged =(logged)=>{
        if(logged.logged===true){
            return(
                <div className="Home_options">
                <li>Nuevo Juego</li>
                <li>Continuar</li>
                <li>Perfil</li>
                <li>Comunidad</li>
            </div>
            )
        }else{
            return(
                <div className="Home_options">
                <TextField
                    hintText="e-mail"
                    floatingLabelText="E-mail"
                    style={{width:'90%', color:'black'}}
                />
                <br/>
                <TextField
                    hintText="password"
                    floatingLabelText="Password"
                    style={{width:'90%'}}
                />
                <br/>
            <RaisedButton label="Log In" fullWidth={true} secondary={true}/>
            <br/>
            <div className="twobuttons">
            <label > No tienes una cuenta?</label>
            <RaisedButton label="Sign In" primary={true} />
            </div>
            </div>
            )
        }
    }
    
    render(){
        let logged =this.props;
        return(
                  this.Islogged(logged.logged)
         )
    }
}
export default Login;