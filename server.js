// dependencies
const app = require('express')();
const logger = require('morgan');
const bodyParser = require('body-parser');


const gamesRouter = require('./routers/gamesRouter');

// global variables
const PORT = process.env.PORT || 3000;

// use apis
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/games', gamesRouter);

app.get('/', (req, res) => {
  res.send('This will be a server holding a database with game information');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`); // eslint-disable-line
});
