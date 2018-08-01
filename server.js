// dependencies
const app = require('express')();

// global variables
const PORT = process.env.PORT || 3000;

app.use('/', (req, res) => {
  res.send('This will be a server holding a database with game information');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
