"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../generic/templates/template"));

var _action = _interopRequireDefault(require("../../generic/components/action"));

var _button = _interopRequireDefault(require("../../generic/components/button"));

var _button2 = _interopRequireDefault(require("../components/button"));

var _media = _interopRequireDefault(require("../components/media"));

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
 * A RBM template that can be a combination of a {@link Media} attachment, short description or {@link Button} components to request input from a user.
 * 
 * @category RBM
 * 
 * @property {string} title - Main title of the card
 * @property {string} subtitle - Optional subtitle
 * @property {Media} media - Optional {@link Media}
 * @property {string} cardOrientation - Required
 * @property {string} thumbnailImageAlignment - Required for horizontal orientation 
 * @property {Action} action - Optional {@link Action}
 * @property {Button[]} buttons - Optional set of {@link Button} components
 * @property {Action} action - Optional Action that is triggered when a user interacts with the card
 * @example
 * const button1 = new Button({
 *   label: "Label",
 *   type: "url",
 *   value: "https://..."
 * })
 *
 * const button2 = new Button({
 *   label: "Label",
 *   type: "url",
 *   value: "https://..."
 *  })
 *
 * const rbm_card_vr = new Card({
 *   title: "Awesome title",
 *   subtitle: "Some subtitle",
 *   cardOrientation: "VERTICAL" 
 *   media: new Media({
 *    url: "https://...",
 *    type: "image",
 *    height: "TALL"
 *   })
 * })
 * card.addButton(button1)
 * card.addButton(button2)
 * 
 * const rbm_card_hr = new Card({
 *   title: "Awesome title",
 *   subtitle: "Some subtitle",
 *   cardOrientation: "HORIZONTAL",
 *   thumbnailImageAlignment: "LEFT", 
 *   media: new Media({
 *    url: "https://...",
 *    type: "image",
 *    height: "TALL"
 *   })
 * })
 * card.addButton(button1)
 * card.addButton(button2)
 **/
var Card = /*#__PURE__*/function (_Template) {
  _inherits(Card, _Template);

  var _super = _createSuper(Card);

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.subtitle - Optional
   * @param {Media} opts.media - Optional {@link Media}
   * @param {string} opts.cardOrientation - Required
   * @param {string} opts.thumbnailImageAlignment - Required for horizontal orientation
   * @param {Action} opts.action - Optional {@link Action}
   **/
  function Card(_ref) {
    var _this;

    var title = _ref.title,
        subtitle = _ref.subtitle,
        media = _ref.media,
        cardOrientation = _ref.cardOrientation,
        thumbnailImageAlignment = _ref.thumbnailImageAlignment,
        action = _ref.action;

    _classCallCheck(this, Card);

    _this = _super.call(this);

    if (typeof title !== 'string' || !title.length) {
      throw new Error('Card title is mandatory');
    }

    if (typeof cardOrientation !== 'string' || !cardOrientation.length) {
      throw new Error('Card orientation is mandatory');
    }

    if (cardOrientation === 'HORIZONTAL' && (typeof thumbnailImageAlignment !== 'string' || !thumbnailImageAlignment.length)) {
      throw new Error('Thumbnail alignment is mandatory for horizontal orientation');
    }

    _this.title = title;
    _this.subtitle = subtitle || undefined;
    _this.media = media || undefined;
    _this.cardOrientation = cardOrientation;
    _this.thumbnailImageAlignment = thumbnailImageAlignment || undefined;
    _this.action = action || undefined;
    return _this;
  }

  _createClass(Card, [{
    key: "media",
    get: function get() {
      return this._media;
    },
    set: function set(media) {
      if (media && !(media instanceof _media.default)) {
        throw new Error('Card media must be an instance of Media');
      }

      this._media = media;
    }
  }, {
    key: "action",
    get: function get() {
      return this._action;
    }
    /**
     * Add a button to the card
     * @param {Button} - button
     * @return {Card}
     **/
    ,
    set: function set(action) {
      if (action && !(action instanceof _action.default)) {
        throw new Error('Card action must be an instance of Action');
      }

      this._action = action;
    }
  }, {
    key: "addButton",
    value: function addButton(button) {
      if (!(button instanceof _button.default)) {
        throw new Error('Card addButton argument must be an instance of a Button');
      }

      if (!this.buttons) {
        this.buttons = [];
      }

      this.buttons.push(button);
      return this;
    }
    /**
    * Add a RBM type button to the card
    * @param {RBMButton} - button
    * @return {Card}
    **/

  }, {
    key: "addRBMButton",
    value: function addRBMButton(button) {
      if (!(button instanceof _button2.default)) {
        throw new Error('Card addRBMButton argument must be an instance of a RBM Button');
      }

      if (!this.buttons) {
        this.buttons = [];
      }

      this.buttons.push(button);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          subtitle = this.subtitle,
          media = this.media,
          cardOrientation = this.cardOrientation,
          thumbnailImageAlignment = this.thumbnailImageAlignment,
          action = this.action,
          buttons = this.buttons,
          quickReplies = this.quickReplies,
          delay = this.delay,
          fallback = this.fallback;

      if (this.isShallow) {
        return {
          title: title,
          subtitle: subtitle,
          media: media,
          cardOrientation: cardOrientation,
          thumbnailImageAlignment: thumbnailImageAlignment,
          action: action,
          buttons: buttons,
          quickReplies: quickReplies
        };
      }

      return {
        type: 'rbm_card',
        payload: {
          title: title,
          subtitle: subtitle,
          media: media,
          cardOrientation: cardOrientation,
          thumbnailImageAlignment: thumbnailImageAlignment,
          action: action,
          buttons: buttons,
          quickReplies: quickReplies
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return Card;
}(_template.default);

var _default = Card;
exports.default = _default;