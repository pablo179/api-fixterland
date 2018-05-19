import React from 'react';
import {LinearProgress,GridList, GridTile,FlatButton} from 'material-ui';
import {PopoverAnimationVertical} from 'material-ui/Popover';
export const Battle =({figthing1,who,monsters,open1,handleClick1,open2,handleClick2,open,handleClick,handleRequestClose,handleRequestClose1,handleRequestClose2,anchorEl,profile})=>(
    <div className="battle_container">
        <div className="overlay">
            <div className="player1_battle">
                <img className="player1_img" src={"http://localhost:8000"+profile.type_character.skin} alt=""/>
            </div>
            <div className="player2_battle">
                <img className={monsters[who].name} src={monsters[who].skin} alt=""/>
            </div>
            <div className="actions">
                <GridList
                cellHeight={'auto'}
                cols={3} >
                    <GridTile cols={1}>
                            <button className="but_act" onClick={figthing1} value={Math.floor(Math.random() * profile.mele)+(profile.mele*.3)}>{"Basic"} </button>
                            <button className="but_act"  >{"hiper punch"}</button>
                    </GridTile>
                    <GridTile cols={1}>
                            <button className="but_act"  >{"Hadouken"} </button>
                            
                            <button className="but_act"  >{"Kame Hame Ha"} </button>
                    </GridTile>
                    <GridTile cols={1}>
                           
                    <button className="but_act"  >{"power"} </button>
                            <button className="but_act"  >{"Healing"} </button>
                    </GridTile>
                </GridList>
            </div>
        </div>
        <div className="state_enemy">

       <GridList cellHeight={'auto'} cols={2}>
         <GridTile cols={1}>
         <div className={monsters[who].name+"container"}>
            <img src={monsters[who].skin} alt="" className={monsters[who].name+'sta'}/>
        </div>
         </GridTile>
         <GridTile cols={1}>
         <span>name: {monsters[who].name}</span> <br/>
         </GridTile>
         <GridTile cols={1.3}>
         <br/>
         <span>HP: <LinearProgress style={{height:'30px',background:'red'}} mode="determinate" value={(monsters[who].hp_act*100)/monsters[who].hp_tot} /></span> <br/>
         </GridTile>
         
        </GridList>
        </div>
    </div>
)