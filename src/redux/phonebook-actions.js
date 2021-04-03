import { createAction } from '@reduxjs/toolkit';
import types from './phonebook-types';
import shortid from 'shortid';

const addContact = createAction(types.ADD_CONTACT, contactNew => ({
  payload: {
    id: shortid.generate(),
    name: contactNew.name,
    number: contactNew.number,
  },
}));

const deleteContact = createAction(types.DELETE_CONTACT);

const changeFilter = createAction(types.CHANGE_FILTER);

export default { addContact, deleteContact, changeFilter };
