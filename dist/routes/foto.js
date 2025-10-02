"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _FotoController = require('../controllers/FotoController'); var _FotoController2 = _interopRequireDefault(_FotoController);
var _loginRequire = require('../middlewares/loginRequire'); var _loginRequire2 = _interopRequireDefault(_loginRequire);

const router = new (0, _express.Router)();

router.post('/', _loginRequire2.default, _FotoController2.default.create);

exports. default = router;
