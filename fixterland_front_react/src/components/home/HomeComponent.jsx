import React from 'react';
import Login from './Login';
export const HomeComponent=(logged)=>(
    <div className="Home_container">
    <audio src={require('../media/themefix.mp3')} autoPlay loop></audio>
        <div className="Home_title">
            <img className="logo" src={require('../media/space.png')} alt=""/>
            <div className="Home_title_front">
                Fixterland
            </div>
        <div className="Home_subtitle">
            "Beyond legends"
        </div>
        </div>
        <div className="Home_about">
            About us 
        </div>
        <div className="Home_player">
            <img src={require('../media/titleplay.png')} alt=""/>
        </div>
            <Login logged={logged}/>
    </div>
)