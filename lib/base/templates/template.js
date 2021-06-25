"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Base class for all response templates
 * 
 * @alias Base.Template
 * 
 * @category Templates
 * 
 * @abstract
 **/
var Template = /*#__PURE__*/function () {
  function Template() {
    _classCallCheck(this, Template);
  }

  _createClass(Template, [{
    key: "fallback",

    /**
     * Optional fallback speech
     * @param {string} fallback - Required
     **/
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