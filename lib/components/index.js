'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var _require = require('hadron-react-components'),
    StoreConnector = _require.StoreConnector;

var MworldComponent = require('./mworld');
var Store = require('../stores');
var Actions = require('../actions');

// const debug = require('debug')('mongodb-compass:mworld:index');

var ConnectedMworldComponent = function (_React$Component) {
  _inherits(ConnectedMworldComponent, _React$Component);

  function ConnectedMworldComponent() {
    _classCallCheck(this, ConnectedMworldComponent);

    return _possibleConstructorReturn(this, (ConnectedMworldComponent.__proto__ || Object.getPrototypeOf(ConnectedMworldComponent)).apply(this, arguments));
  }

  _createClass(ConnectedMworldComponent, [{
    key: 'render',

    /**
     * Connect MworldComponent to store and render.
     *
     * @returns {React.Component} The rendered component.
     */
    value: function render() {
      return React.createElement(
        StoreConnector,
        { store: Store },
        React.createElement(MworldComponent, _extends({ actions: Actions }, this.props))
      );
    }
  }]);

  return ConnectedMworldComponent;
}(React.Component);

ConnectedMworldComponent.displayName = 'ConnectedMworldComponent';

module.exports = ConnectedMworldComponent;