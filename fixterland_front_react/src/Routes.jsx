import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ScreenPage from './components/screen/ScreenPage';
class Routes extends React.Component{

    render(){
        return(
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/screen" component={ScreenPage}/>
            </Switch>
        )
    }
}
export default Routes