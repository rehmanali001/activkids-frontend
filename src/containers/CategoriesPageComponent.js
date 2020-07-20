import React, { Component } from "react";
import CategoryListComponent from "../components/CategoryListComponent";
import { connect } from "react-redux";

export class CategoriesPageComponent extends Component {
  render() {
    return (
      <div>
        <h1>Categories</h1>
        <CategoryListComponent categories={this.props.categories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { categories: state.manageCategories.categories }
};

export default connect(mapStateToProps)(CategoriesPageComponent);