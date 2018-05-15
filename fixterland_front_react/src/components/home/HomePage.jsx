import React,{Component} from 'react';
import {HomeComponent} from './HomeComponent';
class HomePage extends Component{
render(){
    return(
        <HomeComponent logged={false} />
    )
}
}
export default HomePage;