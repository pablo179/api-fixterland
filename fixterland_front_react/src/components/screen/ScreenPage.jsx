import React,{Component} from 'react';
import {World} from '../stages/World';
import {Battle} from '../stages/Battle';
import {StatesComponent} from './StatesComponent';
import KeyHandler, {KEYPRESS} from 'react-key-handler';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
class ScreenPage extends Component{
    state={
        enemydamage:"",
        playerdamage:"",
        who:0,
        action:"",
        anchorEl:null,
        open:false,
        open1:false,
        open2:false,
        pos_battle_monster:false,
        battle:false,
        position:{
            x:6,
            y:6,
        },
        item:{},
        monsters:[{
        hp_act:15,
        hp_tot:15,
        id:2,
        name: "Erebus",
        skin: "",
        }],
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
            [1,1,0,0,0,0,0,0,3,1,1],
            [1,1,0,1,1,0,0,0,0,1,1],
            [1,1,0,1,1,0,0,3,0,1,1],
            [1,1,0,1,1,0,0,0,0,0,0],
            [1,3,0,1,1,0,3,0,0,0,1],
            [1,1,0,0,0,0,3,0,2,1,1],
            [1,1,1,0,0,3,0,0,3,1,1],
            [1,1,1,3,0,0,0,4,0,1,1],
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
      handleClick1 = (event) => {
          // This prevents ghost click.
          event.preventDefault();
      
          this.setState({
            open1: true,
            anchorEl: event.currentTarget,
          });
        };
    
        handleClick2 = (event) => {
            // This prevents ghost click.
            event.preventDefault();
        
            this.setState({
              open2: true,
              anchorEl: event.currentTarget,
            });
          };
          
    
      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
      handleRequestClose1 = () => {
        this.setState({
          open1: false,
        });
      };
      handleRequestClose2 = () => {
        this.setState({
          open2: false,
        });
      };

      
    componentWillMount(){
        this.getMonsters();
        this.getProfile();
        this.setItems();
    }
    setCofre =(sd,b)=>{
        var a=Math.floor(Math.random() * 10) + 1;
        if(a<4) 
        this.setState(pos=>(this.state.pos[sd][b]=<img alt="" className="cofre" src={"http://i38.servimg.com/u/f38/15/71/13/94/cofres10.png"}/>))      
    }
    setMonster1=(sd,b)=>{
        var a=Math.floor(Math.random() * 10) + 1;
        if(a<4) 
        this.setState(pos=>(this.state.pos[sd][b]=<img key={3} alt="" className="monster1" src={"http://localhost:8000/media/skin_img/monster_cerberus_claws.gif"}/>))   
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
getItems=()=>{
    let url = 'http://localhost:8000/items/';
    var request = new Request(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    });
    fetch(request)
        .then(r=>r.json())
        .then(data=>{
            this.setState({item:data})
        })
        .catch(e=>{
            console.log(e)
    })
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
                console.log(this.state.monsters);
            })
            .catch(e=>{
                console.log(e)
        })
    }
    moverigth=()=>{
        let{x,y}=this.state.position;
        if(this.state.pos[x][y-1]===0 || this.state.pos[x][y-1]===2 || this.state.pos[x][y-1]===3 || this.state.pos[x][y-1]===4 ){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.y=y-1));
            this.setState(pos=>(this.state.pos[x][y-1]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
            this.checkbattle(x,y-1);
        }
    }

    moveleft=()=>{
        let{x,y}=this.state.position;
        if(this.state.pos[x][y+1]===0 || this.state.pos[x][y+1]===2 || this.state.pos[x][y+1]===3 || this.state.pos[x][y+1]===4){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.y=y+1));
            this.setState(pos=>(this.state.pos[x][y+1]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
            this.checkbattle(x,y+1);
        }
    }

    moveup=()=>{
        let{x,y}=this.state.position;
        if(this.state.pos[x-1][y]===0 || this.state.pos[x-1][y]===2 || this.state.pos[x-1][y]===3 || this.state.pos[x-1][y]===4){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.x=x-1));
            this.setState(pos=>(this.state.pos[x-1][y]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
            this.checkbattle(x-1,y);
        }
    }

    movedown=()=>{
        console.log('asd');
        let{x,y}=this.state.position;
        if(this.state.pos[x+1][y]===0 || this.state.pos[x+1][y]===2 || this.state.pos[x+1][y]===3 || this.state.pos[x+1][y]===4){
            this.setState(pos=>(this.state.pos[x][y]=0));
            this.setState(position=>(this.state.position.x=x+1));
            this.setState(pos=>(this.state.pos[x+1][y]=<img alt="" className="player" src={"http://localhost:8000"+this.state.profile.type_character.skin}/>))
            this.checkbattle(x+1,y);
        }
    }

    checkbattle=(x,y)=>{
        if(this.state.pos[x+1][y].key==3 || this.state.pos[x-1][y].key==3 || this.state.pos[x][y+1].key==3 || this.state.pos[x][y-1].key==3 ){
            this.setState({pos_battle_monster:true})
        }
        else{
            this.setState({pos_battle_monster:false})
        }
    }   
    setbattle_monster=()=>{
        this.setState({who:1});
        this.setState(monsters=>(this.state.monsters[this.state.who].hp_act=this.state.monsters[this.state.who].hp_tot))
            this.setState({battle:true});
    }
    
    figthing1=(e)=>{
        let nuevaVida=this.state.monsters[this.state.who].hp_act-e.target.value
        this.setState(monsters=>this.state.monsters[this.state.who].hp_act=nuevaVida);
        if(this.state.monsters[this.state.who].hp_act<=0){
            this.setState(pos=>(this.state.pos[this.state.position.x+1][this.state.position.y]=0))
            this.setState(pos=>(this.state.pos[this.state.position.x-1][this.state.position.y]=0))
            this.setState(pos=>(this.state.pos[this.state.position.x][this.state.position.y+1]=0))
            this.setState(pos=>(this.state.pos[this.state.position.x][this.state.position.y-1]=0))
            this.setState({battle:false})
            this.setState(profile=>this.state.profile.exp=this.state.profile.exp+50);
            if(this.state.profile.exp>=100){
                this.setState(profile=>this.state.profile.lvl=this.state.profile.lvl+1);
                this.setState(profile=>this.state.profile.exp=0);
            }
        }else{
            this.setState(profile=>this.state.profile.hp_act-=Math.floor(Math.random() * 10));
        }
    }



    render(){
        let {pos,open,anchorEl,action,open1,open2,monsters,who}=this.state
        let profile=this.state.profile
        return(
            <div className='Screen_Container' >
                <div className="back_home">
                <Link to="/">
    <IconButton>
      <ActionHome />
    </IconButton>
 </Link>
                </div>
            <StatesComponent {...profile} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="a" onKeyHandle={this.moverigth} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="d" onKeyHandle={this.moveleft} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="w" onKeyHandle={this.moveup} />
        <KeyHandler keyEventName={KEYPRESS} keyValue="s" onKeyHandle={this.movedown} />
        ({this.state.pos_battle_monster ? <KeyHandler value={1} keyEventName={KEYPRESS} keyValue="i" onKeyHandle={this.setbattle_monster} /> : true})
        <World   pos={pos} />
                {this.state.battle ? 
                <Battle 
                figthing1={this.figthing1}
                who={who}
                monsters={monsters}
                action={action} profile={profile} open={open} 
                handleRequestClose={this.handleRequestClose} 
                handleRequestClose1={this.handleRequestClose1} 
                handleRequestClose2={this.handleRequestClose2} 
                handleClick={this.handleClick} anchorEl={anchorEl}
                open1={open1} 
                handleClick1={this.handleClick1}
                open2={open2} 
                handleClick2={this.handleClick2}
                /> : false}

        </div>
        )
    }
}
export default ScreenPage;