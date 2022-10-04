
import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Typography } from "@material-ui/core";

import UploadFiles from './UploadFiles.jsx';


const App = () => {

    return (
      <div className="container">
      <div className="mg20">
        <Typography variant="h6">Trac File Upload</Typography>
      </div>

      <UploadFiles />
    </div>
    )
}

export default App;