import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import { fetchCat, deleteCat } from "../../actions";

class CatDelete extends React.Component {
  componentDidMount() {
    this.props.fetchCat(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;

    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteCat(id)}>Delete</button>
        <Link to="/">Cancel</Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.cat) {
      return "Are you sure you want to delete this cat ?";
    }

    return `Are you sure you want to delete ${this.props.cat.name} ?`;
  }

  render() {
    if (!this.props.cat) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Modal content={this.renderContent()} actions={this.renderActions()} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { cat: state.cats[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchCat, deleteCat })(CatDelete);
