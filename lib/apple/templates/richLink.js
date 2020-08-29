"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../generic/templates/template"));

var _imageAsset = _interopRequireDefault(require("../components/imageAsset"));

var _videoAsset = _interopRequireDefault(require("../components/videoAsset"));

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
 * Enhance the customer's experience by allowing them to preview inline content.
 * 
 * @memberof Apple
 * @category RichLink
 * 
 * @property {string} title - Required title
 * @property {string} url - Required. URL to the linked web page
 * @property {array} assets - Required. List of assets like {@link ImageAsset} or {@link VideoAsset}
 * 
 * @example
 * const richLink = new Apple.RichLink({
 *   title: "Some news website",
 *   url: "https://www.mynewswebsite.corp",
 *   assets: [
 *     new Apple.ImageAsset({
 *       url: "https://source.unsplash.com/random",
 *       mimeType: "image/png"
 *     }),
 *     new Apple.VideoAsset({
 *       url: "https://somevideo",
 *       mimeType: "video/mp4"
 *     })
 *   ]
 * })
 **/
var RichLink = /*#__PURE__*/function (_Template) {
  _inherits(RichLink, _Template);

  var _super = _createSuper(RichLink);

  /**
  * @param {object} opts - Collection of options
  * @param {string} opts.title - Required title
  * @param {string} opts.url - Required. URL to the linked web page
  * @param {array} opts.assets - Required. List of assets like {@link ImageAsset} or {@link VideoAsset}
  **/
  function RichLink(opts) {
    var _this;

    _classCallCheck(this, RichLink);

    _this = _super.call(this);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a RichLink you need to provide at least a title and url");
    }

    var title = opts.title,
        url = opts.url,
        assets = opts.assets;

    if (Array.isArray(assets)) {
      for (var i = 0; i < assets.length; i++) {
        _this.addAsset(assets[i]);
      }
    }

    _this.title = title;
    _this.url = url;
    return _this;
  }
  /**
  * Add an asset to the list of media assets
  * 
  * @param {Asset} - asset
  * 
  * @return {RichLink}
  **/


  _createClass(RichLink, [{
    key: "addAsset",
    value: function addAsset(asset) {
      if (!(asset instanceof _imageAsset.default) && !(asset instanceof _videoAsset.default)) {
        throw new Error('RichLink asset must be an instance of a Apple.ImageAsset or Apple.VideoAsset');
      }

      if (!this.assets) {
        this.assets = [];
      }

      this.assets.push(asset);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title,
          url = this.url,
          assets = this.assets,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'apple_rich_link',
        payload: {
          title: title,
          url: url,
          assets: assets
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return RichLink;
}(_template.default);

var _default = RichLink;
exports.default = _default;