"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenParams = exports.parseParam = exports.Param = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Data related to a Button or Quick Reply
 * @property {string} label - Name of the parameter
 * @property {string} value - Value of the parametet
 * @example
 * // Render a Button that triggers an event with a Param
 * const param = new Param('itemId', '332223323')
 * const button = new Button({
 *  label: 'More info',
 *  type: 'event',
 *  value: 'MORE_INFO',
 *  param
 * })
 * @example
 * // Render a QuickReply that triggers an event with Params
 * const shopId = new Param('shopId', '33211233')
 * const productId = new Param('productId', '123443211')
 * const quickReply = new QuickReply({
 *  label: 'Product details',
 *  type: 'event',
 *  value: 'PRODUCT_DETAILS',
 *  param: [shopId, productId]
 * })
 * @example
 * const image = new Image({
 *   title: "Awesome title",
 *   url: "https://...",
 *   action: new Action({
 *     type: 'event',
 *     value: 'ORDER',
 *     param: new Param('productId', '12e2-22342-aasd2')
 *   })
 * })
 **/
var Param =
/*#__PURE__*/
function () {
  /**
   * @param {string} opts.label - Required
   * @param {string} opts.value - Required
   **/
  function Param(first, second) {
    _classCallCheck(this, Param);

    var label, value;

    if (first && _typeof(first) === 'object') {
      label = first.label;
      value = first.value;
    } else {
      label = first;
      value = second;
    }

    if (!label || typeof label !== 'string' || !label.length) {
      throw new Error('Param label should be a valid string');
    }

    this.label = label;
    this.value = value;
  }

  _createClass(Param, [{
    key: "toJSON",
    value: function toJSON() {
      var label = this.label,
          value = this.value;
      return {
        label: label,
        value: value
      };
    }
  }]);

  return Param;
}();
/**
 * Helper method to convert a list of params
 **/


exports.Param = Param;

var parseParam = function parseParam(param) {
  var params = [];
  var isArray = Array.isArray(param),
      isParam = param instanceof Param,
      isObject = _typeof(param) === 'object';

  if (param && !isParam && !isObject && !isArray) {
    throw new Error('param should be an instance of Param or an array of Param instances');
  }

  if (isParam) {
    params.push(param);
  } else if (isArray) {
    for (var i = 0; i < param.length; i++) {
      if (param[i] instanceof Param) {
        params.push(param[i]);
      } else if (_typeof(param[i]) === 'object') {
        var _param$i = param[i],
            label = _param$i.label,
            value = _param$i.value;

        if (label && value) {
          params.push(new Param({
            label: label,
            value: value
          }));
        }
      } else {
        throw new Error('any item inside a param array should be an instance of Param or an object');
      }
    }
  } else if (isObject && param.label && param.value) {
    params.push(new Param(param));
  }

  return !!params.length ? params : undefined;
};
/**
 * Helper method to convert params into the expected format
 **/


exports.parseParam = parseParam;

var flattenParams = function flattenParams(params) {
  if (!Array.isArray(params)) {
    return;
  }

  var data = {};

  for (var i = 0; i < params.length; i++) {
    var _params$i = params[i],
        label = _params$i.label,
        value = _params$i.value;

    if (!data[label]) {
      data[label] = [];
    }

    data[label].push({
      value: value
    });
  }

  return data;
};

exports.flattenParams = flattenParams;