'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./templates/template');

var _template2 = _interopRequireDefault(_template);

var _text = require('./templates/text');

var _text2 = _interopRequireDefault(_text);

var _quickReply = require('./components/quickReply');

var _quickReply2 = _interopRequireDefault(_quickReply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var Message = function () {

  /**
   * @param {string} fallback - Required
   **/
  function Message(fallback) {
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
  }

  /**
   * Add a response
   * @param {Template} - response
   * @param {Number} delay - Optional delay in miliseconds for sending the response
   * @return {Message}
   **/


  _createClass(Message, [{
    key: 'addResponse',
    value: function addResponse(response, delay) {
      if (!(response instanceof _template2.default)) {
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
    key: 'addQuickReply',
    value: function addQuickReply(quickReply) {
      if (!(quickReply instanceof _quickReply2.default)) {
        throw new Error('addQuickReply argument must be an instance of a QuickReply');
      }

      var fallback = this.fallback;


      var isFallbackArray = Array.isArray(fallback);

      if (!Array.isArray(this.responses) || !this.responses.length) {
        this.responses = isFallbackArray ? fallback.map(function (text) {
          return new _text2.default(text);
        }) : [new _text2.default(fallback)];
      }

      this.responses[this.responses.length - 1].addQuickReply(quickReply);

      return this;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var fallback = this.fallback,
          responses = this.responses;


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
            return new _text2.default(text);
          }) : [new _text2.default(fallback)]
        };
      }

      return {
        fallback: parsedFallback,
        responses: responses
      };
    }
  }]);

  return Message;
}();

exports.default = Message;