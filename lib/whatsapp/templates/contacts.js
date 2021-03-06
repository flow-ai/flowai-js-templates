"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

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
 * Send one ore more {@link WhatsApp.Contact} to a user.
 * 
 * @alias WhatsApp.Contacts
 * 
 * @category WhatsApp
 * 
 * @property {WhatsApp.Contact[]} contacts - One ore more contacts
 * 
 * @example
 * const contacts = new WhatsApp.Contacts([
 *   new WhatsApp.Contact({
 *     name: new WhatsApp.Name({
 *       formattedName: "Jane Doo",
 *       firstName: "Jane",
 *       lastName: "Doo",
 *       middleName: "Van"
 *     }),
 *     birthday: "2000-08-18",
 *     organization: new WhatsApp.Organization({
 *       company: "WhatsApp",
 *       department: "Design",
 *       title: "Manager"
 *     }),
 *     addresses: [
 *       new WhatsApp.Address({
 *         type: 'HOME',
 *         street: "1 Hacker Way",
 *         city: "Menlo Park",
 *         zip: "94025",
 *         state: "CA",
 *         country: "United States",
 *         countryCode: "US"
 *       })
 *     ],
 *     emails: [
 *       new WhatsApp.EmailAddress({
 *         type: 'WORK',
 *         email: "email@some.fake.org"
 *       })
 *     ],
 *     phones: [
 *       new WhatsApp.PhoneNumber({
 *         type: 'WORK',
 *         phone: "+1 (940) 555-1234"
 *       })
 *     ],
 *     urls: [
 *       new WhatsApp.WebsiteAddress({
 *         type: 'WORK',
 *         url: "https://www.some.fake.org"
 *       })
 *     ]
 *   })
 * ])
 **/
var Contacts = /*#__PURE__*/function (_Template) {
  _inherits(Contacts, _Template);

  var _super = _createSuper(Contacts);

  /**
   * @param {WhatsApp.Contact[]} contacts - Required
   **/
  function Contacts(contacts) {
    var _this;

    _classCallCheck(this, Contacts);

    _this = _super.call(this);

    if (!Array.isArray(contacts) || !contacts.length) {
      throw new Error('Contacts requires at least one WhatsApp.Contact');
    }

    _this.contacts = contacts;
    return _this;
  }

  _createClass(Contacts, [{
    key: "toJSON",
    value: function toJSON() {
      var contacts = this.contacts;
      return {
        type: 'whatsapp_contacts',
        payload: {
          contacts: contacts
        }
      };
    }
  }]);

  return Contacts;
}(_template.default);

var _default = Contacts;
exports.default = _default;