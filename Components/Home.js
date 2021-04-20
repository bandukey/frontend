import axios from 'axios';
import { Component } from 'react';

class Home extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/item/all', this.state.config)
            .then((response) => {
                console.log(response)
                this.setState({
                    data: response.data                   
                })
                
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
            <div class="container">
                <header class="jumbotron my-4">
                    <h1 class="display-3">Welcome to Real Futsal</h1>
                    <p class="lead"> We offer you the best futsal ground all over in nepal with a chill place.</p>
                 
                </header>

                <div class="row">
                    {
                       this.state.data.map((item) => {
                            return (
                                <div class="col-lg-3">
                                    <div class="card h-100">
                                        <img class="card-img-top" src={"http://localhost:3001/" + item.image} alt="" />
                                        <div class="card-body">
                                            <h4 class="card-title">{item.futsalname}</h4>
                                            <h4 class="card-title">{item.address}</h4>
                                            <h4 class="card-title">{item.price}</h4>
                                            <h4 class="card-title">{item.phoneno}</h4>
                                        </div>
                                        <div class="card-footer">
                                            <a href="#" class="btn btn-primary">Add To Cart</a>
                                            
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

export default Home;