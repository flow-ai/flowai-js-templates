"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Component that represents a selectable item inside a {@link ListPickerSection}
 * 
 * @memberof Apple
 * @category ListPicker
 * 
 * @property {string} identifier - Field identifying the item
 * @property {string} image - Optional URL to a 30x30 image
 * @property {number} order - Optional integer representing the ordinal position for the item
 * @property {string} style - Optional item style. Defaults to default
 * @property {string} title - Required title
 * @property {string} subtitle - Optional subtitle
 **/
var ListPickerItem = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.identifier - Optional Unique identifier
   * @param {string} opts.image - Optional URL to a 30x30 image
   * @param {Number} opts.order - Optional integer representing the ordinal position for the item
   * @param {string} opts.style - Optional item style. Defaults to default
   * @param {string} opts.title - Required title
   * @param {string} opts.subtitle - Optional subtitle
   **/
  function ListPickerItem(opts) {
    _classCallCheck(this, ListPickerItem);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a ListPickerItem you at least need a title");
    }

    var identifier = opts.identifier,
        image = opts.image,
        order = opts.order,
        style = opts.style,
        title = opts.title,
        subtitle = opts.subtitle;

    if (typeof identifier !== "undefined" && typeof identifier !== "string") {
      throw new Error("Provided ListPickerItem identifier must be unique string");
    }

    if (order !== undefined && typeof order !== "number") {
      throw new Error("Provided ListPickerItem order must be number");
    }

    if (typeof title !== "string") {
      throw new Error("ListPickerItem title is required");
    }

    if (!title.length) {
      throw new Error("Provided ListPickerItem title is empty");
    }

    this.identifier = identifier || Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.image = image || undefined;
    this.order = order || undefined;
    this.style = style || undefined;
    this.title = title || undefined;
    this.subtitle = subtitle || undefined;
  }

  _createClass(ListPickerItem, [{
    key: "toJSON",
    value: function toJSON() {
      var identifier = this.identifier,
          image = this.image,
          order = this.order,
          style = this.style,
          title = this.title,
          subtitle = this.subtitle;
      return {
        identifier: identifier,
        image: image,
        order: order,
        style: style,
        title: title,
        subtitle: subtitle
      };
    }
  }]);

  return ListPickerItem;
}();

var _default = ListPickerItem;
exports.default = _default;