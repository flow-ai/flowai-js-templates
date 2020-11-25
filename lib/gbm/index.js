"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _card = _interopRequireDefault(require("./templates/card"));

var _carousel = _interopRequireDefault(require("./templates/carousel"));

var _suggestion = _interopRequireDefault(require("./components/suggestion"));

var _media = _interopRequireDefault(require("./components/media"));

var _message = _interopRequireDefault(require("../base/message"));

var _text = _interopRequireDefault(require("../base/templates/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Google Business Messages templates
var _default = {
  Card: _card.default,
  Carousel: _carousel.default,
  Suggestion: _suggestion.default,
  Media: _media.default,
  Message: _message.default,
  Text: _text.default
};
exports.default = _default;