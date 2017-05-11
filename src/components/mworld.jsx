const React = require('react');
const PropTypes = require('prop-types');
const MworldActions = require('../actions');
const ToggleButton = require('./toggle-button');
import GMap from "./map";
const google = require('@google/maps').createClient({
  key: 'AIzaSyAMNqOXzOkodqINPinxEXFyyiG4s3AeZtM'
});

// const debug = require('debug')('mongodb-compass:mworld');

class MworldComponent extends React.Component {

  onClick() {
    MworldActions.toggleStatus();
  }

  /**
   * Render Mworld component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    console.log("I'm being initiated");
    return (
      <div className="mworld" style={{ width: '100%' }}>
        <h2 className="mworld-title">MworldComponent</h2>
        <p><i>mworld</i></p>
        <p>The current status is: <code>{this.props.status}</code></p>
        <ToggleButton onClick={this.onClick} />
        <GMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
        />
      </div>

    );
  }
}

MworldComponent.propTypes = {
  status: PropTypes.oneOf(['enabled', 'disabled'])
};

MworldComponent.defaultProps = {
  status: 'enabled'
};

MworldComponent.displayName = 'MworldComponent';

module.exports = MworldComponent;
