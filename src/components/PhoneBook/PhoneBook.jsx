import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import ContactForm from "../ContactForm/ContactFormContainer";
import ContactList from "../ContactList/ContactListContainer";
import Filter from "../Filter/FilterContainer";
import "../../transitions/slide-appear.css";
import slideTransition from "../../transitions/slide.module.css";
import * as selectors from "../../redux/selectors";

import styles from "./PhoneBook.module.css";

const PhoneBook = ({ contacts }) => (
  <div className={styles.container}>
    <CSSTransition in timeout={500} classNames="slide" appear>
      <h1 className={styles.logo}>Phonebook</h1>
    </CSSTransition>

    <ContactForm />

    <TransitionGroup>
      {contacts.length > 1 && (
        <CSSTransition timeout={250} classNames={slideTransition}>
          <Filter />
        </CSSTransition>
      )}
    </TransitionGroup>

    <ContactList />
  </div>
);

const mapStateToProps = (store) => ({
  contacts: selectors.getContacts(store),
  notifyText: selectors.getNotifyMessage(store),
});

export default connect(mapStateToProps)(PhoneBook);
