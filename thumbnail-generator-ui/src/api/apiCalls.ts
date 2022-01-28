const baseURL: string = process.env.REACT_APP_BASE_URL || '';

const sendFile = async (file: string) => {
  await fetch(baseURL, { method: 'POST', body: file });
};

export default { sendFile };
