import axiosApp from '../../axios-app';
import {CLOSE_MODAL, CONTACTS_REQUEST, CONTACTS_SUCCESS, INIT_CONTACT, ON_CHANGE, SHOW_MODAL} from "./actionTypes";

export const contactsRequest = () => ({type: CONTACTS_REQUEST});
export const contactsSuccess = data => ({type: CONTACTS_SUCCESS, data});
export const onChange = (name, value) => ({type: ON_CHANGE, name, value});
export const initContact = data => ({type: INIT_CONTACT, data});
export const showModal = () => ({type: SHOW_MODAL});
export const closeModal = () => ({type: CLOSE_MODAL});

export const getContacts = () => {
    return async (dispatch) => {
        dispatch(contactsRequest());
        const response = await axiosApp.get('/contacts.json');
        dispatch(contactsSuccess(response.data));
    };
};

export const postContact = contact => {
    return async (dispatch) => {
        await axiosApp.post('/contacts.json', contact);
        dispatch(getContacts());
    };
};

export const deleteContact = id => {
    return async (dispatch) => {
        await axiosApp.delete(`/contacts/${id}.json`);
        dispatch(closeModal());
        dispatch(getContacts());
    };
};

export const getContactById = id => {
    return async (dispatch) => {
        dispatch(closeModal());
       const response = await axiosApp.get(`/contacts/${id}.json`);
        dispatch(initContact(response.data))
    }
};

export const postEditedContact = (contact, id) => {
    return async (dispatch) => {
        await axiosApp.put(`/contacts/${id}.json`, contact);
        dispatch(getContacts());
    }
};