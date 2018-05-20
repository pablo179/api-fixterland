import React from 'react';
import {AppBar,GridList,GridTile} from 'material-ui';
export class Profile extends React.Component{
    state ={
        profile:{
            boss:[],
            email:'',
            exp:null,
            hp_act:null,
            hp_tot:20,
            id:null,
            item:[],
            lvl:null,
            magic:null,
            mele:null,
            mn_act:10,
            mn_tot:10,
            name:{},
            title:'',
            type_character:{},
            type_character_id:null,
        }
    }
    componentWillMount(){
        this.getProfile();
    }
    getProfile=()=>{
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
        return(
            <div className="profile_container">

  <AppBar
    title={this.state.profile.name.username}
  />

       <GridList cellHeight={'auto'} cols={4}>
            <GridTile cols={2}>
                <div className="img_container">
                    <img src={"http://localhost:8000"+this.state.profile.type_character.skin} alt=""/>
                </div>
            </GridTile>
            <GridTile cols={3}>
                <div className="detail_container">
                    {this.state.profile.type_character.details}
                </div>
            </GridTile>
       </GridList>
            </div>
        )
    }
}