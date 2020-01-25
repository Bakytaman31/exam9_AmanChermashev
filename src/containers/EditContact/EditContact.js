import React, {Component} from 'react';
import {connect} from "react-redux";
import {getContactById, onChange, postEditedContact} from "../../store/actions/contactsActions";

class EditContact extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getContact(id);
    };

    onChange = event => {
        this.props.onChange(event.target.name, event.target.value);
    };

    onSubmit = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        this.props.postEditedContact({
            name: this.props.name,
            phone: this.props.phone,
            email: this.props.email,
            photo: this.props.photo
        }, id);
        this.props.history.push('/');
    };

    render() {
        const photo = <img src={this.props.photo} alt="#" style={{width: '150px', height: '200px'}}/>;
        return (
            <div>
                <h1>Edit Contact</h1>
                <form onSubmit={this.onSubmit}>
                    <p><input type="text"
                              name="name"
                              value={this.props.name}
                              onChange={this.onChange}
                              placeholder="Name"
                    /></p>
                    <p><input type="text"
                              name="phone"
                              value={this.props.phone}
                              onChange={this.onChange}
                              placeholder="Phone"
                    /></p>
                    <p><input type="text"
                              name="email"
                              value={this.props.email}
                              onChange={this.onChange}
                              placeholder="Email"
                    /></p>
                    <p><input type="text"
                              name="photo"
                              value={this.props.photo}
                              onChange={this.onChange}
                              placeholder="Photo"
                    /></p>
                    {this.props.photo !== '' ? photo : ''}
                    <p><button type="submit" className="btn btn-warning">Edit</button></p>
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
    getContact: id => dispatch(getContactById(id)),
    onChange: (name, value) => dispatch(onChange(name, value)),
    postEditedContact: (contact, id) => dispatch(postEditedContact(contact, id))
});

export default connect(mapStateToProps, mapDispatchToProps) (EditContact);