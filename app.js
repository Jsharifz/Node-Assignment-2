const path = require('path');
const express = require('express');
const app = express();
const ejs = require('ejs');
const pageInfo = require('./pageInfo');
const gallery = require("./gallery");
app.locals.gallery = gallery;

app.set('view engine', 'ejs'); // allows us to exclude the file extension

const id = gallery.id

const idGet = `/gallery/:${id}`
const imageOfId = ''

app.get(`${idGet}`, function (req, res) {
  res.send(

    function myFunction() {
      document.getElementById("gallery-id").innerHTML = ages.filter(checkId);
    }
      `
      <figure>
        <img src="images/sm/<%= pictures.fileName %>" alt="<%= pictures.title %>" id="${id}">
        <figcaption><%= pictures.title %>, by: <%= pictures.attribution.credit %></figcaption>
      </figure>
    `
  );
});

app.get('/', function (req, res) {
  res.render('index', pageInfo.index);
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