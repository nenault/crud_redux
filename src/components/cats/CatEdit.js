import _ from 'lodash'
import React from "react";
import { connect } from "react-redux";
import { fetchCat, editCat } from "../../actions";
import CatForm from "./CatForm";

class CatEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCat(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editCat(this.props.match.params.id, formValues)
  };

  render() {
    if (!this.props.cat) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a cat</h3>
        <CatForm initialValues={_.pick(this.props.cat, 'name', 'color')} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { cat: state.cats[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchCat, editCat })(CatEdit);
