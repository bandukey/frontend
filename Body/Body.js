import { Component } from "react";
import {Container,Row,Col} from 'react-bootstrap'
import Home from './Home';
import Register from './Register';
import Login from './Login';
import {Route} from 'react-router-dom';
import Futsal from './Futsal'
import AddItem from './AddItem'
import UpdateItem from './UpdateItem'
import Cart from "./Cart";
class Body extends Component{
    render(){
        return(
         
                <div>
                    
                        <Route path='/' exact component={Home} />
                        <Route path='/register' component={Register} />  
                        <Route path='/login' component={Login} /> 
                        <Route path='/futsal' component={Futsal} /> 
                        <Route path='/AddItem' component={AddItem} /> 
                        <Route path='/UpdateItem/:id' component={UpdateItem} /> 
                        <Route path='/Cart' component={Cart} /> 
                    
                </div>
         
        )
    }
}
export default Body;