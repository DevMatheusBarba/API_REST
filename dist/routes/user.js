"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequire = require('../middlewares/loginRequire'); var _loginRequire2 = _interopRequireDefault(_loginRequire);

const router = new (0, _express.Router)();

// Não existe no projeto real
// router.get('/:id', UserController.show);
// router.get('/', UserController.index);

router.post('/', _loginRequire2.default, _UserController2.default.create);
router.put('/', _loginRequire2.default, _UserController2.default.update);
router.delete('/', _loginRequire2.default, _UserController2.default.delete);

exports. default = router;
