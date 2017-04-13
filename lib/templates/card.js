'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _action = require('../components/action');

var _action2 = _interopRequireDefault(_action);

var _button = require('../components/button');

var _button2 = _interopRequireDefault(_button);

var _media = require('../components/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Template composed of an image attachment, short description and buttons to request input from the user.
 * @property {string} title - Main title of the card
 * @property {string} subtitle - Optional subtitle
 * @property {Media} image - Optional Media
 * @property {Action} action - Optional Action
 * @property {Button[]} buttons - Optional set of buttons
 * @property {Action} action - Optional Action that is triggered when a user interacts with the card
 **/
var Card = function (_Template) {
  _inherits(Card, _Template);

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {string} opts.image - Optional
   * @param {string} opts.action - Optional
   **/
  function Card(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        image = _ref.image,
        action = _ref.action;

    _classCallCheck(this, Card);

    var _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory');
    }

    _this.title = title;
    _this.subtitle = subtitle || undefined;
    _this.image = image || undefined;
    _this.action = action || undefined;
    return _this;
  }

  _createClass(Card, [{
    key: 'addButton',


    /**
     * Add a button to the card
     * @param {Button} - button
     * @return {Card}
     **/
    value: function addButton(button) {
      if (!(button instanceof _button2.default)) {
        throw new Error('addButton argument must be an instance of a Button');
      }

      if (!this.buttons) {
        this.buttons = [];
      }

      this.buttons.push(button);

      return this;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var title = this.title,
          subtitle = this.subtitle,
          image = this.image,
          action = this.action,
          buttons = this.buttons,
          quickReplies = this.quickReplies;


      if (this.isShallow) {
        return {
          title: title,
          subtitle: subtitle,
          image: image,
          action: action,
          buttons: buttons,
          quickReplies: quickReplies
        };
      }

      return {
        type: 'card',
        payload: {
          title: title,
          subtitle: subtitle,
          image: image,
          action: action,
          buttons: buttons,
          quickReplies: quickReplies
        }
      };
    }
  }, {
    key: 'image',
    set: function set(image) {
      if (image && !(image instanceof _media2.default)) {
        throw new Error('image must be an instance of Media');
      }

      this._image = image;
    },
    get: function get() {
      return this._image;
    }
  }, {
    key: 'action',
    set: function set(action) {
      if (action && !(action instanceof _action2.default)) {
        throw new Error('action must be an instance of Action');
      }

      this._action = action;
    },
    get: function get() {
      return this._action;
    }
  }]);

  return Card;
}(_template2.default);

exports.default = Card;