import React, {useState} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "../../ui/InputField/InputField";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    return (
      <form className="mc__form">
        <h3 className="mc__title">Join our email list for future updates.</h3>
        <div className="mc__field-container">
          <input
            label="First Name"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="Jane"
            isRequired
          />

          <input
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />

        </div>

        <label
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      </form>
    );
};