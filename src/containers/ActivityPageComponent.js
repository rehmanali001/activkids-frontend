import React, { Component } from "react";


export class ActivityPageComponent extends Component {
  
  render(){
    const sectionStyle = {
      backgroundImage:
        "url(https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1594933577874-79081b19adb0image)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "700px",
      width: "1500px"
    };
    const { id } = this.props.match.params;
    const activityId = parseInt(id, 10);
    const activities = this.props.activities || [];
    const activity =
      activities.find(activity => activity.id === activityId) || {};
    const category = activity.category || {};
    
    return (
      <div style={sectionStyle}>
        <h1>{activity.name}</h1>
        <div>Category: {category.title}</div>
        <div>Address: {activity.address}</div>
        <div>Description: {activity.description}</div>
        <br />
        <a href="/"> Back to Home </a>
      </div>
    );
  }
}


export default (ActivityPageComponent);