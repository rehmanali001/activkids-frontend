import React, { Component } from "react";

class ActivityFormComponent extends Component {
  state = {
    name: "",
    address: "",
    description: "",
    category_id: ""
  };

  handleNameChange = event => {
    event.preventDefault();
    this.setState({
      name: event.target.value
    });
  };
  handleAddressChange = event => {
    event.preventDefault();
    this.setState({
      address: event.target.value
    });
  };
  handleDescriptionChange = event => {
    event.preventDefault();
    this.setState({
      description: event.target.value
    });
  };
  handleCategoryChange = event => {
    event.preventDefault();
    this.setState({
      category_id: event.target.value
    });
  };

  handleOnSubmit = event => { // ACBD
    event.preventDefault();
    console.log('A');
    this.props.addActivity(this.state);
    console.log('B');
    this.setState({
      name: "",
      address: "",
      description: "",
      category_id: ""
    });
  };
  renderCategories() {
    const categories = this.props.categories || [];
    return categories.map((category, idx) => {
      return (
        <option key={idx} value={category.id}>
          {category.title}
        </option>
      );
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.name}
            placeholder="name"
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            value={this.state.address}
            placeholder="address"
            onChange={this.handleAddressChange}
          />
          <input
            type="text"
            value={this.state.description}
            placeholder="description"
            onChange={this.handleDescriptionChange}
          />
          <select name="category" onChange={this.handleCategoryChange}>
            <option>choose category</option>
            {this.renderCategories()}
          </select>
          <button type="submit">create</button>
        </form>
      </div>
    );
  }
}



export default ActivityFormComponent;