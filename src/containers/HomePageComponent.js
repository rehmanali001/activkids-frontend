import React, { Component } from "react";
import CategoryListComponent from "../components/CategoryListComponent";
import { connect } from "react-redux";

export class HomePageComponent extends Component {
  render() {
    const headerstyle = {
      color: "black",
      textAlign: "center",
      fontFamily: "Bradley Hand, cursive"
    };
    const menuStyle = {
      color: "black",
      textAlign: "center",
      fontFamily: "Times New Roman"
    };
    const buttonStyle = {
      textAlign: "center"
    };
    const sectionStyle = {
      backgroundImage:
        "url(https://s3.us-west-2.amazonaws.com/images.unsplash.com/application-1594933393566-706fca63c9cfimage)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat", 
      width: "1500px",
      height: "700px"
    };

    return (
      <div style={sectionStyle}>
        <br />
        <br />
        <h2 style={headerstyle}>Welcome to ActivKids</h2>
        <br />
        <h4 style={menuStyle}>
          {" "}
          Where you can create a list of activities for your kids!
        </h4>
        <br />
        <div style={buttonStyle}>
          <CategoryListComponent categories={this.props.categories} />
          
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return  { categories: state.manageCategories.categories }
};

export default connect(mapStateToProps)(HomePageComponent);