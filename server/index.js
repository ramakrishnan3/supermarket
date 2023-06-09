const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = require('./src/cart/routes');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/cart', cartRoutes);

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});

module.exports = app;