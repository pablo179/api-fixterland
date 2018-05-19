import React,{Component} from 'react';
import {World} from '../stages/World';
import {Battle} from '../stages/Battle';
import {StatesComponent} from './StatesComponent';
import KeyHandler, {KEYPRESS} from 'react-key-handler';
class ScreenPage extends Component{
    state={
        action:"",
        anchorEl:null,
        open:false,
        battle:false,
        position:{
            x:6,
            y:6,
        },
        monsters:{

        },
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
            type_character:{
                skin:""
            },
        },
        pos:[
            [1,1,1,1,1,1,1,1,1,1,1],
            [1,1,1,1,0,5,0,0,0,2,0],
            [1,1,0,0,0,0,0,0,0,1,1],
            [1,1,0,1,1,0,0,0,0,1,1],
            [1,1,0,1,1,0,0,3,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0],
            [1,0,0,1,1,0,0,0,0,0,1],
            [1,1,0,0,0,0,0,0,2,1,1],
            [1,1,1,0,0,0,0,0,0,1,1],
            [1,1,1,0,0,0,0,4,0,1,1],
            [1,1,1,1,1,1,1,1,1,1,1],
        ]
        
    }
    handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();
    
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
      };
    
      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };

      
    componentWillMount(){
        this.getMonsters();
        this.getProfile();
        this.setItems();
    }
    componentDidMount(){
        setTimeout(function() { console.log("as")}, 3000);
        console.log(this.state.monsters)
    }
    setCofre =(sd,b)=>{
        this.setState(pos=>(this.state.pos[sd][b]=<img alt="" className="cofre" src={"http://i38.servimg.com/u/f38/15/71/13/94/cofres10.png"}/>))      
    }
    setMonster1=(sd,b)=>{
        this.setState(pos=>(this.state.pos[sd][b]=<img alt="" className="monster1" src={"http://localhost:8000/media/skin_img/monster_cerberus_claws.gif"}/>))   
     }
    setBoss1=(sd,b)=>{
        this.setState(pos=>(this.state.pos[sd][b]=<img alt="" className="boss1" src={"http://localhost:8000/media/skin_img/SNES_DBZSB_ssgoku.png"}/>))   
     }
    setItems =()=>{
        var a=0,b=0;
        for(a=0;a<this.state.pos.length;a++)
            for(b=0;b<this.state.pos.length;b++){
                if(this.state.pos[a][b]===2){ 
                    this.setCofre(a,b);
                }
                if(this.state.pos[a][b]===3){
                    this.setMonster1(a,b);
                }
                if(this.state.pos[a][b]===5){
                    this.setBoss1(a,b);
                }
    }
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
        this.setState(pos=>(this.state.pos[this.state.position.x][this.state.position.y]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
            })
            .catch(e=>{
                console.log(e)
        })
    }
    getMonsters=()=>{
        let url = 'http://localhost:8000/monsters/';
        var request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                this.setState({monsters:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }
    moverigth=()=>{
        let{x,y}=this.state.position;
        if(this.state.pos[x][y-1]===0){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.y=y-1));
            this.setState(pos=>(this.state.pos[x][y-1]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
        }
    }

    moveleft=()=>{
        let{x,y}=this.state.position;
        if(this.state.pos[x][y+1]===0){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.y=y+1));
            this.setState(pos=>(this.state.pos[x][y+1]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
        }
    }

    moveup=()=>{
        let{x,y}=this.state.position;
        if(this.state.pos[x-1][y]===0){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.x=x-1));
            this.setState(pos=>(this.state.pos[x-1][y]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
        }
    }

    movedown=()=>{
        let{x,y}=this.state.position;
        if(this.state.pos[x+1][y]===0){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.x=x+1));
            this.setState(pos=>(this.state.pos[x+1][y]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
        }
    }
    render(){
        let {pos,open,anchorEl,action}=this.state
        let profile=this.state.profile
        return(
            <div className='Screen_Container' >
            <StatesComponent {...profile} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="a" onKeyHandle={this.moverigth} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="d" onKeyHandle={this.moveleft} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="w" onKeyHandle={this.moveup} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="s" onKeyHandle={this.movedown} />
            <World   pos={pos} />

                {this.state.battle ? <Battle action={action} profile={profile} open={open} handleRequestClose={this.handleRequestClose} handleClick={this.handleClick} anchorEl={anchorEl}/> : false}
            </div>
        )
    }
}
export default ScreenPage;