import React from "react";
import { connect } from "react-redux";
import { fetchCat } from "../../actions";

class CatShow extends React.Component {
  componentDidMount() {
    this.props.fetchCat(this.props.match.params.id);
  }

  render() {
    if (!this.props.cat) {
      return <div>Loading...</div>;
    }

    const { name, color } = this.props.cat;

    return (
      <div>
        <h3>{name}</h3>
        <h4>{color}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { cat: state.cats[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchCat })(CatShow);
