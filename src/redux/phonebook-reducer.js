import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import actions from './phonebook-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { type, payload }) => {
    if (
      state.find(contact =>
        contact.name.toLowerCase().includes(payload.name.toLowerCase()),
      )
    ) {
      alert(`${payload.name} is already in contacts`);
    } else {
      return [payload, ...state];
    }
  },

  [actions.deleteContact]: (state, { type, payload }) => {
    return state.filter(contact => payload !== contact.id);
  },
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { type, payload }) => payload,
  [actions.deleteContact]: (state, { type, payload }) => '',
});

export default combineReducers({
  items: items,
  filter: filter,
});
