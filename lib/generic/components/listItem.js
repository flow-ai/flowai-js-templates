"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _action = _interopRequireDefault(require("./action"));

var _button = _interopRequireDefault(require("./button"));

var _media = _interopRequireDefault(require("./media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Item within a List
 * 
 * @category Components
 * 
 * @property {string} title - Title of the list item
 * @property {string} subtitle - Optional subtitle
 * @property {Media} media - Optional Media
 * @property {Button[]} buttons - Optional set of buttons
 * @property {Action} action - Optional Action that is triggered when a user interacts with the list item
 * @property {bool} featured - Optional set this element to be featured in the List (default false)
 **/
var ListItem = /*#__PURE__*/function () {
  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {Media} opts.media - Optional
   * @param {Action} opts.action - Optional
   * @param {bool} opts.featured - Optional
   **/
  function ListItem(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle,
        media = _ref.media,
        action = _ref.action,
        featured = _ref.featured;

    _classCallCheck(this, ListItem);

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('ListItem title is mandatory');
    }

    this.title = title;
    this.subtitle = subtitle || undefined;
    this.media = media || undefined;
    this.action = action || undefined;
    this.featured = featured || undefined;
  }

  _createClass(ListItem, [{
    key: "addButton",

    /**
     * Add a button to the list item
     * @param {Button} - button
     * @return {ListItem}
     **/
    value: function addButton(button) {
      if (!(button instanceof _button.default)) {
        throw new Error('ListItem addButton argument must be an instance of a Button');
      }

      if (!this.buttons) {
        this.buttons = [];
      }

      this.buttons.push(button);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          subtitle = this.subtitle,
          media = this.media,
          action = this.action,
          buttons = this.buttons,
          featured = this.featured;
      return {
        title: title,
        subtitle: subtitle,
        media: media,
        action: action,
        buttons: buttons,
        featured: featured
      };
    }
  }, {
    key: "media",
    set: function set(media) {
      if (media && !(media instanceof _media.default)) {
        throw new Error('ListItem media must be an instance of Media');
      }

      this._media = media;
    },
    get: function get() {
      return this._media;
    }
  }, {
    key: "action",
    set: function set(action) {
      if (action && !(action instanceof _action.default)) {
        throw new Error('ListItem action must be an instance of Action');
      }

      this._action = action;
    },
    get: function get() {
      return this._action;
    }
  }]);

  return ListItem;
}();

var _default = ListItem;
exports.default = _default;