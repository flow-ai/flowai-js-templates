"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _quickReply = _interopRequireDefault(require("../components/quickReply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Base class of all response templates
 * @property {Number} delay - Optional delay in miliseconds for sending the response
 * @property {QuickReply[]} quickReplies - Optional list of QuickReplies
 * @abstract
 **/
var Template = /*#__PURE__*/function () {
  function Template() {
    _classCallCheck(this, Template);
  }

  _createClass(Template, [{
    key: "addQuickReply",

    /**
     * Add a quick reply to the template
     * @param {QuickReply} quickReply - Required
     **/
    value: function addQuickReply(quickReply) {
      if (!(quickReply instanceof _quickReply.default)) {
        throw new Error('addQuickReply argument must be an instance of a QuickReply');
      }

      if (!this.quickReplies) {
        this.quickReplies = [];
      }

      this.quickReplies.push(quickReply);
      return this;
    }
  }, {
    key: "delay",

    /**
     * Define a delay for the response in miliseconds
     * @param {Number} delay - Required
     **/
    set: function set(delay) {
      if (!(typeof delay === 'number')) {
        throw new Error('Delay must be a number');
      }

      if (delay < 0) {
        throw new Error('Delay must be positive number');
      }

      this._delay = delay;
    },
    get: function get() {
      return this._delay || 0;
    }
    /**
     * Optional fallback speech
     * @param {String} fallback - Required
     **/

  }, {
    key: "fallback",
    set: function set(fallback) {
      if (!(typeof fallback === 'string') && fallback !== undefined) {
        throw new Error('Fallback must be a string or undefined');
      }

      this._fallback = fallback;
    },
    get: function get() {
      return this._fallback || undefined;
    }
  }]);

  return Template;
}();

var _default = Template;
exports.default = _default;