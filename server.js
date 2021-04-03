const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use('/', require('./controllers/burgers_controller'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('I am running on port', PORT);
});