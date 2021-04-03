import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook-actions';

function ContactList({ contacts = [], onDeleteContact }) {
  return (
    <>
      <ul className={s.listOfContact}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.itemOfListContact}>
            <p className={s.itemNameContact}>{contact.name} </p>
            <p className={s.itemNumberContact}>{contact.number}</p>
            <button
              className={s.btnOfListContact}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};

const getVisibleContacts = (allContacts, filter) => {
  const normolizedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId =>
    dispatch(phonebookActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
