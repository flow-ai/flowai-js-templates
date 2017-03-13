'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _quickReply = require('../components/quickReply');

var _quickReply2 = _interopRequireDefault(_quickReply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Base class of all response templates
 * @property {QuickReply[]} quickReplies - Optional list of QuickReplies
 * @abstract
 **/
var Template = function () {
  function Template() {
    _classCallCheck(this, Template);
  }

  _createClass(Template, [{
    key: 'addQuickReply',


    /**
     * Add a quick reply to the template
     * @param {QuickReply} quickReply - Required
     **/
    value: function addQuickReply(quickReply) {
      if (!(quickReply instanceof _quickReply2.default)) {
        throw new Error('addQuickReply argument must be an instance of a QuickReply');
      }

      if (!this.quickReplies) {
        this.quickReplies = [];
      }
      this.quickReplies.push(quickReply);
    }
  }]);

  return Template;
}();

exports.default = Template;