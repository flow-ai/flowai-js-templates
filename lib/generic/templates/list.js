"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

var _listItem = _interopRequireDefault(require("../components/listItem"));

var _button = _interopRequireDefault(require("../components/button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Template that displays a set of list items
 * @property {ListItem[]} items - Set of list items
 * @example
 * const item1 = new ListItem({
 *   title: "40\" LED TV",
 *   subtitle: "Crystal clear screen",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   }),
 *   action: new Action({
 *     type: 'webview',
 *     value: 'https://..'
 *   })
 * })
 *
 * const item2 = new ListItem({
 *   title: "50\" LED TV",
 *   subtitle: "Big, bad and bold",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   }),
 *   action: new Action({
 *     type: 'webview',
 *     value: 'https://..'
 *   })
 * })
 *
 * const list = new List()
 * list.addItem(item1)
 * list.addItem(item2)
 **/
var List =
/*#__PURE__*/
function (_Template) {
  _inherits(List, _Template);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: "addItem",

    /**
     * Add a item to the items
     * @param {ListItem} - item
     * @return {List}
     **/
    value: function addItem(item) {
      if (!(item instanceof _listItem.default)) {
        throw new Error('List addListItem argument must be an instance of a ListItem');
      }

      if (item.featured) {
        this.items.splice(0, 0, item);
      } else {
        this.items.push(item);
      }

      return this;
    }
  }, {
    key: "addButton",

    /**
     * Add a button to the list item
     * @param {Button} - button
     * @return {ListItem}
     **/
    value: function addButton(button) {
      if (!(button instanceof _button.default)) {
        throw new Error('List addButton argument must be an instance of a Button');
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
      var items = this.items,
          buttons = this.buttons,
          quickReplies = this.quickReplies,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'list',
        payload: {
          items: items,
          buttons: buttons,
          quickReplies: quickReplies
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }, {
    key: "items",
    get: function get() {
      if (!this._items) {
        this._items = [];
      }

      this._items = this._items.sort(function (a, b) {
        if (a.featured && !b.featured) {
          return -1;
        }

        if (!a.featured && b.featured) {
          return 1;
        }

        return 0;
      });
      return this._items;
    }
  }]);

  return List;
}(_template.default);

var _default = List;
exports.default = _default;