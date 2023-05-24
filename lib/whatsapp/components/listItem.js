"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nanoid = require("nanoid");

var _param = require("../../base/components/param");

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
   * @param {string} opts.id - Optional, id of the button. If not passed will be automatically generated
   **/
  function ListItem(_ref) {
    var title = _ref.title,
        description = _ref.description,
        postbackType = _ref.postbackType,
        postbackValue = _ref.postbackValue,
        params = _ref.params,
        param = _ref.param,
        id = _ref.id;

    _classCallCheck(this, ListItem);

    if (typeof title !== 'string' || title.length === 0) {
      throw new Error('ListItem title is mandatory');
    }

    if (typeof description !== 'string' || description.length === 0) {
      throw new Error('ListItem description is mandatory');
    }

    this.id = id;

    if (!this.id) {
      this.id = "b".concat((0, _nanoid.nanoid)(8));
    }

    this.title = title;
    this.description = description;
    this.postbackType = postbackType;
    this.postbackValue = postbackValue;
    this.params = (0, _param.parseParam)(param || params);
  }

  _createClass(ListItem, [{
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          description = this.description,
          postbackType = this.postbackType,
          postbackValue = this.postbackValue,
          params = this.params,
          id = this.id;
      return {
        title: title,
        description: description,
        postbackType: postbackType,
        postbackValue: postbackValue,
        params: (0, _param.flattenParams)(params),
        id: id
      };
    }
  }]);

  return ListItem;
}();

var _default = ListItem;
exports.default = _default;