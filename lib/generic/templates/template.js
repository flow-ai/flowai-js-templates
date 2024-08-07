"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _quickReply = _interopRequireDefault(require("../components/quickReply"));

var _suggestedAction = _interopRequireDefault(require("../../rbm/components/suggestedAction"));

var _expirationTime = _interopRequireDefault(require("../../rbm/components/expirationTime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Base class for all generic response templates
 * 
 * @category Generic
 * 
 * @property {QuickReply[]} quickReplies - Optional list of {@link QuickReply} components
 * @abstract
 **/
var Template = /*#__PURE__*/function (_BaseTemplate) {
  _inherits(Template, _BaseTemplate);

  var _super = _createSuper(Template);

  function Template() {
    _classCallCheck(this, Template);

    return _super.apply(this, arguments);
  }

  _createClass(Template, [{
    key: "delay",
    get: function get() {
      return this._delay || 0;
    }
    /**
     * Add a {@link QuickReply} to the template
     * @param {QuickReply} quickReply - Required
     **/
    ,
    set:
    /**
     * Define a delay for the response in milliseconds
     * @param {Number} delay - Required
     **/
    function set(delay) {
      if (!(typeof delay === 'number')) {
        throw new Error('Delay must be a number');
      }

      if (delay < 0) {
        throw new Error('Delay must be positive number');
      }

      this._delay = delay;
    }
  }, {
    key: "addQuickReply",
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
    /**
     * Add a {@link SuggestedAction} to the template
     * @param {SuggestedAction} suggestedAction - Required
     **/

  }, {
    key: "addSuggestedAction",
    value: function addSuggestedAction(suggestedAction) {
      if (!(suggestedAction instanceof _suggestedAction.default)) {
        throw new Error('addRBMQuickReply argument must be an instance of a RBMQuickReply');
      }

      if (!this.quickReplies) {
        this.quickReplies = [];
      }

      this.quickReplies.push(suggestedAction);
      return this;
    }
    /**
     * Add a {@link ExpirationTime} to the template
     * @param {ExpirationTime} expirationTime - Required
     **/

  }, {
    key: "addExpirationTime",
    value: function addExpirationTime(expirationTime) {
      if (!(expirationTime instanceof _expirationTime.default)) {
        throw new Error('addExpirationTime argument must be an instance of a ExpirationTime');
      }

      this.expirationTime = expirationTime;
      return this;
    }
  }]);

  return Template;
}(_template.default);

var _default = Template;
exports.default = _default;