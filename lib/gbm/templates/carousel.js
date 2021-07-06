"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _card = _interopRequireDefault(require("./card"));

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
 * Template that displays a set of {@link GBM.Card} templates
 * @alias GBM.Carousel
 * 
 * @memberof GBM
 * @category Templates
 * 
 * @property {string} cardWidth - The width of the cards in the carousel, SMALL, MEDIUM or CARD_WIDTH_UNSPECIFIED
 * @property {GBM.Card[]} cards - Set of {@link GBM.Card} templates
 * 
 * @example
 * const card1 = new GBM.Card({
 *   title: "Awesome title 1",
 *   description: "Some description 1",
 *   media: new GBM.Media({
 *    fileUrl: "https://..."
 *   })
 * })
 *
 * const card2 = new GBM.Card({
 *   title: "Awesome title 2",
 *   description: "Some description 2",
 *   media: new GBM.Media({
 *    fileUrl: "https://...",
 *   })
 * })
 *
 * const carousel = new GBM.Carousel()
 * carousel.addCard(card1)
 * carousel.addCard(card2)
 *
 * @example
 * // Short hand
 *
 * const carousel = new GBM.Carousel([
 *   new GBM.Card({
 *     title: "Awesome title 1",
 *     description: "Some description 1",
 *     media: new GBM.Media({
 *      fileUrl: "https://..."
 *     })
 *   }),
 *   new GBM.Card({
 *     title: "Awesome title 2",
 *     description: "Some description 2",
 *     media: new GBM.Media({
 *      fileUrl: "https://..."
 *     })
 *   })
 * ])
 **/
var Carousel = /*#__PURE__*/function (_Template) {
  _inherits(Carousel, _Template);

  var _super = _createSuper(Carousel);

  /**
   * @param {object|GBM.Card[]} opts - Collection of options or shorthand for a collection of {@link GBM.Card} templates
   * @param {string} opts.cardWidth - Optional. Width of the cards in the carousel
   * @param {GBM.Card[]} opts.cards - Optional list of {@link GBM.Card} templates
   **/
  function Carousel(opts) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this);

    if (!opts) {
      return _possibleConstructorReturn(_this);
    }

    var cards = Array.isArray(opts) ? opts : Array.isArray(opts.cards) ? opts.cards : [];

    for (var i = 0; i < cards.length; i++) {
      _this.addCard(cards[i]);
    }

    if (opts && opts.cardWidth && Carousel.CardWidth.indexOf(opts.cardWidth)) {
      _this.cardWidth = opts.cardWidth;
    }

    return _this;
  }
  /**
   * Add a {@link GBM.Card} to the list of cards
   * @param {GBM.Card} - Card to add to the carousel
   * @return {GBM.Carousel}
   **/


  _createClass(Carousel, [{
    key: "addCard",
    value: function addCard(card) {
      if (!(card instanceof _card.default)) {
        throw new GBM.Error('Carousel addCard argument must be an instance of a Card');
      }

      if (!this.cards) {
        this.cards = [];
      } // Simple way to hack


      card.isShallow = true;
      this.cards.push(card);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var cards = this.cards,
          cardWidth = this.cardWidth,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'gbm_carousel',
        payload: {
          cards: cards,
          cardWidth: cardWidth
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return Carousel;
}(_template.default);

Carousel.CardWidth = ['CARD_WIDTH_UNSPECIFIED', 'SMALL', 'MEDIUM'];
var _default = Carousel;
exports.default = _default;