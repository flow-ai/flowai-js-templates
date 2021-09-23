"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("./template"));

var _action = _interopRequireDefault(require("../components/action"));

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
 * Send or display a location on a map to a user. Optionally add an {@link Action} to perform when the user interacts with the location. Note: only supported on some channels.
 * 
 * @category Generic
 * 
 * @property {string} title - Describes the location
 * @property {string} lat - Latitude
 * @property {string} long - Longitude
 * @property {Action} action - Optional {@link Action}
 * @example
 * const location = new Location({
 *   title: "Infinite Loop 1",
 *   lat: "37.331860",
 *   long: "-122.030248",
 *   action: new Action({
 *     type: 'url',
 *     value: 'https://...'
 *   })
 * })
 **/
var Location = /*#__PURE__*/function (_Template) {
  _inherits(Location, _Template);

  var _super = _createSuper(Location);

  /**
   * @param {string} opts.title - Required
   * @param {string} opts.lat - Required
   * @param {string} opts.long - Required
   * @param {string} opts.action - Optional
   **/
  function Location(_ref) {
    var _this;

    var title = _ref.title,
        lat = _ref.lat,
        long = _ref.long,
        action = _ref.action;

    _classCallCheck(this, Location);

    _this = _super.call(this);

    if (typeof title !== 'string' || !title.length) {
      throw new Error('Location title is mandatory');
    }

    _this.title = title;

    if (!lat) {
      throw new Error('Location latitude is mandatory');
    }

    _this.lat = lat;

    if (!long) {
      throw new Error('Location longitude is mandatory');
    }

    _this.long = long;
    _this.action = action || undefined;
    return _this;
  }

  _createClass(Location, [{
    key: "action",
    get: function get() {
      return this._action;
    },
    set: function set(action) {
      if (action && !(action instanceof _action.default)) {
        throw new Error('Location action must be an instance of Action');
      }

      this._action = action;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var title = this.title.trimRight(),
          lat = this.lat.trimRight(),
          long = this.long.trimRight(),
          action = this.action,
          quickReplies = this.quickReplies,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'location',
        payload: {
          title: title,
          lat: lat,
          long: long,
          action: action,
          quickReplies: quickReplies
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return Location;
}(_template.default);

var _default = Location;
exports.default = _default;