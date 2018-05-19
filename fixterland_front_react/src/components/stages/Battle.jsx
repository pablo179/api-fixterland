import React from 'react';
import {GridList, GridTile,Popover,RaisedButton,Menu,MenuItem} from 'material-ui';
import {PopoverAnimationVertical} from 'material-ui/Popover';
export const Battle =({open,handleClick,handleRequestClose,anchorEl,profile})=>(
    <div className="battle_container">
        <div className="overlay">
            <div className="player1_battle">
                <img className="player1_img" src={"http://localhost:8000"+profile.type_character.skin} alt=""/>
            </div>
            <div className="player2_battle">
                <img className="player2_img" src="" alt=""/>
            </div>
            <div className="actions">
                <GridList
                cellHeight={'auto'}
                cols={2} >
                    <GridTile cols={1}>
                    <RaisedButton
                        onClick={handleClick}
                        label="Attack"
                        />
                        <Popover
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{horizontal: 'middle', vertical: 'center'}}
                        targetOrigin={{horizontal: 'middle', vertical: 'center'}}
                        onRequestClose={handleRequestClose}
                        animation={PopoverAnimationVertical}
                        >
                        <Menu>
                            <MenuItem primaryText="Basic" />
                            <MenuItem primaryText="sdas" />
                            <MenuItem primaryText="Settings" />
                            <MenuItem primaryText="Sign out" />
                        </Menu>
                        </Popover>
                    </GridTile>
                </GridList>
            </div>
        </div>
    </div>
)