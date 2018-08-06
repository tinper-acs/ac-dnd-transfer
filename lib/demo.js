'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return (0, _from2.default)(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; }

var mockData = [];
for (var i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: 'content' + (i + 1),
    description: 'description of content' + (i + 1),
    disabled: i % 3 < 1

  });
}

var targetKeys = mockData.filter(function (item) {
  return +item.key % 3 > 1;
}).map(function (item) {
  return item.key;
});

var Demo = function (_React$Component) {
  _inherits(Demo, _React$Component);

  function Demo() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Demo);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Demo.__proto__ || (0, _getPrototypeOf2.default)(Demo)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      targetKeys: targetKeys,
      selectedKeys: [],
      showModal: false,
      modalSize: ''
    }, _this.handleChange = function (nextTargetKeys, direction, moveKeys) {
      _this.setState({ targetKeys: nextTargetKeys });

      console.log('targetKeys: ', targetKeys);
      console.log('direction: ', direction);
      console.log('moveKeys: ', moveKeys);
    }, _this.handleSelectChange = function (sourceSelectedKeys, targetSelectedKeys) {
      _this.setState({ selectedKeys: [].concat(_toConsumableArray(sourceSelectedKeys), _toConsumableArray(targetSelectedKeys)) });

      console.log('sourceSelectedKeys: ', sourceSelectedKeys);
      console.log('targetSelectedKeys: ', targetSelectedKeys);
    }, _this.handleScroll = function (direction, e) {
      console.log('direction:', direction);
      console.log('target:', e.target);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Demo, [{
    key: 'render',
    value: function render() {
      var state = this.state;

      return _react2.default.createElement(_index2.default, {
        dataSource: mockData,
        titles: ['Source', 'Target'],
        targetKeys: state.targetKeys,
        selectedKeys: state.selectedKeys,
        onChange: this.handleChange,
        onSelectChange: this.handleSelectChange,
        onScroll: this.handleScroll,
        render: function render(item) {
          return item.title;
        }
      });
    }
  }]);

  return Demo;
}(_react2.default.Component);

exports.default = Demo;