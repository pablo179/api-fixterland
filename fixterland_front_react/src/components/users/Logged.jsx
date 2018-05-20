import React from 'react';
import {Link} from 'react-router-dom'
import {RaisedButton} from 'material-ui'
export const Logged=(logOut)=>(

    <div className="Home_options">
    <Link to="/screen">Nuevo Juego</Link>
    <Link to="/profile">Perfil</Link>
    <Link to="/screen">Comunidad</Link>
    <form action="" onSubmit={logOut.logOut}>
        <RaisedButton 
            label="Log Out" 
            secondary={true} 
            type={'submit'}
            />
    </form>
</div>
)