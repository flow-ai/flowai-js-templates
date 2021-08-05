"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

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
 * Send or display a location on a map to a user
 * 
 * @alias WhatsApp.Location
 * 
 * @memberof WhatsApp
 * @category Templates
 * 
 * @property {string} lat - Latitude
 * @property {string} long - Longitude
 * @property {string} name - Name of the location
 * @property {string} address - Address of the location. Only displayed if name is present.
 * @example
 * const location = new WhatsApp.Location({
 *   lat: "37.331860",
 *   long: "-122.030248",
 *   name: "HQ",
 *   address: "Infinite Loop 1"
 * })
 **/
var Location = /*#__PURE__*/function (_Template) {
  _inherits(Location, _Template);

  var _super = _createSuper(Location);

  /**
   * @param {string} opts.lat - Required
   * @param {string} opts.long - Required
   * @param {string} opts.name - Optional
   * @param {string} opts.address - Optional 
   **/
  function Location(_ref) {
    var _this;

    var lat = _ref.lat,
        long = _ref.long,
        name = _ref.name,
        address = _ref.address;

    _classCallCheck(this, Location);

    _this = _super.call(this);

    if (typeof name === 'string' && !name.length) {
      throw new Error('Location name must be a valid string');
    }

    _this.name = name;

    if (typeof address === 'string' && !address.length) {
      throw new Error('Location address must be a valid string');
    }

    _this.address = address;

    if (!lat) {
      throw new Error('Location latitude is mandatory');
    }

    _this.lat = lat;

    if (!long) {
      throw new Error('Location longitude is mandatory');
    }

    _this.long = long;
    return _this;
  }

  _createClass(Location, [{
    key: "toJSON",
    value: function toJSON() {
      var lat = this.lat,
          long = this.long,
          name = this.name,
          address = this.address,
          fallback = this.fallback;
      return {
        type: 'whatsapp_location',
        payload: {
          lat: lat,
          long: long,
          name: name,
          address: address
        },
        fallback: fallback
      };
    }
  }]);

  return Location;
}(_template.default);

var _default = Location;
exports.default = _default;