"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Say", {
  enumerable: true,
  get: function get() {
    return _say.default;
  }
});
Object.defineProperty(exports, "Hangup", {
  enumerable: true,
  get: function get() {
    return _hangup.default;
  }
});
Object.defineProperty(exports, "Pause", {
  enumerable: true,
  get: function get() {
    return _pause.default;
  }
});
Object.defineProperty(exports, "Ask", {
  enumerable: true,
  get: function get() {
    return _ask.default;
  }
});
Object.defineProperty(exports, "Dial", {
  enumerable: true,
  get: function get() {
    return _dial.default;
  }
});

var _say = _interopRequireDefault(require("./templates/say"));

var _hangup = _interopRequireDefault(require("./templates/hangup"));

var _pause = _interopRequireDefault(require("./templates/pause"));

var _ask = _interopRequireDefault(require("./templates/ask"));

var _dial = _interopRequireDefault(require("./templates/dial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }