'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Template that displays a set of cards
 * @property {Card[]} cards - Set of cards
 * @example
 * const card1 = new Card({
 *   title: "Awesome title 1",
 *   subtitle: "Some subtitle 1",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const card2 = new Card({
 *   title: "Awesome title 2",
 *   subtitle: "Some subtitle 2",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const carousel = new Carousel()
 * carousel.addCard(card1)
 * carousel.addCard(card2)
 *
 * @example
 * // Short hand
 * const card1 = new Card({
 *   title: "Awesome title 1",
 *   subtitle: "Some subtitle 1",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const card2 = new Card({
 *   title: "Awesome title 2",
 *   subtitle: "Some subtitle 2",
 *   media: new Media({
 *    url: "https://...",
 *    type: "image"
 *   })
 * })
 *
 * const carousel = new Carousel([card1, card2])
 **/
var Carousel = function (_Template) {
  _inherits(Carousel, _Template);

  /**
   * @param {Array} cards - Optional
   **/
  function Carousel(cards) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));

    if (Array.isArray(cards)) {
      for (var i = 0; i < cards.length; i++) {
        _this.addCard(cards[i]);
      }
    }
    return _this;
  }

  /**
   * Add a card to the cards
   * @param {Card} - card
   * @return {Carousel}
   **/


  _createClass(Carousel, [{
    key: 'addCard',
    value: function addCard(card) {
      if (!(card instanceof _card2.default)) {
        throw new Error('Carousel addCard argument must be an instance of a Card');
      }

      if (!this.cards) {
        this.cards = [];
      }

      // Simple way to hack
      card.isShallow = true;

      this.cards.push(card);

      return this;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var cards = this.cards,
          quickReplies = this.quickReplies,
          delay = this.delay,
          fallback = this.fallback;


      return {
        type: 'carousel',
        payload: {
          cards: cards,
          quickReplies: quickReplies
        },
        delay: delay,
        fallback: fallback
      };
    }
  }]);

  return Carousel;
}(_template2.default);

exports.default = Carousel;