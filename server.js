const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
 res.render('index')
});

app.listen(process.env.PORT ?? 3005);
