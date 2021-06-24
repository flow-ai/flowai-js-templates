"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _listItem = _interopRequireDefault(require("./listItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Item within a {@link List} template
 * 
 * @category Generic
 * 
 * @property {string} title - Title of the list item
 * @property {string} rows - rows of list items
 **/
var ListItemSection = /*#__PURE__*/function () {
  /**
   * @param {string} opts.title - Required
   * @param {string} opts.rows - Required
   **/
  function ListItemSection(_ref) {
    var title = _ref.title,
        rows = _ref.rows;

    _classCallCheck(this, ListItemSection);

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('ListItemSection title is mandatory');
    }

    if (!rows || !rows.length) {
      throw new Error('ListItemSection rows argument must be an array of List items');
    }

    for (var i = 0; i < rows.length; i++) {
      if (!(rows[i] instanceof _listItem.default)) {
        throw new Error('ListItemSection rows argument must be an array of List items');
      }
    }

    this.title = title;
    this.items = rows;
  }
  /**
   * Add a {@link ListItem} to the list of items
   * @param {ListItem} - {@link ListItem}
   * @return {List}
   **/


  _createClass(ListItemSection, [{
    key: "addItem",
    value: function addItem(row) {
      if (!(row instanceof _listItem.default)) {
        throw new Error('List addItem argument must be an instance of a ListItem');
      }

      this.items.push(row);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          items = this.items;
      return {
        title: title,
        items: items
      };
    }
  }, {
    key: "rows",
    get: function get() {
      return this.items;
    }
  }]);

  return ListItemSection;
}();

var _default = ListItemSection;
exports.default = _default;