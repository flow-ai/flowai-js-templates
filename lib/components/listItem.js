'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _action = require('./action');

var _action2 = _interopRequireDefault(_action);

var _button = require('./button');

var _button2 = _interopRequireDefault(_button);

var _media = require('./media');

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Item within a List
 * @property {string} title - Title of the list item
 * @property {string} subtitle - Optional subtitle
 * @property {Media} media - Optional Media
 * @property {Button[]} buttons - Optional set of buttons
 * @property {Action} action - Optional Action that is triggered when a user interacts with the list item
 **/
var ListItem = function () {
  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {Media} opts.media - Optional
   * @param {Action} opts.action - Optional
   **/
  function ListItem(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        media = _ref.media,
        action = _ref.action;

    _classCallCheck(this, ListItem);

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('Title is mandatory');
    }

    this.title = title;
    this.subtitle = subtitle || undefined;
    this.media = media || undefined;
    this.action = action || undefined;
  }

  _createClass(ListItem, [{
    key: 'addButton',


    /**
     * Add a button to the list item
     * @param {Button} - button
     * @return {ListItem}
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
          media = this.media,
          action = this.action,
          buttons = this.buttons;


      return {
        title: title,
        subtitle: subtitle,
        media: media,
        action: action,
        buttons: buttons
      };
    }
  }, {
    key: 'media',
    set: function set(media) {
      if (media && !(media instanceof _media2.default)) {
        throw new Error('media must be an instance of Media');
      }

      this._media = media;
    },
    get: function get() {
      return this._media;
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

  return ListItem;
}();

exports.default = ListItem;