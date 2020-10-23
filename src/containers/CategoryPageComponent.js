import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NewCounter from "./temp.js"

export class CategoryPageComponent extends Component {

  render() {
    const sectionStyle = {
      backgroundImage:
        "url(https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1594933666633-23fad193377cimage)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "700px",
      width: "1500px"
    };

    const id = parseInt(this.props.match.params.id, 10);
    const categories = this.props.categories || [];
    const category = categories.find(cat => cat.id === id) || {};
    const activitiesForCategory = (this.props.activities || [])
      .filter(activity => activity.category.id === category.id)
      .map((activity, idx) => {
        const url = "/activities/" + activity.id;
        return (
          <li key={idx}>
            <Link to={url} className="App-link">
              {activity.name}
            </Link>
            <NewCounter key={idx}/>
          </li>
        );
      });


    return (
      <div style={sectionStyle}>
        <br />
        <h1> Activities for {category.title}</h1>
        <ul>{activitiesForCategory}
        </ul>
        <div>
          <Link to="/activities-new" className="App-link">
            Add new
          </Link>
        </div>
      </div>
    );
  }

}
const mapStateToProps = state => ({
  activities: state.manageActivities.activities,
  categories: state.manageCategories.categories
});

export default connect(mapStateToProps)(CategoryPageComponent);