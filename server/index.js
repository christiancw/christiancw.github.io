const express = require('express');
const path = require('path');

const app = express();

const PORT = 3443;
app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use((req, res, next) =>
    path.extname(req.path).length > 0 ? res.status(404).send('Not found') : next())
  app.use('*', (req, res) =>
    res.sendFile(path.join(__dirname, '..', 'index.html')))
  app.use((err, req, res, next) =>
    res.status(err.status || 500).send(err.message || 'Internal server error.'));

app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`));
