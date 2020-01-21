import React, { Component } from 'react';
import axios from 'axios';

const emailValidationRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneValidationRegex = /^\d{10}$/;

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

export default class CreateContact extends Component {
    constructor(props){
        super(props);

        // this.onChangeName = this.onChangeName.bind(this);
        // this.onChangeEmail = this.onChangeEmail.bind(this);
        // this.onChangePhones = this.onChangePhones.bind(this);
        // this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.onChange = this.onChange.bind(this);

        this.state = {
            surname: '',
            email: '',
            phones: [],
            address: '',
            formErrors: {
                surname: '',
                email: '',
                phones: [],
                address: ''
              }
        };
    }

    // onChangeName(e) {
    //     this.setState({
    //         surname: e.target.value
    //     })
    // }
    
    // onChangeEmail(e) {
    //     this.setState({
    //         email: e.target.value
    //     })
    // }
    
    // onChangePhones(e) {
    //     this.setState({
    //       phones: e.target.value
    //     })
    // }
    
    // onChangeAddress(e) {
    //     this.setState({
    //       address: e.target.value
    //     })
    // }

    onChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let formErrors = { ...this.state.formErrors };
    
        switch (name) {
          case "surname":
            formErrors.surname =
              value.length < 3 ? "minimum 3 characaters required" : "";
            break;
          case "email":
            formErrors.email = emailValidationRegex.test(value)
              ? ""
              : "invalid email address (e.g. mail@mail.com)";
            break;
          case "phones":
            formErrors.phones = phoneValidationRegex.test(value) 
            ? "" 
            : "10 digits required";
            break;
          default:
            break;
        }
    
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
    
    onSubmit(e) {
        e.preventDefault();
        if (formValid(this.state)) {
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
        } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
        }
    }

    render() {
        const { formErrors } = this.state;

        return (
            <div>
                <h3>Create New Contact</h3>
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="form-group"> 
                    <label>Name: </label>
                    <input  type="text"
                        required
                        className={formErrors.surname.length > 0 ? "error" : null}
                        className="form-control"
                        name="surname"
                        noValidate
                        value={this.state.surname}
                        onChange={this.onChange}
                        />
                        {formErrors.surname.length > 0 && (
                            <span className="errorMessage">{formErrors.surname}</span>
                        )}
                    </div>
                    <div className="form-group"> 
                    <label>Email: </label>
                    <input  type="text"
                        required
                        className={formErrors.email.length > 0 ? "error" : null}
                        className="form-control"
                        name="email"
                        noValidate
                        value={this.state.email}
                        onChange={this.onChange}
                        />
                        {formErrors.email.length > 0 && (
                            <span className="errorMessage">{formErrors.email}</span>
                        )}
                    </div>
                    <div className="form-group">
                    <label>Phone(s): </label>
                    <input 
                        type="text"
                        className="form-control"
                        name="phones"
                        noValidate
                        value={this.state.phones}
                        onChange={this.onChange}
                        />
                        {formErrors.phones.length > 0 && (
                            <span className="errorMessage">{formErrors.phones}</span>
                        )}
                    </div>
                    <div className="form-group">
                    <label>Address: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="address"
                        noValidate
                        value={this.state.address}
                        onChange={this.onChange}
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