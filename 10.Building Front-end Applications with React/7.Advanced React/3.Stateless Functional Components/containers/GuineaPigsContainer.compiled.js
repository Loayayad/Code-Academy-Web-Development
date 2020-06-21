(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
  "use strict";
  
  /**
   * Uses the react-transform babel plugin
   * to rewrite modules so that all react components are
   * exported.
   *
   * This allows us to access those components and test them.
   *
   * ex:
   *
   * // component.js
   *
   * var MyComponent = React.createClass({});
   *
   * // component-test.js
   *
   * var components = require('../component.js');
   *
   * console.log(components.__ReactComponents.MyComponent);
   *
   */
  
  module.exports = function createExport(_ref) {
    var locals = _ref.locals;
  
  
    return function (ReactClass, componentId) {
  
      if (!locals[0].exports) {
        locals[0].exports = {};
      }
  
      if (!locals[0].exports.__ReactComponents) {
        locals[0].exports.__ReactComponents = [];
      }
  
      locals[0].exports.__ReactComponents.push(ReactClass);
  
      return ReactClass;
    };
  };
  
  },{}],2:[function(require,module,exports){
  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.GuineaPigs = undefined;
  
  var _react = require('react');
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var GuineaPigs = exports.GuineaPigs = function GuineaPigs(props) {
    var src = props.src;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        'Cute Guinea Pigs'
      ),
      _react2.default.createElement('img', { src: src })
    );
  };
  
  },{"react":undefined}],3:[function(require,module,exports){
  'use strict';
  
  var _react2 = require('react');
  
  var _react3 = _interopRequireDefault(_react2);
  
  var _reactTransformComponentExports = require('/home/ccuser/.babelscripts/react-transform-component-exports');
  
  var _reactTransformComponentExports2 = _interopRequireDefault(_reactTransformComponentExports);
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _reactDom = require('react-dom');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _GuineaPigs = require('../components/GuineaPigs');
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _components = {
    GuineaPigsContainer: {
      displayName: 'GuineaPigsContainer'
    }
  };
  
  var _homeCcuserBabelscriptsReactTransformComponentExports2 = (0, _reactTransformComponentExports2.default)({
    filename: '/home/ccuser/workspace/react-102-stateless-functional-components-stateless-functional-component-props-2/containers/GuineaPigsContainer.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
  });
  
  function _wrapComponent(id) {
    return function (Component) {
      return _homeCcuserBabelscriptsReactTransformComponentExports2(Component, id);
    };
  }
  
  var GUINEAPATHS = ['https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-1.jpg', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-2.jpg', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-3.jpg', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-guineapig-4.jpg'];
  
  var GuineaPigsContainer = _wrapComponent('GuineaPigsContainer')(function (_React$Component) {
    _inherits(GuineaPigsContainer, _React$Component);
  
    function GuineaPigsContainer(props) {
      _classCallCheck(this, GuineaPigsContainer);
  
      var _this = _possibleConstructorReturn(this, (GuineaPigsContainer.__proto__ || Object.getPrototypeOf(GuineaPigsContainer)).call(this, props));
  
      _this.state = { currentGP: 0 };
      return _this;
    }
  
    _createClass(GuineaPigsContainer, [{
      key: 'nextGP',
      value: function nextGP() {
        var current = this.state.currentGP;
        var next = ++current % GUINEAPATHS.length;
        this.setState({ currentGP: next });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        this.interval = setInterval(function () {
          _this2.nextGP();
        }, 5000);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        clearInterval(this.interval);
      }
    }, {
      key: 'render',
      value: function render() {
        var src = GUINEAPATHS[this.state.currentGP];
        return _react3.default.createElement(_GuineaPigs.GuineaPigs, { src: src });
      }
    }]);
  
    return GuineaPigsContainer;
  }(_react3.default.Component));
  
  _reactDom2.default.render(_react3.default.createElement(GuineaPigsContainer, null), document.getElementById('app'));
  
  },{"../components/GuineaPigs":2,"/home/ccuser/.babelscripts/react-transform-component-exports":1,"react":undefined,"react-dom":undefined}]},{},[3]);
  