import React from "react";
import Button from "@material-ui/core/Button";

const Tweet = () => {
  return (
    <div className="tweet" style={{ backgroundColor: "#cfe8fc" }}>
      <hr />
      <h2>Name</h2>
      <h3>This is the actual tweet</h3>
      <h5>Created: By </h5>
      <small>this is the message:</small>
      <br />
      <Button variant="contained" color="primary">
        Delete
      </Button>
      <Button variant="contained" color="secondary">
        Like
      </Button>
    </div>
  );
};

export default Tweet;
