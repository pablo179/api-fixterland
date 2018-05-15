import React, {Component} from 'react';
import {AppBar} from 'material-ui';
class Navbar extends Component{
    render(){
        return(
            <AppBar
            style={{height:'10%'}}
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
        )
    }
}
export default Navbar;