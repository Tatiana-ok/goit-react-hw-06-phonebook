import './App.css';
import s from './App.module.css';
import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className={s.container}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default connect()(App);

// state = {
//   contacts: contacts,
//   filter: '',
// };

// componentDidMount() {
//   const contacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contacts);

//   if (parsedContacts) {
//     this.setState({ contacts: parsedContacts });
//   }
// }

// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem('contact', JSON.stringify(this.state.contacts));
//   }
// }

// addContact = contactNew => {
//   if (
//     this.state.contacts.find(contact =>
//       contact.name.toLowerCase().includes(contactNew.name.toLowerCase()),
//     )
//   ) {
//     alert(`${contactNew.name} is already in contacts`);
//   } else {
//     const newContact = {
//       id: shortid.generate(),
//       name: contactNew.name,
//       number: contactNew.number,
//     };
//     this.setState(prevState => ({
//       contacts: [newContact, ...prevState.contacts],
//     }));
//   }
// };

// onDeleteContact = contactId => {
//   this.setState(prevState => ({
//     contacts: prevState.contacts.filter(contact => contactId !== contact.id),
//     filter: '',
//   }));
// };

// onChangeFilter = e => {
//   this.setState({ filter: e.currentTarget.value });
// };

// getVisibleContacts = () => {
//   const { contacts, filter } = this.state;
//   const normolizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normolizedFilter),
//   );
// };
