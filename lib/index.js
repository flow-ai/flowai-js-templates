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
Object.defineProperty(exports, "Note", {
  enumerable: true,
  get: function get() {
    return _note.default;
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
exports.Messenger = exports.Phone = void 0;

var _message = _interopRequireDefault(require("./generic/message"));

var _card = _interopRequireDefault(require("./generic/templates/card"));

var _text = _interopRequireDefault(require("./generic/templates/text"));

var _image = _interopRequireDefault(require("./generic/templates/image"));

var _video = _interopRequireDefault(require("./generic/templates/video"));

var _audio = _interopRequireDefault(require("./generic/templates/audio"));

var _file = _interopRequireDefault(require("./generic/templates/file"));

var _buttons = _interopRequireDefault(require("./generic/templates/buttons"));

var _carousel = _interopRequireDefault(require("./generic/templates/carousel"));

var _list = _interopRequireDefault(require("./generic/templates/list"));

var _location = _interopRequireDefault(require("./generic/templates/location"));

var _custom = _interopRequireDefault(require("./generic/templates/custom"));

var _note = _interopRequireDefault(require("./generic/templates/note"));

var _action = _interopRequireDefault(require("./generic/components/action"));

var _button = _interopRequireDefault(require("./generic/components/button"));

var _media = _interopRequireDefault(require("./generic/components/media"));

var _listItem = _interopRequireDefault(require("./generic/components/listItem"));

var _param = require("./generic/components/param");

var _quickReply = _interopRequireDefault(require("./generic/components/quickReply"));

var _say = _interopRequireDefault(require("./phone/templates/say"));

var _hangup = _interopRequireDefault(require("./phone/templates/hangup"));

var _pause = _interopRequireDefault(require("./phone/templates/pause"));

var _ask = _interopRequireDefault(require("./phone/templates/ask"));

var _dial = _interopRequireDefault(require("./phone/templates/dial"));

var _otn = _interopRequireDefault(require("./messenger/templates/otn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Phone templates
// Messenger templates
var Phone = {
  Say: _say.default,
  Hangup: _hangup.default,
  Pause: _pause.default,
  Ask: _ask.default,
  Dial: _dial.default
};
exports.Phone = Phone;
var Messenger = {
  OTN: _otn.default
};
exports.Messenger = Messenger;