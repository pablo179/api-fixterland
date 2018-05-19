import React from 'react';
import {GridList,GridTile,LinearProgress,Card,CardMedia} from 'material-ui';
export const StatesComponent=(profile)=>(
    <div className="state_container">
    {console.log(profile)}
       <GridList cellHeight={'auto'} cols={2}>
         <GridTile cols={1}>
         <div className="playerimg_container">
            <img src={"http://localhost:8000"+profile.type_character.skin} alt="" className="playerimg"/>
        </div>
         </GridTile>
         <GridTile cols={1}>
         <span>name: {profile.name.username}</span> <br/>
         <span>lvl: {profile.lvl}</span> <br/>
         <span>exp: {profile.exp}</span> <br/>
         </GridTile>
         <GridTile cols={1.3}>
         <span>HP: <LinearProgress style={{height:'30px',background:'red'}} mode="determinate" value={(profile.hp_act*100)/profile.hp_tot} /></span> <br/>
         <span>MN: <LinearProgress style={{height:'30px',background:'red'}} mode="determinate" value={(profile.mn_act*100)/profile.mn_tot} /></span> <br/>
         </GridTile>
         <GridTile cols={.6}>
         <span>magic: {profile.magic}</span> <br/>
         <span>mele: {profile.mele}</span> <br/>
         </GridTile>
         <GridTile cols={2}>
         <span>Items:</span> <br/>
         </GridTile>
         {
            profile.item.map((p,key)=>(
         <GridTile cols={.5} key={key}>
         <Card style={{padding:2}}>
            <CardMedia>
                <img className='item_img' src={"http://localhost:8000"+p.skin} alt=""/>
            </CardMedia>
        </Card>
         </GridTile>
            ))
         }
        </GridList>
    </div>
)