"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _suggestion = _interopRequireDefault(require("../components/suggestion"));

var _media = _interopRequireDefault(require("../components/media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Send a related information, {@link GBM.Media} or {@link GBM.Suggestion} components
 * @alias GBM.Card
 * 
 * @memberof GBM
 * @category Templates
 * 
 * @property {string} title - Main title of the card
 * @property {string} description - Optional description
 * @property {GBM.Media} media - Optional {@link GBM.Media}
 * @property {GBM.Suggestion[]} suggestions - Optional set of {@link GBM.Suggestion} components
 * @example
 * const suggestion1 = new GBM.Suggestion({
 *   label: "Label",
 *   type: "url",
 *   url: "https://..."
 * })
 *
 * const suggestion2 = new GBM.Suggestion({
 *   label: "Label",
 *   type: "url",
 *   url: "https://..."
 *  })
 *
 * const card = new GBM.Card({
 *   title: "Awesome title",
 *   description: "Some description",
 *   media: new GBM.Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 * card.addSuggestion(suggestion1)
 * card.addSuggestion(suggestion2)
 **/
var Card = /*#__PURE__*/function (_Template) {
  _inherits(Card, _Template);

  var _super = _createSuper(Card);

  /**
   * @param {object} opts - Collection of options
   * @param {string} opts.title - Optional
   * @param {string} opts.description - Optional
   * @param {GBM.Media} opts.media - Optional {@link GBM.Media}
   **/
  function Card(_ref) {
    var _this;

    var title = _ref.title,
        description = _ref.description,
        media = _ref.media;

    _classCallCheck(this, Card);

    _this = _super.call(this);
    _this.title = title || undefined;
    _this.description = description || undefined;
    _this.media = media || undefined;
    return _this;
  }

  _createClass(Card, [{
    key: "addSuggestion",

    /**
     * Add a suggestion to the card
     * @param {GBM.Suggestion} - suggestion
     * @return {GBM.Card}
     **/
    value: function addSuggestion(suggestion) {
      if (!(suggestion instanceof _suggestion.default)) {
        throw new Error('Card addSuggestion argument must be an instance of a Suggestion');
      }

      if (!this.suggestions) {
        this.suggestions = [];
      }

      this.suggestions.push(suggestion);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          description = this.description,
          media = this.media,
          suggestions = this.suggestions,
          delay = this.delay,
          fallback = this.fallback;

      if (this.isShallow) {
        return {
          title: title,
          description: description,
          media: media,
          suggestions: suggestions
        };
      }

      return {
        type: 'gbm_card',
        payload: {
          title: title,
          description: description,
          media: media,
          suggestions: suggestions
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }, {
    key: "media",
    set: function set(media) {
      if (media && !(media instanceof _media.default)) {
        throw new Error('Card media must be an instance of Media');
      }

      this._media = media;
    },
    get: function get() {
      return this._media;
    }
  }]);

  return Card;
}(_template.default);

var _default = Card;
exports.default = _default;