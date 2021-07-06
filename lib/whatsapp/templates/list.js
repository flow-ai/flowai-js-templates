"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _listItemSection = _interopRequireDefault(require("../components/listItemSection"));

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
 * Template that displays a set of {@link ListItemSection} components
 * 
 * @category Generic
 * 
 * @property {ListItemSection[]} footer - Set of list items
 * @property {string} body  - Required
 * @property {string} header  - Optional
 * @property {string} buttonText  - Required
 * @property {string} footer  - Optional
 * @example
 * const listItemWA1 = new Templates.WhatsApp.ListItem({
 *             title: "Example title",
 *             description: 'Example subtitle'
 *          })
 * const listItemWA2 = new Templates.WhatsApp.ListItem({
 *             title: "Example title",
 *             description: 'Example subtitle'
 *           })
 * const listItemSection = new Templates.WhatsApp.ListItemSection({
 *             title: "Example section",
 *             rows: [listItemWA1, listItemWA2]
 *           })
 * const listWA = new Templates.WhatsApp.List({body: 'Example body', buttonText: 'Example confirm', sections: [listItemSection]})
 **/
var List = /*#__PURE__*/function (_Template) {
  _inherits(List, _Template);

  var _super = _createSuper(List);

  function List(_ref) {
    var _this;

    var header = _ref.header,
        buttonText = _ref.buttonText,
        body = _ref.body,
        footer = _ref.footer,
        sections = _ref.sections;

    _classCallCheck(this, List);

    _this = _super.call(this);

    if (typeof body !== 'string' || body.length === 0) {
      throw new Error('List body is mandatory');
    }

    if (typeof buttonText !== 'string' || buttonText.length === 0) {
      throw new Error('List buttonText is mandatory');
    }

    if (!sections) {
      throw new Error('List sections argument must be an array of List items');
    }

    for (var i = 0; i < sections.length; i++) {
      if (!(sections[i] instanceof _listItemSection.default)) {
        throw new Error('ListItemSection rows argument must be an array of List items');
      }
    }

    _this.header = header || undefined;
    _this.button = buttonText;
    _this.body = body;
    _this.footer = footer;
    _this.sections = sections;
    return _this;
  }
  /**
   * Add a {@link ListItemSection} to the list of items
   * @param {ListItemSection} - {@link ListItemSection}
   * @return {List}
   **/


  _createClass(List, [{
    key: "addItem",
    value: function addItem(item) {
      if (!(item instanceof _listItemSection.default)) {
        throw new Error('List addItem argument must be an instance of a ListItem');
      }

      this.sections.push(item);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var header = this.header,
          body = this.body,
          footer = this.footer,
          sections = this.sections,
          button = this.button;
      var payload = {
        body: {
          text: body
        },
        action: {
          button: button,
          sections: sections
        },
        type: 'list'
      };

      if (header) {
        payload.header = {
          type: 'text',
          text: header
        };
      }

      if (footer) {
        payload.footer = {
          text: footer
        };
      }

      return {
        type: 'listWA',
        payload: payload
      };
    }
  }, {
    key: "items",
    get: function get() {
      return this.sections;
    }
  }]);

  return List;
}(_template.default);

var _default = List;
exports.default = _default;