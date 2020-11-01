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
exports.Messenger = exports.Apple = exports.Phone = void 0;

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

var _imageAsset = _interopRequireDefault(require("./apple/components/imageAsset"));

var _videoAsset = _interopRequireDefault(require("./apple/components/videoAsset"));

var _interactiveMessage = _interopRequireDefault(require("./apple/components/interactiveMessage"));

var _locationItem = _interopRequireDefault(require("./apple/components/locationItem"));

var _eventItem = _interopRequireDefault(require("./apple/components/eventItem"));

var _timeItem = _interopRequireDefault(require("./apple/components/timeItem"));

var _listPickerSection = _interopRequireDefault(require("./apple/components/listPickerSection"));

var _listPickerItem = _interopRequireDefault(require("./apple/components/listPickerItem"));

var _richLink = _interopRequireDefault(require("./apple/templates/richLink"));

var _listPicker = _interopRequireDefault(require("./apple/templates/listPicker"));

var _timePicker = _interopRequireDefault(require("./apple/templates/timePicker"));

var _customInteractiveData = _interopRequireDefault(require("./apple/templates/customInteractiveData"));

var _oauth = _interopRequireDefault(require("./apple/components/oauth2"));

var _authRequest = _interopRequireDefault(require("./apple/templates/authRequest"));

var _payRequest = _interopRequireDefault(require("./apple/templates/payRequest"));

var _payEndpoints = _interopRequireDefault(require("./apple/components/payEndpoints"));

var _payMerchant = _interopRequireDefault(require("./apple/components/payMerchant"));

var _payLineItem = _interopRequireDefault(require("./apple/components/payLineItem"));

var _payShippingMethod = _interopRequireDefault(require("./apple/components/payShippingMethod"));

var _otn = _interopRequireDefault(require("./messenger/templates/otn"));

var _products = _interopRequireDefault(require("./messenger/templates/products"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * @namespace 
 * @description 
 * IVR bot specific reply templates
 **/
var Phone = {
  Say: _say.default,
  Hangup: _hangup.default,
  Pause: _pause.default,
  Ask: _ask.default,
  Dial: _dial.default
}; // Apple templates

exports.Phone = Phone;

/** 
 * @namespace 
 * @description 
 * Apple Business API specific reply templates
 **/
var Apple = {
  ImageAsset: _imageAsset.default,
  VideoAsset: _videoAsset.default,
  RichLink: _richLink.default,
  ListPicker: _listPicker.default,
  ListPickerSection: _listPickerSection.default,
  ListPickerItem: _listPickerItem.default,
  TimePicker: _timePicker.default,
  InteractiveMessage: _interactiveMessage.default,
  LocationItem: _locationItem.default,
  EventItem: _eventItem.default,
  TimeItem: _timeItem.default,
  CustomInteractiveData: _customInteractiveData.default,
  AuthRequest: _authRequest.default,
  Oauth2: _oauth.default,
  PayRequest: _payRequest.default,
  PayEndpoints: _payEndpoints.default,
  PayMerchant: _payMerchant.default,
  PayLineItem: _payLineItem.default,
  PayShippingMethod: _payShippingMethod.default
}; // Messenger templates

exports.Apple = Apple;

/** 
 * @namespace 
 * @description 
 * Facebook Messenger specific reply templates
 **/
var Messenger = {
  OTN: _otn.default,
  Products: _products.default
};
exports.Messenger = Messenger;