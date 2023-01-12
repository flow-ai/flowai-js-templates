"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _media = _interopRequireDefault(require("./components/media"));

var _card = _interopRequireDefault(require("./templates/card"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Media: _media.default,
  Card: _card.default
};
exports.default = _default;