import React from "react";
import Button from "@material-ui/core/Button";

const Tweet = ({ name, message }) => {
  const sayHello = (user) => {
    console.log(`${user} nice to meet you`);
  };
  return (
    <div className="tweet" style={{ backgroundColor: "#cfe8fc" }}>
      <hr />
      <h3>Name: {name}</h3>
      <h3>Message: {message}</h3>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => sayHello("Daniel")}
      >
        Delete
      </Button>
      <Button variant="contained" color="secondary">
        Like
      </Button>
    </div>
  );
};

export default Tweet;
