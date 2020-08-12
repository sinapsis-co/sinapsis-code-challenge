import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { estructureObject } from "../../../utils/Index";
import axios from "axios";
import "./SendImage.sass";

function SendImage({ valueImageLoad, deleteAllImageHandler }) {
  const [showImage, setShowImages] = useState([]);

  const pushImageHandler = async () => {
    try {
      return estructureObject(valueImageLoad).map(async (image) => {
        const response = await axios.post(process.env.REACT_APP_URL, image);
        setShowImages((showImage) => [...showImage, response.data]);
        deleteAllImageHandler();
      });
    } catch (error) {
      return error;
    }
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
      <div className="sendimage_showimages">
        {showImage
          ? showImage.map((image, index) => {
              return (
                <div key={index}>
                  <h2>{image.name}</h2>
                  <h2>{image.size}</h2>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default SendImage;
