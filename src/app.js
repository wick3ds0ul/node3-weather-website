const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geocode');
const foreCast = require('./utils/forecast');

const app = express();

const port = process.env.PORT || 3000;
// Define Paths for Express Config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../template/views');
const partialsPath = path.join(__dirname, '../template/partials');

// Set Up handlebars and Views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Setup Static Directory To serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Prabhakar Maity',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Weather',
    name: 'Prabhakar Maity',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help Desk',
    name: 'Prabhakar Maity',
    msg: 'Hi,How may I help you?',
  });
});

app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must povide an address',
    });
  }
  geoCode(req.query.address, (error, { lat, long, place } = {}) => {
    if (error) {
      // return console.error(error);
      return res.send({
        error,
      });
    }
    foreCast(lat, long, (error, foreCastData) => {
      if (error) {
        return res.send({
          error,
        });
      }
      res.send({
        loacation: place,
        address: req.query.address,
        message: foreCastData,
      });
    });
  });

  // res.send({
  //   features: 'It is snowing',
  //   loacation: 'Pune',
  //   address: req.query.address
  // });
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'Serach term not provided.Please provide a serach term',
    });
  }
  console.log(req.query);
  res.send({
    products: [],
  });
});

app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Prabhakar Maity',
    errorMessage: 'Help article not found',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Prabhakar Maity',
    errorMessage: 'Not Found',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port,${port}`);
});
