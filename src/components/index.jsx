const React = require('react');
const { StoreConnector } = require('hadron-react-components');
const MworldComponent = require('./mworld');
const Store = require('../stores');
const Actions = require('../actions');

// const debug = require('debug')('mongodb-compass:mworld:index');

class ConnectedMworldComponent extends React.Component {
  /**
   * Connect MworldComponent to store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <StoreConnector store={Store}>
        <MworldComponent actions={Actions} {...this.props} />
      </StoreConnector>
    );
  }
}

ConnectedMworldComponent.displayName = 'ConnectedMworldComponent';

module.exports = ConnectedMworldComponent;
