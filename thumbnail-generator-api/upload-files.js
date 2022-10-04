
const axios = require('axios');

const upload = (file, onUploadProgress) => {
  let formData = new FormData();

  formData.append('file', file);

  return axios.post('/', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () => {
  return axios.get('/');
};

module.exports = {
  upload,
  getFiles,
};