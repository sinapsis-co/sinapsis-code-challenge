
import React, { Component } from 'react';



const App = () => {

    return (
      <form action="upload.jpeg" method="post" enctype="multipart/form-data">
      <label>Select Image File:</label>
      <input type="file" name="image"></input>
      <input type="submit" name="submit" value="Upload"></input>
  </form>
    )
}

export default App;