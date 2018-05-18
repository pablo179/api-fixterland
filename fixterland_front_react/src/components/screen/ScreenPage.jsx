import React,{Component} from 'react';
import {World} from '../stages/World';
class ScreenPage extends Component{
    state={
        position:{
            x:6,
            y:6,
        },
        profile:{},
        muñequito:"<img className='escen' src={require('../media/titleplay.png')} alt=''/>"
    }
    componentWillMount(){
        this.getProfile();
    }
    getProfile =()=>{
        const userToken = JSON.parse(localStorage.getItem('userToken'));
        let url ='http://localhost:8000/my_user/';
        var request = new Request(url,{
          method: 'GET',
        //  body: JSON.stringify(newUser),
          headers: new Headers({
            'Authorization':'Token '+userToken,
            'Content-Type': 'application/json'
          })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                this.setState({profile:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }
    render(){
        let {position,profile}=this.state
        return(
            <div className='Screen_Container'>
                <World position={position} profile={profile} muñequito={this.state.muñequito}/>
            </div>
        )
    }
}
export default ScreenPage;