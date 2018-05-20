import React from 'react';
import {LinearProgress,GridList, GridTile,FlatButton} from 'material-ui';
import {PopoverAnimationVertical} from 'material-ui/Popover';
export const Battle =({playerdamage,enemydamage,enemyaction,action,figthing1,who,monsters,open1,handleClick1,open2,handleClick2,open,handleClick,handleRequestClose,handleRequestClose1,handleRequestClose2,anchorEl,profile})=>(
    <div className="battle_container">
        <div className="overlay">
            <div className="player1_battle">
            <div className='damage'>
            {playerdamage}
            </div>
                <img className={"player1_img "+action} src={"http://localhost:8000"+profile.type_character.skin} alt=""/>
            </div>
            <div className={action}>
                <div className={'plan'+action}>
                
                </div>
            </div>
            <div className="player2_battle">
            <div className='damage'>
            {enemydamage}
            </div>
                <img className={monsters[who].name+enemyaction} src={monsters[who].skin} alt=""/>
            </div>
            <div className="actions">
                <GridList
                cellHeight={'auto'}
                cols={3} >
                    <GridTile cols={1}>
                            <button className="but_act" onClick={figthing1} name={'basic'} value={Math.floor(Math.random() * profile.mele)+(profile.mele*.6)}>{"Basic"} </button>
                    </GridTile>
                    <GridTile cols={1}>
                            <button className="but_act" onClick={figthing1} name={'kame'} value={Math.floor(Math.random() * profile.magic)+(profile.magic*.5)}>{"Magic"} </button>
                    </GridTile>
                    <GridTile cols={1}>
                            <button className="but_act" onClick={figthing1} name={'power'} value={0}>{"power"} </button>
                    </GridTile>
                    <GridTile cols={1}>
                            <button className="but_act" onClick={figthing1} name={'heal'} value={0}>{"healing"}</button>
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