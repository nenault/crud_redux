import React from "react";
import { connect } from "react-redux";
import { fetchCats } from "../../actions";
import { Link } from "react-router-dom";

class CatList extends React.Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  renderList() {
    return this.props.cats.map((cat) => {
      return (
        <div key={cat.id}>
          <Link to={`/cats/${cat.id}`}>Name: {cat.name}</Link>
          <br />
          Color : {cat.color}
          <br />
          <Link to={`cats/edit/${cat.id}`}>Edit</Link> |{" "}
          <Link to={`cats/delete/${cat.id}`}>Delete</Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>Cats</h2>
        <div>{this.renderList()}</div>
        <Link to="/cats/new">Create cat</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { cats: Object.values(state.cats) };
};

export default connect(mapStateToProps, { fetchCats })(CatList);
