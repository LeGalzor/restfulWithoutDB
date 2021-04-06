var express = require('express');
var router = express.Router();

let savedResource = {};

const resources = {};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({running: true})
});

router.get('/resource/:resourceName', function(req, res, next) {
  const resourceName = req.params.resourceName
  if (!resourceName) {
    res.json({error: 'no resource name provided'})
  }
  res.json(resources[resourceName]);
});


router.post('/resource/:resourceName', function(req, res, next) {
  const resourceName = req.params.resourceName
  if (!resourceName) {
    res.json({error: 'no resource name provided'})
  }
  resources[resourceName] = req.body;
  res.json(resources[resourceName]);
});

router.delete('/resource/:resourceName', function(req, res, next) {
  const resourceName = req.params.resourceName
  delete resources[resourceName]
  res.json(savedResource);
});


router.get('/resource', function(req, res, next) {
  res.json(savedResource);
});

router.post('/resource', function(req, res, next) {

  savedResource = {
    ...savedResource,
    ...req.body
  }
  console.log(JSON.stringify(savedResource));

  res.json(savedResource)
});

router.delete('/resource', function(req, res, next) {
  savedResource = {}
  res.json(savedResource);
});


module.exports = router;
