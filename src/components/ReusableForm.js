import React from "react";
import PropTypes from "prop-types";

const ReusableForm = (props) => {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmiisionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' />
        <input
          type='text'
          name='location'
          placeholder='Location' />
        <textarea
          name='issue'
          placeholder='Describe your issue.' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
};

ReusableForm.propTypes = {
  formSubmiisionHandler: PropTypes.func,
  buttonText: PropTypes.string,
}

export default ReusableForm;