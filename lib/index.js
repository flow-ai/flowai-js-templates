"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Generic", {
  enumerable: true,
  get: function get() {
    return _generic.default;
  }
});
Object.defineProperty(exports, "Phone", {
  enumerable: true,
  get: function get() {
    return _phone.default;
  }
});
Object.defineProperty(exports, "Messenger", {
  enumerable: true,
  get: function get() {
    return _messenger.default;
  }
});
Object.defineProperty(exports, "Apple", {
  enumerable: true,
  get: function get() {
    return _apple.default;
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
exports.QuickReply = exports.Param = exports.ListItem = exports.Media = exports.Button = exports.Action = exports.Note = exports.Custom = exports.Location = exports.List = exports.Carousel = exports.Buttons = exports.File = exports.Audio = exports.Video = exports.Image = exports.Card = exports.Text = exports.Message = void 0;

var _generic = _interopRequireDefault(require("./generic"));

var _phone = _interopRequireDefault(require("./phone"));

var _messenger = _interopRequireDefault(require("./messenger"));

var _apple = _interopRequireDefault(require("./apple"));

var _gbm = _interopRequireDefault(require("./gbm"));

var _whatsapp = _interopRequireDefault(require("./whatsapp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** 
 * @namespace Generic
 * @description 
 * IVR bot specific reply templates
 **/

/** 
 * @namespace Phone
 * @description 
 * IVR bot specific reply templates
 **/

/** 
 * @namespace Messenger
 * @description 
 * Facebook Messenger specific reply templates
 **/

/** 
 * @namespace Apple
 * @description 
 * Apple Business API specific reply templates
 **/

/** 
 * @namespace GBM
 * @description 
 * Google Business Messages specific reply templates
 **/

/** 
 * @namespace WhatsApp
 * @description 
 * Google Business Messages specific reply templates
 **/
var Message = _generic.default.Message,
    Text = _generic.default.Text,
    Card = _generic.default.Card,
    Image = _generic.default.Image,
    Video = _generic.default.Video,
    Audio = _generic.default.Audio,
    File = _generic.default.File,
    Buttons = _generic.default.Buttons,
    Carousel = _generic.default.Carousel,
    List = _generic.default.List,
    Location = _generic.default.Location,
    Custom = _generic.default.Custom,
    Note = _generic.default.Note,
    Action = _generic.default.Action,
    Button = _generic.default.Button,
    Media = _generic.default.Media,
    ListItem = _generic.default.ListItem,
    Param = _generic.default.Param,
    QuickReply = _generic.default.QuickReply;
exports.QuickReply = QuickReply;
exports.Param = Param;
exports.ListItem = ListItem;
exports.Media = Media;
exports.Button = Button;
exports.Action = Action;
exports.Note = Note;
exports.Custom = Custom;
exports.Location = Location;
exports.List = List;
exports.Carousel = Carousel;
exports.Buttons = Buttons;
exports.File = File;
exports.Audio = Audio;
exports.Video = Video;
exports.Image = Image;
exports.Card = Card;
exports.Text = Text;
exports.Message = Message;