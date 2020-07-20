import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import FormPageComponent from "./containers/FormPageComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MenuComponent from "./components/MenuComponent";
import HomePageComponent from "./containers/HomePageComponent";
import CategoryPageComponent from "./containers/CategoryPageComponent";
import ActivitiesPageComponent from "./containers/ActivitiesPageComponent";
import CategoriesPageComponent from "./containers/CategoriesPageComponent";
import ActivityPageComponent from "./containers/ActivityPageComponent";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addModels } from "./actions/listActions";
export class App extends Component {
  componentDidMount() {
    this.props.addModels();
    
  }

  render() {
    return (
      <div>
        <MenuComponent categories={this.props.categories} />
        <Router>
          <Route exact path="/" component={HomePageComponent} />
          <Route exact path="/categories" component={CategoriesPageComponent} />
          <Route path="/categories/:id" component={CategoryPageComponent} />
          <Route exact path="/activities" component={ActivitiesPageComponent} />
          <Route exact path="/activities-new" component={FormPageComponent} />
          <Route
            path="/activities/:id"
            render={routerProps => (
              <ActivityPageComponent
                {...routerProps}
                activities={this.props.activities}
                categories={this.props.categories}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    activities: state.manageActivities.activities,
    categories: state.manageCategories.categories
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ addModels }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);