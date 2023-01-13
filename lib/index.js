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
Object.defineProperty(exports, "Handover", {
  enumerable: true,
  get: function get() {
    return _handover.default;
  }
});
Object.defineProperty(exports, "Generic", {
  enumerable: true,
  get: function get() {
    return _generic.default;
  }
});
Object.defineProperty(exports, "GBM", {
  enumerable: true,
  get: function get() {
    return _gbm.default;
  }
});
Object.defineProperty(exports, "WhatsApp", {
  enumerable: true,
  get: function get() {
    return _whatsapp.default;
  }
});
exports.Workflows = exports.Line = exports.Khoros = exports.Twitter = exports.Messenger = exports.Apple = exports.Phone = void 0;

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

var _param = require("./base/components/param");

var _quickReply = _interopRequireDefault(require("./generic/components/quickReply"));

var _handover = _interopRequireDefault(require("./generic/templates/handover"));

var _say = _interopRequireDefault(require("./phone/templates/say"));

var _hangup = _interopRequireDefault(require("./phone/templates/hangup"));

var _pause = _interopRequireDefault(require("./phone/templates/pause"));

var _ask = _interopRequireDefault(require("./phone/templates/ask"));

var _dial = _interopRequireDefault(require("./phone/templates/dial"));

var _handover2 = _interopRequireDefault(require("./phone/templates/handover"));

var _generic = _interopRequireDefault(require("./generic"));

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

var _receipt = _interopRequireDefault(require("./messenger/templates/receipt"));

var _address = _interopRequireDefault(require("./messenger/components/receipt/address"));

var _adjustment = _interopRequireDefault(require("./messenger/components/receipt/adjustment"));

var _element = _interopRequireDefault(require("./messenger/components/receipt/element"));

var _summary = _interopRequireDefault(require("./messenger/components/receipt/summary"));

var _sticker = _interopRequireDefault(require("./line/templates/sticker"));

var _agentText = _interopRequireDefault(require("./workflows/templates/agentText"));

var _gbm = _interopRequireDefault(require("./gbm"));

var _whatsapp = _interopRequireDefault(require("./whatsapp"));

var _publicReply = _interopRequireDefault(require("./twitter/templates/publicReply"));

var _priority = _interopRequireDefault(require("./khoros/templates/priority"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @namespace
 * @description
 * IVR bot specific reply templates
 **/
// Apple templates
// Messenger templates
//Line templates
// Workflows templates

/** 
 * @namespace Phone
 * @description 
 * IVR bot specific reply templates
 **/
var Phone = {
  Say: _say.default,
  Hangup: _hangup.default,
  Pause: _pause.default,
  Ask: _ask.default,
  Dial: _dial.default,
  Handover: _handover2.default
};
/**
 * @namespace
 * @description
 * Apple Business API specific reply templates
 **/

exports.Phone = Phone;
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
};
/** 
 * @namespace GBM
 * @description 
 * Google Business Messages specific reply templates
 **/

exports.Apple = Apple;

/**
 * @namespace
 * @description
 * Facebook Messenger specific reply templates
 **/
var Messenger = {
  OTN: _otn.default,
  Products: _products.default,
  Receipt: _receipt.default,
  ReceiptAddress: _address.default,
  ReceiptAdjustment: _adjustment.default,
  ReceiptElement: _element.default,
  ReceiptSummary: _summary.default
}; // Twitter templates

exports.Messenger = Messenger;

/**
 * @namespace
 * @description
 * Twitter specific reply templates
 */
var Twitter = {
  PublicReply: _publicReply.default
}; // Khoros templates

exports.Twitter = Twitter;
var Khoros = {
  Priority: _priority.default
};
exports.Khoros = Khoros;
var Line = {
  Sticker: _sticker.default
};
/**
 * @namespace Workflows
 * @description Workflows specific reply templates
 **/

exports.Line = Line;
var Workflows = {
  AgentText: _agentText.default
};
exports.Workflows = Workflows;