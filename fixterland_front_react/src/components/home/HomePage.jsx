import React,{Component} from 'react';
import {Login} from '../users/Login';
import {Logged} from '../users/Logged';
class HomePage extends Component{
    state={
        user:{}
    }

    handleText=(e)=>{
        let {user} = this.state;
        let field = e.target.name;
        user[field] = e.target.value;
        this.setState({user})
    }
    logInUser=(e)=>{
        e.preventDefault()
        this.props.logIn(this.state.user)
    }
    logOut=()=>{
        localStorage.removeItem('userToken');
    }


render(){
    let {user} = this.state;
    let {logged} = this.props;
    return(
        <div className="Home_container">
        <div className="Home_title">
                <img className="logo" src={require('../media/space.png')} alt=""/>
                <div className="Home_title_front">
                    Fixterland
                </div>
            <div className="Home_subtitle">
                "Beyond legends"
            </div>
            </div>
            <div className="Home_player">
                <img src={require('../media/titleplay.png')} alt=""/>
            </div>
             {
                logged ?  <Logged logOut={this.logOut}/> 
                :
                <Login 
                {...user}
                user={user}
                handleText={this.handleText}
                logIn={this.logInUser}/>
             }  
        </div>
    )
}
}
export default HomePage;