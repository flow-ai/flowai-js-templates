"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Message", {
  enumerable: true,
  get: function get() {
    return _message.default;
  }
});
Object.defineProperty(exports, "Card", {
  enumerable: true,
  get: function get() {
    return _card.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _text.default;
  }
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _image.default;
  }
});
Object.defineProperty(exports, "Video", {
  enumerable: true,
  get: function get() {
    return _video.default;
  }
});
Object.defineProperty(exports, "Audio", {
  enumerable: true,
  get: function get() {
    return _audio.default;
  }
});
Object.defineProperty(exports, "File", {
  enumerable: true,
  get: function get() {
    return _file.default;
  }
});
Object.defineProperty(exports, "Buttons", {
  enumerable: true,
  get: function get() {
    return _buttons.default;
  }
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _carousel.default;
  }
});
Object.defineProperty(exports, "List", {
  enumerable: true,
  get: function get() {
    return _list.default;
  }
});
Object.defineProperty(exports, "Location", {
  enumerable: true,
  get: function get() {
    return _location.default;
  }
});
Object.defineProperty(exports, "Custom", {
  enumerable: true,
  get: function get() {
    return _custom.default;
  }
});
Object.defineProperty(exports, "Action", {
  enumerable: true,
  get: function get() {
    return _action.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});
Object.defineProperty(exports, "Media", {
  enumerable: true,
  get: function get() {
    return _media.default;
  }
});
Object.defineProperty(exports, "ListItem", {
  enumerable: true,
  get: function get() {
    return _listItem.default;
  }
});
Object.defineProperty(exports, "Param", {
  enumerable: true,
  get: function get() {
    return _param.Param;
  }
});
Object.defineProperty(exports, "QuickReply", {
  enumerable: true,
  get: function get() {
    return _quickReply.default;
  }
});
exports.Phone = void 0;

var _message = _interopRequireDefault(require("./message"));

var _card = _interopRequireDefault(require("./templates/card"));

var _text = _interopRequireDefault(require("./templates/text"));

var _image = _interopRequireDefault(require("./templates/image"));

var _video = _interopRequireDefault(require("./templates/video"));

var _audio = _interopRequireDefault(require("./templates/audio"));

var _file = _interopRequireDefault(require("./templates/file"));

var _buttons = _interopRequireDefault(require("./templates/buttons"));

var _carousel = _interopRequireDefault(require("./templates/carousel"));

var _list = _interopRequireDefault(require("./templates/list"));

var _location = _interopRequireDefault(require("./templates/location"));

var _custom = _interopRequireDefault(require("./templates/custom"));

var _action = _interopRequireDefault(require("./components/action"));

var _button = _interopRequireDefault(require("./components/button"));

var _media = _interopRequireDefault(require("./components/media"));

var _listItem = _interopRequireDefault(require("./components/listItem"));

var _param = require("./components/param");

var _quickReply = _interopRequireDefault(require("./components/quickReply"));

var _say = _interopRequireDefault(require("./templates/phone/say"));

var _hangup = _interopRequireDefault(require("./templates/phone/hangup"));

var _pause = _interopRequireDefault(require("./templates/phone/pause"));

var _ask = _interopRequireDefault(require("./templates/phone/ask"));

var _dial = _interopRequireDefault(require("./templates/phone/dial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Phone templates
var Phone = {
  Say: _say.default,
  Hangup: _hangup.default,
  Pause: _pause.default,
  Ask: _ask.default,
  Dial: _dial.default
};
exports.Phone = Phone;