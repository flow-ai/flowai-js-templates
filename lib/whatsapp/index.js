"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _text = _interopRequireDefault(require("./templates/text"));

var _image = _interopRequireDefault(require("./templates/image"));

var _video = _interopRequireDefault(require("./templates/video"));

var _audio = _interopRequireDefault(require("./templates/audio"));

var _location = _interopRequireDefault(require("./templates/location"));

var _document = _interopRequireDefault(require("./templates/document"));

var _sticker = _interopRequireDefault(require("./templates/sticker"));

var _contacts = _interopRequireDefault(require("./templates/contacts"));

var _list = _interopRequireDefault(require("./templates/list"));

var _template = _interopRequireDefault(require("./templates/template"));

var _listItem = _interopRequireDefault(require("./components/listItem"));

var _listItemSection = _interopRequireDefault(require("./components/listItemSection"));

var _contact = _interopRequireDefault(require("./components/contact"));

var _address = _interopRequireDefault(require("./components/address"));

var _emailAddress = _interopRequireDefault(require("./components/emailAddress"));

var _websiteAddress = _interopRequireDefault(require("./components/websiteAddress"));

var _phoneNumber = _interopRequireDefault(require("./components/phoneNumber"));

var _name = _interopRequireDefault(require("./components/name"));

var _organization = _interopRequireDefault(require("./components/organization"));

var _button = _interopRequireDefault(require("./components/button"));

var _buttons = _interopRequireDefault(require("./templates/buttons"));

var _header = _interopRequireDefault(require("./components/header"));

var _buttonTemplate = _interopRequireDefault(require("./components/buttonTemplate"));

var _component = _interopRequireDefault(require("./components/component"));

var _currency = _interopRequireDefault(require("./components/currency"));

var _dateTime = _interopRequireDefault(require("./components/dateTime"));

var _language = _interopRequireDefault(require("./components/language"));

var _parameter = _interopRequireDefault(require("./components/parameter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// WhatsApp templates
var _default = {
  Text: _text.default,
  Image: _image.default,
  Video: _video.default,
  Audio: _audio.default,
  Location: _location.default,
  Document: _document.default,
  Sticker: _sticker.default,
  Contacts: _contacts.default,
  Contact: _contact.default,
  Address: _address.default,
  EmailAddress: _emailAddress.default,
  WebsiteAddress: _websiteAddress.default,
  PhoneNumber: _phoneNumber.default,
  Name: _name.default,
  Organization: _organization.default,
  List: _list.default,
  ListItem: _listItem.default,
  ListItemSection: _listItemSection.default,
  Button: _button.default,
  Buttons: _buttons.default,
  Header: _header.default,
  Template: _template.default,
  ButtonTemplate: _buttonTemplate.default,
  Components: _component.default,
  Currency: _currency.default,
  DateTime: _dateTime.default,
  Language: _language.default,
  Parameter: _parameter.default
};
exports.default = _default;