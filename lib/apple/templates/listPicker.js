"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _template = _interopRequireDefault(require("../../base/templates/template"));

var _interactiveMessage = _interopRequireDefault(require("../components/interactiveMessage"));

var _listPickerSection = _interopRequireDefault(require("../components/listPickerSection"));

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Allow the customer to choose from a list of items
 * 
 * @memberof Apple
 * @category ListPicker
 * 
 * @property {array} sections - Required 1 or more ListPickerSection objects
 * @property {boolean} multipleSelection - Indicates whether the customer can make multiple selections across sections. Defaults to false
 * @property {InteractiveMessage} receivedMessage - Required. Message bubble that is shown to the customer to open the ListPicker window
 * @property {InteractiveMessage} replyMessage - Required. When the customer’s device receives a picker, the Messages app uses the replyMessage to set the style, content, and images for the reply message bubble that the Messages app displays after the customer makes their selection and returns a reply to the business.
 * @property {object} opts.triggerAction - Required. Trigger Action when items are selected from the list
 * 
 * @example
 * const listPicker = new Apple.ListPicker({
 *   receivedMessage: new Apple.InteractiveMessage({
 *     title: "Select products",
 *     subtitle: "Fresh and straight from the farm",
 *     style: "small"
 *   }),
 *   replyMessage: new Apple.InteractiveMessage({
 *     title: "Selected products",
 *     style: "small"
 *   }),
 *   sections: [
 *     new Apple.ListPickerSection({
 *       title: "Fruit",
 *       items: [
 *         new Apple.ListPickerItem({
 *           title: "Apple",
 *           subtitle: "Red and delicious"
 *         }),
 *         new Apple.ListPickerItem({
 *           title: "Orange",
 *           subtitle: "Vitamin C boost"
 *         })
 *       ]
 *     }),
 *     new Apple.ListPickerSection({
 *       title: "Veggies",
 *       items: [
 *         new Apple.ListPickerItem({
 *           title: "Lettuce",
 *           subtitle: "Crispy greens"
 *         }),
 *         new Apple.ListPickerItem({
 *           title: "Cucumber",
 *           subtitle: "Organic"
 *         })
 *       ]
 *     })
 *   ]
 * })
 **/
var ListPicker = /*#__PURE__*/function (_Template) {
  _inherits(ListPicker, _Template);

  var _super = _createSuper(ListPicker);

  /**
   * @param {object} opts - Collection of options
   * @param {array} opts.sections - An array of ListPickerSection objects 
   * @param {boolean} opts.multipleSelection - Indicates whether the customer can make multiple selections across sections. Defaults to false
   * @param {InteractiveMessage} opts.receivedMessage - Required. Message bubble that is shown to the customer to open the ListPicker window
   * @param {InteractiveMessage} opts.replyMessage - Required. Message bubble that is shown when the customer made a choice
   * @param {object} opts.triggerAction - Required. Trigger Action when items are selected from the list
   **/
  function ListPicker(opts) {
    var _this;

    _classCallCheck(this, ListPicker);

    _this = _super.call(this);

    if (_typeof(opts) !== "object") {
      throw new Error("To create a ListPicker you need to provide at least a title");
    }

    var replyMessage = opts.replyMessage,
        receivedMessage = opts.receivedMessage,
        sections = opts.sections,
        multipleSelection = opts.multipleSelection,
        triggerAction = opts.triggerAction;

    if (!(replyMessage instanceof _interactiveMessage.default)) {
      throw new Error("ListPicker requires a replyMessage of the type InteractiveMessage");
    }

    if (!(receivedMessage instanceof _interactiveMessage.default)) {
      throw new Error("ListPicker requires a receivedMessage of the type InteractiveMessage");
    }

    if (Array.isArray(sections)) {
      for (var i = 0; i < sections.length; i++) {
        _this.addSection(sections[i]);
      }
    }

    if (typeof multipleSelection !== "boolean" && typeof multipleSelection !== "undefined") {
      throw new Error("ListPicker multipleSelection must be boolean value");
    }

    _this.multipleSelection = multipleSelection;
    _this.replyMessage = replyMessage;
    _this.receivedMessage = receivedMessage;
    _this.triggerAction = triggerAction;
    return _this;
  }
  /**
   * Add a section to the sections
   * 
   * @param {ListPickerSection} - section
   * 
   * @return {ListPicker}
   **/


  _createClass(ListPicker, [{
    key: "addSection",
    value: function addSection(section) {
      if (!(section instanceof _listPickerSection.default)) {
        throw new Error('ListPicker addSection argument must be an instance of a Apple.ListPickerSection');
      }

      if (!this.sections) {
        this.sections = [];
      }

      this.sections.push(section);
      return this;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var replyMessage = this.replyMessage,
          receivedMessage = this.receivedMessage,
          multipleSelection = this.multipleSelection,
          sections = this.sections,
          triggerAction = this.triggerAction,
          delay = this.delay,
          fallback = this.fallback;
      return {
        type: 'apple_list_picker',
        payload: {
          replyMessage: replyMessage,
          receivedMessage: receivedMessage,
          multipleSelection: multipleSelection,
          sections: sections,
          triggerAction: triggerAction
        },
        delay: delay || undefined,
        fallback: fallback
      };
    }
  }]);

  return ListPicker;
}(_template.default);

var _default = ListPicker;
exports.default = _default;