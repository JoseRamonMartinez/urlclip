const express = require('express');
const path = require('path');
let cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'www')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../www/index.html'));
});

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

const port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, () => console.log('running'));
