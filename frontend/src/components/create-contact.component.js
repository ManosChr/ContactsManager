import React, { Component } from 'react';
import axios from 'axios';

export default class CreateContact extends Component {
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhones = this.onChangePhones.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            surname: '',
            email: '',
            phones: [],
            address: ''
        };
    }

    onChangeName(e) {
        this.setState({
            surname: e.target.value
        })
    }
    
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    
    onChangePhones(e) {
        this.setState({
          phones: e.target.value
        })
    }
    
    onChangeAddress(e) {
        this.setState({
          address: e.target.value
        })
    }
    
    onSubmit(e) {
        e.preventDefault();
    
        const contact = {
          surname: this.state.surname,
          email: this.state.email,
          phones: this.state.phones,
          address: this.state.address
        }
    
        console.log(contact);
    
        axios.post('http://localhost:5000/api/v1.0/contacts', contact)
          .then(res => console.log(res.data));
    
        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Create New Contact</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.surname}
                        onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                    <label>Phone(s): </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.phones}
                        onChange={this.onChangePhones}
                        />
                    </div>
                    <div className="form-group">
                    <label>Address: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.address}
                        onChange={this.onChangeAddress}
                        />
                    </div>

                    <div className="form-group">
                    <input type="submit" value="Create Contact" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}