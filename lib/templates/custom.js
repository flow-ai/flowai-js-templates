'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Template composed with your own data. Use this to create specific UI widgets or components to your app or web ui. Do remmember we cannot convert these type of templates to channels like Messenger.
 * @property {object} data - Data tailored to your use case
 * @example
 * const custom = new Custom({
 *   title: 'Big screen TV',
 *   brand: 'Awesome Elec.',
 *   catId: 35633123322,
 *   prices: [
 *     'EURO': 1800,
 *     'DOLLAR': '2400'
 *   ]
 * })
 * // You can still add quick replies
 * // to these type of componentz
 * custom.addQuickReply(new QuickReply({
 *   label: 'Order now',
 *   value: 'order 35633123322'
 * }))
 **/
var Custom = function (_Template) {
  _inherits(Custom, _Template);

  /**
   * @param {object} data - Required
   **/
  function Custom(data) {
    _classCallCheck(this, Custom);

    var _this = _possibleConstructorReturn(this, (Custom.__proto__ || Object.getPrototypeOf(Custom)).call(this));

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
      throw new Error('Custom data is mandatory');
    }

    _this.data = data;
    return _this;
  }

  _createClass(Custom, [{
    key: 'toJSON',
    value: function toJSON() {
      var data = this.data,
          quickReplies = this.quickReplies;


      return {
        type: 'custom',
        payload: Object.assign(data, {
          quickReplies: quickReplies
        })
      };
    }
  }]);

  return Custom;
}(_template2.default);

exports.default = Custom;