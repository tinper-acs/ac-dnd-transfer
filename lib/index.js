'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _setPrototypeOf = require('babel-runtime/core-js/object/set-prototype-of');

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _extends = _assign2.default || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; (0, _defineProperty2.default)(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBee = require('tinper-bee');

require('tinper-bee/assets/tinper-bee.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  title: _propTypes2.default.string
};

var AcDndTransfer = function (_Component) {
  _inherits(AcDndTransfer, _Component);

  function AcDndTransfer(props, context) {
    _classCallCheck(this, AcDndTransfer);

    var _this = _possibleConstructorReturn(this, (AcDndTransfer.__proto__ || (0, _getPrototypeOf2.default)(AcDndTransfer)).call(this, props, context));

    _this.state = {
      enterKey: '',
      targetKeys: _this.props.targetKeys || []
    };
    _this.dragEnter = _this.dragEnter.bind(_this);
    _this.dragEnd = _this.dragEnd.bind(_this);
    return _this;
  }

  _createClass(AcDndTransfer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'dragEnter',
    value: function dragEnter(e, key) {
      console.log('enterKey', key);
      this.setState({
        enterKey: key
      });
    }
  }, {
    key: 'dragEnd',
    value: function dragEnd(e, key) {
      var _state = this.state,
          enterKey = _state.enterKey,
          targetKeys = _state.targetKeys;

      var tempTargetKeys = targetKeys.slice();
      var dragKey = tempTargetKeys.findIndex(function (item) {
        return item === key;
      });
      var dragEnterKey = tempTargetKeys.findIndex(function (item) {
        return item === enterKey;
      });
      console.log(dragKey, dragEnterKey);

      var tempObj = tempTargetKeys[dragKey];
      tempTargetKeys[dragKey] = tempTargetKeys[dragEnterKey];
      tempTargetKeys[dragEnterKey] = tempObj;
      this.setState({
        targetKeys: tempTargetKeys
      });
      console.log('dragEnd', key);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var targetKeys = this.state.targetKeys;

      console.log(targetKeys);
      return _react2.default.createElement(_tinperBee.Transfer, _extends({}, this.props, {
        targetKeys: targetKeys,
        render: function render(da) {
          return _react2.default.createElement(
            'span',
            { className: 'item', id: da.key, key: da.key, draggable: 'true', onDragEnd: function onDragEnd(e) {
                return _this2.dragEnd(e, da.key);
              }, onDragStart: _this2.dragStart, onDragEnter: function onDragEnter(e) {
                return _this2.dragEnter(e, da.key);
              } },
            da.title
          );
        }
      }));
    }
  }]);

  return AcDndTransfer;
}(_react.Component);

;

AcDndTransfer.propTypes = propTypes;
exports.default = AcDndTransfer;