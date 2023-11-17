"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _media = _interopRequireDefault(require("./components/media"));

var _file = _interopRequireDefault(require("./templates/file"));

var _card = _interopRequireDefault(require("./templates/card"));

var _carousel = _interopRequireDefault(require("./templates/carousel"));

var _button = _interopRequireDefault(require("./components/button"));

var _suggestedAction = _interopRequireDefault(require("./components/suggestedAction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Media: _media.default,
  File: _file.default,
  Card: _card.default,
  Carousel: _carousel.default,
  Button: _button.default,
  SuggestedAction: _suggestedAction.default
};
exports.default = _default;