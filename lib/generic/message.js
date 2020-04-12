"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./templates/template"));

var _text = _interopRequireDefault(require("./templates/text"));

var _quickReply = _interopRequireDefault(require("./components/quickReply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Representation of a message to a user. Contains a pronounceable fallback message and optional rich template responses.
 * @property {string} fallback - Pronounceable and represents the responses as a whole
 * @property {Template[]} responses - List of rich template responses
 * @example
 * // Create a message without responses
 * // this will create a response
 * // when converted to JSON
 * const message = new Message('Hi there')
 *
 * // This also works for multiple text responses by adding an array of strings
 * const message = new Message(['Hi there', 'How can I help?'])
 **/
var Message =
/*#__PURE__*/
function () {
  /**
   * @param {string} fallback - Required
   * @param {Object} meta - Optional property list with data
   **/
  function Message(fallback, meta) {
    _classCallCheck(this, Message);

    if (typeof fallback !== 'string' && !Array.isArray(fallback) || fallback.length === 0) {
      throw new Error('fallback is mandatory and must be a string or string array');
    }

    if (Array.isArray(fallback)) {
      for (var i = 0; i < fallback.length; i++) {
        if (typeof fallback[i] !== 'string') {
          throw new Error('fallback array argument can only contain strings');
        }
      }
    }

    this.fallback = fallback;

    if (_typeof(meta) === 'object') {
      this.meta = meta;
    }
  }
  /**
   * Add a response
   * @param {Template} - response
   * @param {Number} delay - Optional delay in miliseconds for sending the response
   * @return {Message}
   **/


  _createClass(Message, [{
    key: "addResponse",
    value: function addResponse(response, delay) {
      if (!(response instanceof _template.default)) {
        throw new Error('addResponse argument must be an instance of a Template');
      }

      if (typeof d === 'number') {
        response.delay = delay;
      }

      if (!this.responses) {
        this.responses = [];
      }

      this.responses.push(response);
      return this;
    }
    /**
     * A convienamnce method to add a quick reply to the last response template of a Message
     * @param {QuickReply} quickReply - Required
     *
     * @example
     * const message = new Message("Want a cold beverage?")
     *  .addQuickReply(new QuickReply({
     *    label: 'Yes'
     *  }))
     *  .addQuickReply(new QuickReply({
     *    label: 'No'
     *  }))
     **/

  }, {
    key: "addQuickReply",
    value: function addQuickReply(quickReply) {
      if (!(quickReply instanceof _quickReply.default)) {
        throw new Error('addQuickReply argument must be an instance of a QuickReply');
      }

      var fallback = this.fallback;
      var isFallbackArray = Array.isArray(fallback);

      if (!Array.isArray(this.responses) || !this.responses.length) {
        this.responses = isFallbackArray ? fallback.map(function (text) {
          return new _text.default(text);
        }) : [new _text.default(fallback)];
      }

      this.responses[this.responses.length - 1].addQuickReply(quickReply);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var fallback = this.fallback,
          responses = this.responses,
          meta = this.meta;
      var isFallbackArray = Array.isArray(fallback);
      var parsedFallback = fallback;

      if (isFallbackArray) {
        var combine = ', ';

        for (var i = 0; i < fallback.length; i++) {
          if (/[.!?]$/.test(fallback[i])) {
            combine = ' ';
            break;
          }
        }

        parsedFallback = fallback.join(combine);
      }

      if (!Array.isArray(responses) || !responses.length) {
        return {
          fallback: parsedFallback,
          responses: isFallbackArray ? fallback.map(function (text) {
            return new _text.default(text);
          }) : [new _text.default(fallback)]
        };
      }

      return {
        fallback: parsedFallback,
        responses: responses,
        meta: meta
      };
    }
  }]);

  return Message;
}();

var _default = Message;
exports.default = _default;