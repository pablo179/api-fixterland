import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { CardText,GridList, GridTile ,TextField,Card, CardMedia} from 'material-ui';
class CreatingProfile extends Component{
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
            type_character_id:null,
        },
        characters:[],
        bosses:[]
    }
    componentWillMount(){
        this.getCharacters()
        this.probando()
    }

    handleText=(e)=>{
        let {title} =this.state;
        title=e.target.value;
        this.setState({title})
    }
    Created =(e)=>{
        //this.state.profile.type_character_id=parseInt(e.target.value);
        let profile = {}
        profile['type_character_id'] = e.target.value;
        profile['title']=this.state.title;
        console.log(this.state.profile);


        let url = 'http://localhost:8000/profiles/'+this.state.profile.id+"/";
        var request = new Request(url, {
            method: 'PATCH',
            body: JSON.stringify(profile),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetch(request)
            .then(r=>{r.json()
            console.log(r)})
            .catch(e=>{
                console.log(e)
        })
    }

    getBosses=()=>{
        let url = 'http://localhost:8000/Bosses/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({characters:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }

    getCharacters=()=>{
        let url = 'http://localhost:8000/characters/';
        var request = new Request(url, {
            method: 'GET',
            //body: data,
            headers: new Headers({
                //'Authorization':'Token '+userToken,
                'Content-Type': 'application/json'
            })
        });
        fetch(request)
            .then(r=>r.json())
            .then(data=>{
                console.log(data)
                this.setState({characters:data})
            })
            .catch(e=>{
                console.log(e)
        })
    }
    probando=()=>{
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
                console.log(data)
                this.setState({profile:data})
                console.log(this.state.profile)
            })
            .catch(e=>{
                console.log(e)
        })
      }
    render(){
        let {characters}=this.state
        return(
            <div className="creating_profile">
            <div className="select_title">
            <h4>Ingresa tu apodo o titulo</h4>
            <TextField
            style={{border:'2px solid grey'}}
            onChange={this.handleText}
                hintText="nickname"
                floatingLabelFixed={true}
                floatingLabelText="nickname"
                fullWidth={false}
                type={'text'}
                name={'title'}
            /><br />
        </div>
            <div className="select_character">
                <h3>Selecciona tu personaje:</h3>
                <GridList cols={1} cellHeight={"auto"}>
                {characters.map((p,key)=>(
                    <GridTile cols={1} key={key} style={{padding:'2%'}}>
                        <Card style={{padding:5}}>
                            <CardMedia>
                                <img src={p.skin}/>
                            </CardMedia>

                            <CardText>
                           {p.details}
                           </CardText>
                           <Link to="/screen">
                            <button 
                             value={p.id}  
                             onClick={this.Created}>
                             {p.name_character} 
                             </button>
                            </Link>
                        </Card>
                    </GridTile>
                ))}
                </GridList>
            </div>
            </div>
        )
    }
}
export default CreatingProfile