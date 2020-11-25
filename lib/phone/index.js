"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _say = _interopRequireDefault(require("./templates/say"));

var _hangup = _interopRequireDefault(require("./templates/hangup"));

var _pause = _interopRequireDefault(require("./templates/pause"));

var _ask = _interopRequireDefault(require("./templates/ask"));

var _dial = _interopRequireDefault(require("./templates/dial"));

var _message = _interopRequireDefault(require("../base/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Say: _say.default,
  Hangup: _hangup.default,
  Pause: _pause.default,
  Ask: _ask.default,
  Dial: _dial.default,
  Message: _message.default
};
exports.default = _default;