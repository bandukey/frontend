import React, { Component } from "react";
import axios from 'axios';
import { Link, Route } from 'react-router-dom';


class Item extends Component {
    state = {
        futsalname: '',
        address: '',
        phoneno: '',
        price: '',
        image:null,
        config: {
            headers: { "authorization": `Bearer ${localStorage.getItem('token')}` }
        }

    }

    changeHandler = (e) => {

        this.setState({

            [e.target.name]: e.target.value
        })

    }

    fileHandler = (e) => {

        this.setState({
            image: e.target.files[0]
        })
    }


    insertFile = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('futsalname', this.state.futsalname)
        data.append('address', this.state.address)
        data.append('image', this.state.image)
        data.append('phoneno', this.state.phoneno)
        data.append('price', this.state.price)

        axios.post('http://localhost:3001/add/item', data, this.state.config)
            .then((response) => {
                alert("Futsal Item Added!!")
            })


    }

    render() {
        return (
            <div class="row ">
                <div class="col-lg-7 mx-auto">

                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <div class="labelSignup">
                                    <h2>Add Futsal</h2>
                                </div>
                                <form id="contact-form" role="form">

                                    <div class="controls">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_image">Image</label> <input onChange={this.fileHandler} type="file" name="image" class="form-control btn btn-danger" placeholder="Add image" required="required" /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_name">Futsal Name *</label> <input onChange={this.changeHandler} name="futsalname" class="form-control" placeholder="Please enter your product name *" required="required" data-error="Name is required." /> </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_price">Futsal Price *</label> <input onChange={this.changeHandler} name="price" class="form-control" placeholder="Please enter the price of product" /> </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_address">Futsal Address *</label> <input onChange={this.changeHandler} name="address" class="form-control" placeholder="Please enter the product address *" required="required" data-error="Description is required." /> </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group"> <label for="form_phone">Futsal Phone *</label> <input onChange={this.changeHandler} name="phoneno" class="form-control" placeholder="Please enter the phone number *" required="required" data-error="Description is required." /> </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-md-12"> <input type="submit" class="btn btn-success btn-send pt-2 btn-block " onClick={this.insertFile} value="Add Product" /> </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Item;