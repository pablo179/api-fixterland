import React,{Component} from 'react';
import Navbar from '../Navbar/Navbar';
import World from '../stages/World';
class ScreenPage extends Component{
    render(){
        return(
            <div className='Screen_Container'>
                <Navbar/>
                <World/>
            </div>
        )
    }
}
export default ScreenPage;