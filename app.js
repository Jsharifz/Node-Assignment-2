const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');

const pageInfo = require('./pageInfo');
const gallery = require("./gallery");
app.locals.gallery = gallery;

app.set('view engine', 'ejs'); // allows us to exclude the file extension

app.get('/gallery/:id', function (req, res) {

  const findPhoto = function (myGallery, photoId) {
    const index = myGallery.findIndex(function (gallery, index) {
      return gallery.id === photoId
    })
    return myGallery[index]
  }

  let PId = Number(req.params.id)

  let photoById = findPhoto(gallery, PId)

  res.send(`

  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${photoById.title}</title>
    <link rel="stylesheet" type="text/css" href="/css/main.css" media="screen" />
  </head>
  
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/gallery">Gallery</a>
    </nav>

    <main>
  <h1>${photoById.title}</h1>

    <figure id="endpoint">
      <img src="/images/lrg/${photoById.fileName}" alt="${photoById.title}" id="${PId}">
      <figcaption>${photoById.title}, by: <em><a href="${photoById.attribution.url}" target="_blank">${photoById.attribution.credit}</a></em> (${photoById.attribution.source})</figcaption>
    </figure>

    </main>
    <footer>Javad Sharifzadeh-Najafi - Web Dev 2020 - SAIT</footer>

</body>

</html>

  `);
});

app.get('/', function (req, res) {
  res.render('index', pageInfo.index);
});

app.get('/gallery', function (req, res) {
  res.render('gallery', pageInfo.gallery);

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