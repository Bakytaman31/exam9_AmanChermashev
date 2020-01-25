import React, {Component} from 'react';
import {onChange, postContact} from "../../store/actions/contactsActions";
import {connect} from "react-redux";

class AddContact extends Component {

    onChange = event => {
        this.props.onChange(event.target.name, event.target.value);
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.postContact({
            name: this.props.name,
            phone: this.props.phone,
            email: this.props.email,
            photo: this.props.photo
        });
        this.props.history.push('/');
    };

    render() {
        const photo = <img src={this.props.photo} alt="#" style={{width: '150px', height: '200px'}}/>;
        return (
            <div>
                <h1>Add New Contact</h1>
                <form onSubmit={this.onSubmit}>
                    <p><input type="text"
                           required
                              autoComplete="off"
                           name="name"
                           placeholder="Name"
                           onChange={this.onChange}
                           value={this.props.name}/></p>
                    <p><input type="text"
                           required
                              autoComplete="off"
                           name="phone"
                           placeholder="Phone"
                           onChange={this.onChange}
                           value={this.props.phone}/></p>
                    <p><input type="mail"
                           required
                              autoComplete="off"
                           name="email"
                           placeholder="Email"
                           onChange={this.onChange}
                           value={this.props.email}/></p>
                    <p><input type="text"
                           required
                              autoComplete="off"
                           name="photo"
                           onChange={this.onChange}
                           placeholder="Photo URL"
                           value={this.props.photo}/></p>
                    {this.props.photo !== '' ? photo : ''}
                    <p><button type="submit" className="btn btn-success">Add Contact</button></p>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    phone: state.phone,
    email: state.email,
    photo: state.photo
});

const mapDispatchToProps = dispatch => ({
    postContact: contact => dispatch(postContact(contact)),
    onChange: (name, value) => dispatch(onChange(name, value))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddContact);