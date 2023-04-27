const path = require('path');

const prepFileToSend = (req, res, next) => {
  res.fileToShow = (name) => {
    const filePath = path.join(__dirname, `../files/${name}.html`);
    res.sendFile(filePath);
  };
  next();
};

module.exports = { prepFileToSend };