const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');
const pageInfo = require('./pageInfo');
const galleryItems = require("./gallery");
app.locals.galleryItems = require("./gallery")


app.set('view engine', 'ejs'); // allows us to exclude the file extension

const id = galleryItems.id;
const source = galleryItems.fileName;
const title = galleryItems.title;

const imgId = `/gallery/:${id}`

app.get('/gallery/:id', function (req, res) {
  res.send(
    `
         <figure>
         <img src="/images/sm/${galleryItems.fileName}" alt="${galleryItems.title}" id="${galleryItems.id}">
         <figcaption>${galleryItems.title}, by: </figcaption>
     </figure>
    `
  );
});

app.get('/', function (req, res) {
  res.render('index', pageInfo.index);
});

app.get('/gallery', function (req, res) {
  res.render("gallery", pageInfo.gallery)
});

app.use(express.static(path.join(__dirname, "public")))

app.use(function (req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});