import React from "react";
import Button from "@material-ui/core/Button";
import "./SendImage.sass";

function SendImage({ valueImageLoad }) {
  const pushImageHandler = () => {
    console.log(valueImageLoad);
  };

  return (
    <div className="sendimage">
      <Button
        onClick={pushImageHandler}
        style={{ marginTop: "15px", width: "40%" }}
        variant="contained"
        color="secondary">
        Load image
      </Button>
    </div>
  );
}

export default SendImage;
