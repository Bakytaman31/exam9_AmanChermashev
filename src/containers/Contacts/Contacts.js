import React, {Component, Fragment} from 'react';
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import {closeModal, deleteContact, getContacts, showModal} from "../../store/actions/contactsActions";
import {connect} from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import {NavLink} from "react-router-dom";
import axiosApp from "../../axios-app";

class Contacts extends Component {
    state = {
        data: {},
        id: ''
    };

    onClick = async (id) => {
        const response = await axiosApp.get(`/contacts/${id}.json`);
        this.setState({data: response.data, id: id});
        this.props.showModal();
    };

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const modal = <Modal
            show={this.props.modal}
            close={this.props.closeModal}
        >
            <h1>{this.state.data.name}</h1>
            <p>{this.state.data.phone}</p>
            <p>{this.state.data.email}</p>
            <p><img src={this.state.data.photo} alt="#" style={{width: '150px', height: '200px'}}/></p>
            <p><NavLink to={`/editContact/${this.state.id}`}>
                <button className="btn btn-warning">Edit</button>
            </NavLink>
            <button className="btn btn-danger" onClick={() => this.props.deleteContact(this.state.id)}>Delete</button>
            </p>
        </Modal>;
        const loading = <Spinner/>;
        const contacts = <div>{
            Object.keys(this.props.contacts).map(contact => (
                <Fragment key={contact}>
                <ContactsCard
                    onClick={() => this.onClick(contact)}
                    name={this.props.contacts[contact].name}
                    photo={this.props.contacts[contact].photo}/>
                </Fragment>
            ))}</div>;
        return (
            <div>
                <h1>Contacts</h1>
                {this.props.loading ? loading : contacts}
                {this.props.modal ? modal : ''}
            </div>
        );
    }
}

const mapStateToProps = state => ({
   contacts: state.contacts,
    loading: state.loading,
    modal: state.modal,
});

const madDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    closeModal: () => dispatch(closeModal()),
    showModal: id => dispatch(showModal(id)),
    deleteContact: id => dispatch(deleteContact(id))
});


export default connect(mapStateToProps, madDispatchToProps) (Contacts);