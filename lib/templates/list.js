'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

var _listItem = require('../components/listItem');

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Template that displays a set of list items
 * @property {ListItem[]} items - Set of list items
 **/
var List = function (_Template) {
  _inherits(List, _Template);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'addItem',


    /**
     * Add a item to the items
     * @param {ListItem} - item
     * @return {List}
     **/
    value: function addItem(item) {
      if (!(item instanceof _listItem2.default)) {
        throw new Error('addListItem argument must be an instance of a ListItem');
      }

      if (!this.items) {
        this.items = [];
      }

      this.items.push(item);

      return this;
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var items = this.items,
          quickReplies = this.quickReplies;


      return {
        type: 'list',
        payload: {
          items: items,
          quickReplies: quickReplies
        }
      };
    }
  }]);

  return List;
}(_template2.default);

exports.default = List;