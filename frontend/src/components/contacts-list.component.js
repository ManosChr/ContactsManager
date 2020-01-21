import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Contact = props => (
    <tr>
      <td>{props.contact.surname}</td>
      <td>{props.contact.email}</td>
      <td>
        {props.contact.phones.map(phone => <li>{phone}</li>)}
      </td>
      <td>{props.contact.address}</td>
      <td>
        <Link to={"/edit/"+props.contact._id}>edit</Link> | <a href="#" onClick={() => { props.deleteContact(props.contact._id) }}>delete</a>
      </td>
    </tr>
)

export default class ContactsList extends Component {
    constructor(props) {
        super(props);
    
        this.deleteContact = this.deleteContact.bind(this);
    
        this.state = {contacts: []};
    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/api/v1.0/contacts')
          .then(response => {
            this.setState({ contacts: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
    }

    deleteContact(id) {
      if(window.confirm("Are you sure you want to delete this contact?")) {
        axios.delete('http://localhost:5000/api/v1.0/contacts/'+id)
        .then(response => { 
          console.log(response.data);
          this.setState({
            contacts: this.state.contacts.filter(el => el._id !== id)
          })
        });  
      }  
    }

    contactList() {
        return this.state.contacts.map(currentcontact => {
          return <Contact contact={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id}/>;
        })
      }

    render() {
        return (
            <div>
                <h3>Saved Contacts</h3>
                <table className="table">
                <thead className="thead-light">
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone(s)</th>
                    <th>Address</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { this.contactList() }
                </tbody>
                </table>
            </div>
        );
    }
}