import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Adewale John',
        email: 'adewale@john.com',
        phone: '222-222-22',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Kola Olowo',
        email: 'kola@olowo.com',
        phone: '222-222-22',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Lake David',
        email: 'lake@david.com',
        phone: '222-222-22',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Filter Contacta
  const filterContacts = text => {
      dispatch({ type: FILTER_CONTACTS, payload: text});
  };

   // Clear Filter Contact
   const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };


  //  Delete Contact

  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

   // Update Contact
   const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        updateContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
