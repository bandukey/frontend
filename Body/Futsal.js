import React,{ Component } from "react";
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
class Futsal extends Component{
    state={
        items:[],
        config:{
            headers:{'authorization':`Bearer ${localStorage.getItem('token')}`}
        }
    }
    componentDidMount(){
        axios.get('http://localhost:90/futsal/all',this.state.config)
        .then((response)=>{
            this.setState({
                items:response.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    deleteMyItem=(proId)=>{
        axios.delete('http://localhost:90/futsal/delete/'+proId, this.state.config)
        .then((response)=>{
            console.log(response)
            window.location.href='/futsal'
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

addToCart =(pid)=>{

axios.post('http://localhost:90/booking/'+pid,this.state,this.state.config).then((response)=>{

alert("Booking Done")
})


}
    render(){
        return(
            <div className="container">
<div className="row">
                {
                    this.state.items.map((futsal)=>{
                        return(
                           

                            <div class="col-lg-4">
                                <div class="card h-80">
                                <img class="card-img-top" src={"http://localhost:90/"+futsal.image} alt="" style={{height:"300px",width:"200px",marginLeft:"auto",marginRight:"auto"}}/>
                                <div class="card-body">
                                    <p>Name: {futsal.futsalname}</p>
                                    <p>Address: {futsal.adrress}</p>
                                    <p>Price: {futsal.price}</p>
                                    <p><button onClick={this.addToCart.bind(this,futsal._id)}>Add To Cart</button></p>
                                    
                                    <p><button onClick={this.deleteMyItem.bind(this,futsal._id)}>Delete</button></p>
                                    <p><button><Link to={'/updateItem/'+futsal._id}>Update</Link></button></p>
                                   
                                </div>
                                </div>
                            </div>
                            
                        )
                    })
                }
                
            </div>
            </div>
        )
    }
}

export default Futsal;