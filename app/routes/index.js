var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageHaircuts = data.Haircuts;

  data.Haircuts.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: 'Home',
    artwork: pagePhotos,
    Haircuts: pageHaircuts,
    pageID: 'home'
  });

});

module.exports = router;
