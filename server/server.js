const express = require('express');
const app = express();

// app.use(express.json())

// app.use('/', express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello I am here')
});

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})