import React from 'react';
import './ContactsCard.css';

const ContactsCard = props => {
    return (
        <div className="ContactsCard" onClick={() => props.onClick()}>
            <img src={props.photo} alt="#"/>
            <h3>{props.name}</h3>
        </div>
    );
};

export default ContactsCard;