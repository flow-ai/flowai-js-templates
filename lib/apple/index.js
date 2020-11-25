"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imageAsset = _interopRequireDefault(require("./components/imageAsset"));

var _videoAsset = _interopRequireDefault(require("./components/videoAsset"));

var _interactiveMessage = _interopRequireDefault(require("./components/interactiveMessage"));

var _locationItem = _interopRequireDefault(require("./components/locationItem"));

var _eventItem = _interopRequireDefault(require("./components/eventItem"));

var _timeItem = _interopRequireDefault(require("./components/timeItem"));

var _listPickerSection = _interopRequireDefault(require("./components/listPickerSection"));

var _listPickerItem = _interopRequireDefault(require("./components/listPickerItem"));

var _richLink = _interopRequireDefault(require("./templates/richLink"));

var _listPicker = _interopRequireDefault(require("./templates/listPicker"));

var _timePicker = _interopRequireDefault(require("./templates/timePicker"));

var _customInteractiveData = _interopRequireDefault(require("./templates/customInteractiveData"));

var _oauth = _interopRequireDefault(require("./components/oauth2"));

var _authRequest = _interopRequireDefault(require("./templates/authRequest"));

var _payRequest = _interopRequireDefault(require("./templates/payRequest"));

var _payEndpoints = _interopRequireDefault(require("./components/payEndpoints"));

var _payMerchant = _interopRequireDefault(require("./components/payMerchant"));

var _payLineItem = _interopRequireDefault(require("./components/payLineItem"));

var _payShippingMethod = _interopRequireDefault(require("./components/payShippingMethod"));

var _message = _interopRequireDefault(require("../base/message"));

var _text = _interopRequireDefault(require("../base/templates/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Apple templates
var _default = {
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
  PayShippingMethod: _payShippingMethod.default,
  Message: _message.default,
  Text: _text.default
};
exports.default = _default;