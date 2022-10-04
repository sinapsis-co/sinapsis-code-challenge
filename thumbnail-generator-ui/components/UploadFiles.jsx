
import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Typography, Button, ListItem, withStyles, Paper } from '@material-ui/core';
import UploadService from '../../thumbnail-generator-api/upload-files';


const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const UploadFiles = () => {
  //define state
  const [ currentFile, setCurrentFile ] = useState(undefined);
  const [ previewImage, setPreviewImage ] = useState(undefined);
  const [ progress, setProgress ] = useState(0);
  const [ message, setMessage ] = useState('');
  const [ isError, setIsError ] = useState(false);
  const [ fileInfos, setFileInfos ] = useState([]);

  const selectFile = (e) => {
    setCurrentFile(e.target.files);
  }

  const upload = () => {
    let selectedFile = currentFile[0];

    setProgress(0);
    setCurrentFile(selectedFile);

    UploadService.upload(selectFile, previewImage, (e) => {
      setProgress(Math.round((100 * e.loaded) / e.total)); 
      setPreviewImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    })
    .then((res) => {
      setMessage(res.data.message);
      return UploadService.getFiles();
    })
    .then((files) => {
      setFileInfos(files.data);
    })
    .catch(() => {
      setProgress(0);
      setMessage('Could not upload file!');
      setCurrentFile(undefined);
      setPreviewImage(undefined);
    });

    setCurrentFile(undefined);
  };

  useEffect(() => {
    UploadService.getFiles()
    .then((res) => {
      setFileInfos(res.data);
    });
  }, []);

    return (
      <div>
            {currentFile && (
        <Box className='progress'>
          <BorderLinearProgress
            className='progress-bar progress-bar-info progress-bar-striped'
            style={{ width: progress + '%' }}
          >
            {progress}%
          </BorderLinearProgress>
        </Box>
      )}

<label className='btn btn-default'>
        < input className='choose file' type='file' accept='.jpeg, .png' onChange={selectFile}/>
</label>
{previewImage ? (
     <div className='card'>
     <ul>
       <img src={previewImage} width='400' height='300' />
         <img src={previewImage} width='160' height='120' />
         <img src={previewImage} width='120' height='120' />
     </ul>
   </div>
) : (
  <Button
  color='primary'
  variant='contained'
  className='btn btn-success'
  disabled={!selectFile}
  onClick={upload}
>
  Upload
</Button> 
)
}
      <div className='alert alert-light' role='alert'>
        {message}
      </div>
      <br />
      <div className='card-header'>Images on Deck:</div>
    </div>
    );
}


export default UploadFiles;