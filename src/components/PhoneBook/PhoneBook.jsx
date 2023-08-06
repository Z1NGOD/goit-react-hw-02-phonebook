import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'ui/Container.styled';
import { Btn } from 'ui/Btn.styled';
import { MainText, Input, Form } from './Phonebook.styled';

export default class PhoneBook extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.addToContacts(name, number);
    this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <MainText>Phone Book</MainText>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
          <MainText>Number</MainText>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.handleChange}
          />
          <Btn type="submit">Add contact</Btn>
        </Form>
      </Container>
    );
  }
}

PhoneBook.propTypes = {
  addToContacts: PropTypes.func.isRequired,
};
