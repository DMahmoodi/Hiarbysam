var express = require('express');
var router = express.Router();

router.get('/Haircuts', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageHaircuts = data.Haircuts;

  data.Haircuts.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('Haircuts', {
    pageTitle: 'Haircuts',
    artwork: pagePhotos,
    Haircuts: pageHaircuts,
    pageID: 'speakerList'
  });
});

router.get('/Haircuts/:speakerid', function(req, res) {
  var data = req.app.get('appData');
  var pagePhotos = [];
  var pageHaircuts = [];

  data.Haircuts.forEach(function(item) {
    if (item.shortname == req.params.speakerid) {
      pageHaircuts.push(item);
      pagePhotos = pagePhotos.concat(item.artwork);
    }
  });

  res.render('Haircuts', {
    pageTitle: 'Speaker Info',
    artwork: pagePhotos,
    Haircuts: pageHaircuts,
    pageID: 'speakerDetail'
  });
});

module.exports = router;
