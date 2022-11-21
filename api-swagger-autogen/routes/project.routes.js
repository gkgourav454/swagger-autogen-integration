const infraController = require('./../controllers/admin/infra.controller');
const express = require('express');
const router = express.Router();
let bodyParser = require('body-parser');

let jsonParser = bodyParser.json()

router.route("/health").post(jsonParser, infraController.health);
router.route("/health2").post(jsonParser, infraController.health2);

module.exports = router;