"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Item within a {@link ListItemSection} template
 * 
 * @category Generic
 * 
 * @property {string} title - Title of the list item
 * @property {string} description - Description
 **/
var ListItem = /*#__PURE__*/function () {
  /**
   * @param {string} opts.title - Required
   * @param {string} opts.description - Required
   **/
  function ListItem(_ref) {
    var title = _ref.title,
        description = _ref.description;

    _classCallCheck(this, ListItem);

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('ListItem title is mandatory');
    }

    if (typeof description !== 'string' || description.length === 0) {
      throw new Error('ListItem description is mandatory');
    }

    this.title = title;
    this.description = description;
    this.id = (0, _v.default)();
  }

  _createClass(ListItem, [{
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          description = this.description,
          id = this.id;
      return {
        title: title,
        description: description,
        id: id
      };
    }
  }]);

  return ListItem;
}();

var _default = ListItem;
exports.default = _default;