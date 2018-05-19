import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import {Link} from 'react-router-dom'
export const Login=({email, password, logIn, handleText, user})=>(
    <div className="Home_options">
        <form action="" onSubmit={logIn}>
            <TextField
            onChange={handleText}
            name={'username'}
            hintText="Username"
            floatingLabelFixed={true}
            floatingLabelText="Username"
            fullWidth={true}
            />
            <br/>
            <TextField
            onChange={handleText}
            name={'password'}
            fullWidth={true}
            hintText="**********"
            type={'password'}
            floatingLabelFixed={true}
            floatingLabelText="Password"
            />
            <br/>
        <RaisedButton 
            label="Log In" 
            fullWidth={true} 
            secondary={true} 
            type={'submit'}/>
        <br/>
            </form>
        <div className="twobuttons">
        <label > No tienes una cuenta?</label>
        <Link to='/signin'>
        <RaisedButton label="Sign In" primary={true} />
        </Link>
        </div>
        </div>
)