'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _button = require('../components/button');

var _button2 = _interopRequireDefault(_button);

var _media = require('../components/media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Template with a short description and buttons to request input from the user.
 * @property {string} title - Main title of the buttons
 * @property {Button[]} buttons - Optional set of buttons
 * @example
 * const buttons = new Buttons("Vintage bikes and more")
 * buttons.addButton(new Button(
 *  label: "View website",
 *  type: "url",
 *  value: "..."
 * ))
 * buttons.addButton(new Button(
 *  label: "Special offers",
 *  type: "postback",
 *  value: "Show me special offers"
 * ))
 **/
var Buttons = function (_Template) {
  _inherits(Buttons, _Template);

  /**
   * @param {string} opts.title - Required
   **/
  function Buttons(title) {
    _classCallCheck(this, Buttons);

    var _this = _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).call(this));

    if (typeof title !== 'string' || !title.length) {
      throw new Error('Title is mandatory');
    }

    _this.title = title;
    return _this;
  }

  /**
   * Add a button to the buttons
   * @param {Button} - button
   * @return {Button}
   **/


  _createClass(Buttons, [{
    key: 'addButton',
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
          buttons = this.buttons,
          quickReplies = this.quickReplies;


      return {
        type: 'buttons',
        payload: {
          title: title,
          buttons: buttons,
          quickReplies: quickReplies
        }
      };
    }
  }]);

  return Buttons;
}(_template2.default);

exports.default = Buttons;