import { Component } from 'react';
import s from './ContactForm.module.css';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook-actions';

class ContactForm extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  onNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  onNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.number !== '') {
      this.props.onSubmit(this.state);
      this.setState({ name: '', number: '' });
      return;
    }
    alert('Заполните данные контакта!');
  };

  render() {
    return (
      <form className={s.containerForm} onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            className={s.formInput}
            type="text"
            onChange={this.onNameChange}
          />
        </label>
        <label>
          <p>Number</p>
          <input
            className={s.formInput}
            type="text"
            onChange={this.onNumberChange}
          />
        </label>
        <button className={s.btnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ id, name, number }) =>
    dispatch(phonebookActions.addContact({ id, name, number })),
});

export default connect(null, mapDispatchToProps)(ContactForm);
