import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "default name",
        location: "default location",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props.userName, "component did mount  is called");
    // const data = await fetch("https://api.github.com/users/badal-hub");
    // const jsonData = await data.json();
    // console.log(jsonData, "userdata");
    // this.setState({
    //   userInfo: jsonData,
    // });
    this.timer = setInterval(()=>{
      console.log("set interval method is called")
    },1000)
  }
  componentDidUpdate(){
    console.log('component.didupadate is called');
    
  }
  componentWillUnmount(){
    clearInterval(this.timer)
    console.log('component.will unmount is called');

  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <>
        <div>user page userName - {name}</div>
        <div> Address - {location}</div>
        <img src={`${avatar_url}`} alt="profile img" width="25" height="25" />
      </>
    );
  }
}
export default UserClass;
