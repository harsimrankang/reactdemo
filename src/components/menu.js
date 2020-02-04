import React, { Component } from "react";

class Menu extends Component {
  state = { menu: [] };
  componentDidMount() {
    fetch("https://canteen-ordering-3d30c.firebaseio.com/public/Tea%20Q.json")
      .then(res => res.json())
      .then(res => this.setState({ menu: res }));
  }
  componentDidUpdate() {
    console.log("updated");
    console.log(this.state.menu);
  }
  render() {
    return (
      <div
        className="container-fluid bg-light text-dark justify-content-center"
        style={{ width: "100%" }}
      >
        <div className="row">
          {Object.keys(this.state.menu).map(key => {
            return (
              <div className="card col-4">
                <div className="card-body"> {this.state.menu[key].name}</div>
                <div> {this.state.menu[key].price}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Menu;
