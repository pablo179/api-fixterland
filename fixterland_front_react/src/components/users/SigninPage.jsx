import React,{Component} from 'react';
import {SigninComponent} from './SigninComponent'
import CreatingProfile from './CreatingProfile'
class SigningPage extends Component{
    state={
        signed:true,
        newUser:{}
    }
    handleNewUser=(e)=>{
        let {newUser} = this.state;
        let field = e.target.name;
        newUser[field] = e.target.value;
        this.setState({newUser})
    }

    
    signUp=(e)=>{
        e.preventDefault()
        //const userToken = JSON.parse(localStorage.getItem('userRanchoToken'));
        let url = 'http://localhost:8000/users/';

        var request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(this.state.newUser),
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>{
                if(r.statusText==='Bad Request'){
                    this.setState({signed:false})
                   }else{
                    
                r.json().then(
                        data=>{
                        this.setState({signed:true})
                    })
                    .then(
                        r=>{
                            let url ='http://localhost:8000/api-token-auth/';
                            var request = new Request(url,{
                              method: 'POST',
                              body: JSON.stringify(this.state.newUser),
                              headers: new Headers({
                                'Content-Type': 'application/json'
                              })
                            });
                            fetch(request)
                            .then(r=>{
                              if(r.ok)return r.json()
                              return
                            })
                            .then(data=>{
                              localStorage.setItem('userToken',JSON.stringify(data.token));
                              this.setState({logged:true})
                            }).catch(e=>{console.log(e)})
                        }   
                    )
                   }})
            .catch(e=>{
                this.setState({signed:false})
        })
    }
    render(){
        let{newUser,signed}=this.state;
        
        return(
        <div className="Signin_container">
                { signed ? 
            <CreatingProfile {...this.state}/>
            : 
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