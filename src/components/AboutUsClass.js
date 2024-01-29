import React from "react";
import UserClass from "./UserClass";

class AboutUsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("PARENT constructor is called");
  }
  componentDidMount() {
    console.log("PARENT  component did mount is called");
  }
  render() {
    {
      console.log("PARENT render method is called");
    }
    return (
      <div>
        <h1>my count class ={this.state.count} </h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Add count
        </button>
        <UserClass userName="first" />

        {/* <h2>My name is {this.props.Name} </h2>
        <h3>Address - {this.props.Address} </h3> */}
      </div>
    );
  }
}
export default AboutUsClass;
