import React from "react";
import { connect } from "react-redux";
import { createCat } from "../../actions";
import CatForm from "./CatForm";

class CatCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createCat(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a cat</h3>
        <CatForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createCat })(CatCreate);
