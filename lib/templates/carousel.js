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
 **/
var Carousel = function (_Template) {
  _inherits(Carousel, _Template);

  function Carousel() {
    _classCallCheck(this, Carousel);

    return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
  }

  _createClass(Carousel, [{
    key: 'addCard',


    /**
     * Add a card to the cards
     * @param {Card} - card
     * @return {Carousel}
     **/
    value: function addCard(card) {
      if (!(card instanceof _card2.default)) {
        throw new Error('addCard argument must be an instance of a Card');
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
          quickReplies = this.quickReplies;


      return {
        type: 'carousel',
        payload: {
          cards: cards,
          quickReplies: quickReplies
        }
      };
    }
  }]);

  return Carousel;
}(_template2.default);

exports.default = Carousel;