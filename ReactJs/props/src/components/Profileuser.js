import React from "react";

class Profileuser extends React.Component {
  render() {
    return (
      <>
        <h1>Showing Using Class</h1>
        <h2>{this.props.user.name}</h2>
        <h2>{this.props.user.email}</h2>
      </>
    );
  }
}

export default Profileuser;
