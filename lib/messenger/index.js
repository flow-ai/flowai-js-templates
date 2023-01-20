"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _otn = _interopRequireDefault(require("./templates/otn"));

var _products = _interopRequireDefault(require("./templates/products"));

var _receipt = _interopRequireDefault(require("./templates/receipt"));

var _publicReply = _interopRequireDefault(require("./templates/publicReply"));

var _address = _interopRequireDefault(require("./components/receipt/address"));

var _adjustment = _interopRequireDefault(require("./components/receipt/adjustment"));

var _element = _interopRequireDefault(require("./components/receipt/element"));

var _summary = _interopRequireDefault(require("./components/receipt/summary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  OTN: _otn.default,
  Products: _products.default,
  Receipt: _receipt.default,
  PublicFbReply: _publicReply.default,
  ReceiptAddress: _address.default,
  ReceiptAdjustment: _adjustment.default,
  ReceiptElement: _element.default,
  ReceiptSummary: _summary.default
};
exports.default = _default;