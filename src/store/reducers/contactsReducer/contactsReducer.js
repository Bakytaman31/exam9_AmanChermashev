import {
    CLOSE_MODAL,
    CONTACTS_REQUEST,
    CONTACTS_SUCCESS,
    INIT_CONTACT,
    ON_CHANGE,
    SHOW_MODAL
} from "../../actions/actionTypes";

const initialState = {
    loading: false,
    contacts: {},
    modal: false,
    name: '',
    phone: '',
    email: '',
    photo: ''
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
      case CONTACTS_REQUEST:
          return {
              ...state,
              loading: true
          };
      case CONTACTS_SUCCESS:
          return {
              ...state,
              loading: false,
              contacts: action.data
          };
      case ON_CHANGE:
          return {
              ...state,
              [action.name]: action.value
          };
      case INIT_CONTACT:
          return {
              ...state,
              name: action.data.name,
              phone: action.data.phone,
              email: action.data.email,
              photo: action.data.photo
          };
      case SHOW_MODAL:
          return {
              ...state,
              modal: true
          };
      case CLOSE_MODAL:
          return {
              ...state,
              modal: false
          };
      default:
          return state;
  }
};