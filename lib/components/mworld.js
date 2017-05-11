'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PropTypes = require('prop-types');
var MworldActions = require('../actions');
var ToggleButton = require('./toggle-button');

var google = require('@google/maps').createClient({
  key: 'AIzaSyAMNqOXzOkodqINPinxEXFyyiG4s3AeZtM'
});

// const debug = require('debug')('mongodb-compass:mworld');

var MworldComponent = function (_React$Component) {
  _inherits(MworldComponent, _React$Component);

  function MworldComponent() {
    _classCallCheck(this, MworldComponent);

    return _possibleConstructorReturn(this, (MworldComponent.__proto__ || Object.getPrototypeOf(MworldComponent)).apply(this, arguments));
  }

  _createClass(MworldComponent, [{
    key: 'onClick',
    value: function onClick() {
      MworldActions.toggleStatus();
    }

    /**
     * Render Mworld component.
     *
     * @returns {React.Component} The rendered component.
     */

  }, {
    key: 'render',
    value: function render() {
      console.log("I'm being initiated");
      return React.createElement(
        'div',
        { className: 'mworld', style: { width: '100%' } },
        React.createElement(
          'h2',
          { className: 'mworld-title' },
          'MworldComponent'
        ),
        React.createElement(
          'p',
          null,
          React.createElement(
            'i',
            null,
            'mworld'
          )
        ),
        React.createElement(
          'p',
          null,
          'The current status is: ',
          React.createElement(
            'code',
            null,
            this.props.status
          )
        ),
        React.createElement(ToggleButton, { onClick: this.onClick }),
        React.createElement(_map2.default, {
          containerElement: React.createElement('div', { style: { height: '100%' } }),
          mapElement: React.createElement('div', { style: { height: '100%' } })
        })
      );
    }
  }]);

  return MworldComponent;
}(React.Component);

MworldComponent.propTypes = {
  status: PropTypes.oneOf(['enabled', 'disabled'])
};

MworldComponent.defaultProps = {
  status: 'enabled'
};

MworldComponent.displayName = 'MworldComponent';

module.exports = MworldComponent;