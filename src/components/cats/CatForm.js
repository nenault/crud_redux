import React from "react";
import { Field, reduxForm } from "redux-form";

class CatForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div>{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="name"
          component={this.renderInput}
          label="enter cat name"
        />
        <Field
          name="color"
          component={this.renderInput}
          label="enter cat color"
        />
        <button>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) errors.title = "You must enter a name";
  if (!formValues.name) errors.color = "You must enter a color";

  return errors;
};

export default reduxForm({
  form: "catForm",
  validate,
})(CatForm);
