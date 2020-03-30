const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const debug = require('debug');
const cors = require('cors');

dotenv.config();
const app = express();
const log = debug('prod');
const port = process.env.PORT || 3000;
const static = path.join(__dirname, '../', 'build');

app.use(cors());
app.use(express.static(static));

app.get('*', (req, res) => {
  res.sendFile(path.join(static, 'index.html'));
});

app.listen(port, () => {
  log(`Server running on port ${port}`);
});
