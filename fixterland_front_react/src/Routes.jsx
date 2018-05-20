import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ScreenPage from './components/screen/ScreenPage';
import SigninPage from './components/users/SigninPage';
import CreatingProfile from './components/users/CreatingProfile';
import { Profile } from './components/home/Profile';
class Routes extends React.Component{

    render(){
        let{logged,logIn}=this.props;
        return(
            <Switch>
                <Route exact path="/" render={props=>(<HomePage {...props} logged={logged} logIn={logIn}/>)}/>
                <Route exact path="/signin" component={SigninPage}/>
                <Route exact path="/screen" component={ScreenPage}/>
                <Route exact path="/creatingprofile" component={CreatingProfile}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        )
    }
}
export default Routes