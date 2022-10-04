
import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Box, Typography, Button, ListItem, withStyles, Paper } from '@material-ui/core';
import UploadService from '../../thumbnail-generator-api/upload-files.service';


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
      SetPreviewImage(URL.createObjectURL(e.target.files[0]));
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
        <Paper>
            {currentFile && (
        <div className='progress'>
          <div
            className='progress-bar progress-bar-info progress-bar-striped'
            role='progressbar'
            aria-valuenow={progress}
            aria-valuemin='0'
            aria-valuemax='100'
            style={{ width: progress + '%' }}
          >
            {progress}%
          </div>
        </div>
      )}

<label className='btn btn-default'>
        < input type='file' accept='.jpeg, .png' onChange={selectFile} />
      </label>

      <Button
        className='btn btn-success'
        // disabled={!selectedFiles}
        onClick={upload}
      >
        Upload
      </Button>

      <div className='alert alert-light' role='alert'>
        {message}
      </div>

      <div className="card">
        <div className="card-header">List of Files</div>
        <ul className="list-group list-group-flush">
          {/* {fileInfos &&
            fileInfos.map((file, index) => (
              <li className="list-group-item" key={index}>
                <a href={file.url}>{file.name}</a>
              </li>
            ))} */}
        </ul>
      </div>
      </Paper>
    </div>
    );
}

export default UploadFiles;