const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;
const meta = require('./src/routes/metaRoutes');

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './src/views');
app.set('view engine', 'pug');


app.use('/', meta);
app.get('/', (req, res) => {
  res.send('Hello from Express');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/pug', (req, res) => {
   res.render('index', {'title': 'My Library', list: ['a', 'b']});
});

app.listen(port, () => {
  debug(`listening on port ${chalk.green(port)}`);
});
