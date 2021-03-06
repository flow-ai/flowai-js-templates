"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _listPickerItem = _interopRequireDefault(require("./listPickerItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Component that groups a list of {@link ListPickerItem} objects and is part of a {@link ListPicker}
 * 
 * @memberof Apple
 * @category ListPicker
 * 
 * @property {ListPickerItem[]} items - A list of {@link ListPickerItem} objects 
 * @property {boolean} multipleSelection - Indicates whether the customer can make multiple selections within the section. Defaults to false
 * @property {Number} order - An integer containing the ordinal position for the section
 * @property {string} title - Required title
 **/
var ListPickerSection = /*#__PURE__*/function () {
  /**
   * @param {object} opts - Collection of options
   * @param {ListPickerItem[]} opts.items - An array of {@link ListPickerItem} objects 
   * @param {boolean} opts.multipleSelection - Indicates whether the customer can make multiple selections within the section. Defaults to false
   * @param {Number} opts.order - An integer containing the ordinal position for the section
   * @param {string} opts.title - Required title
   **/
  function ListPickerSection(opts) {
    _classCallCheck(this, ListPickerSection);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a ListPickerSection you at least need a title");
    }

    var items = opts.items,
        multipleSelection = opts.multipleSelection,
        order = opts.order,
        title = opts.title;

    if (order !== undefined && typeof order !== "number") {
      throw new Error("Provided ListPickerSection order must be number");
    }

    if (typeof title !== "string") {
      throw new Error("ListPickerSection title is required");
    }

    if (!title.length) {
      throw new Error("Provided ListPickerSection title is empty");
    }

    if (multipleSelection != undefined && typeof multipleSelection !== "boolean") {
      throw new Error("ListPickerSection multipleSelection must be a boolean, true or false");
    }

    if (Array.isArray(items)) {
      for (var i = 0; i < items.length; i++) {
        this.addItem(items[i]);
      }
    }

    this.order = order || undefined;
    this.title = title || undefined;
    this.multipleSelection = multipleSelection || undefined;
  }
  /**
   * Add a list item to the section
   * 
   * @param {ListPickerItem} - item
   * 
   * @example
   * const section = new Apple.ListPickerSection({
   *   title: "Fruit"
   * })
   * section.addItem(new Apple.ListPickerItem({
   *   title: "Apples"
   * }))
   * section.addItem(new Apple.ListPickerItem({
   *   title: "Oranges"
   * }))
   * 
   * @return {ListPickerSection}
   **/


  _createClass(ListPickerSection, [{
    key: "addItem",
    value: function addItem(item) {
      if (!(item instanceof _listPickerItem.default)) {
        throw new Error('ListPickerSection addItem argument must be an instance of a Apple.ListPickerItem');
      }

      if (!this.items) {
        this.items = [];
      }

      this.items.push(item);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var items = this.items,
          order = this.order,
          title = this.title;
      return {
        items: items,
        order: order,
        title: title
      };
    }
  }]);

  return ListPickerSection;
}();

var _default = ListPickerSection;
exports.default = _default;