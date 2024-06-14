import React from "react";

function Textprops(props) {
  const name = props.user.name;
  const email = props.user.email;
  return (
    <>
      <h3>{name}</h3>
      <h3>{email}</h3>
    </>
  );
}

export default Textprops;
