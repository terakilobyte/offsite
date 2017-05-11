const Reflux = require('reflux');
const MworldActions = require('../actions');
const StateMixin = require('reflux-state-mixin');

const debug = require('debug')('mongodb-compass:stores:mworld');

let gdataService

function loadGoogleMapScript(done) {
  const script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp';
  script.onerror = function() {
    debug('Error ocurred while loading Google Map script.');
  };
  script.onload = function() {
    debug('Loaded Google Map!!!');
  };
  document.getElementsByTagName('head')[0].appendChild(script);
}

/**
 * Mworld store.
 */
const MworldStore = Reflux.createStore({
  /**
   * adds a state to the store, similar to React.Component's state
   * @see https://github.com/yonatanmn/Super-Simple-Flux#reflux-state-mixin
   *
   * If you call `this.setState({...})` this will cause the store to trigger
   * and push down its state as props to connected components.
   */
  mixins: [StateMixin.store],

  /**
   * listen to all actions defined in ../actions/index.jsx
   */
  listenables: MworldActions,

  /**
   * Initialize everything that is not part of the store's state.
   */
  init() {
    debug("initing google map");
    loadGoogleMapScript();
  },

  /**
   * This method is called when all plugins are activated. You can register
   * listeners to other plugins' stores here, e.g.
   *
   * appRegistry.getStore('OtherPlugin.Store').listen(this.otherStoreChanged.bind(this));
   *
   * If this plugin does not depend on other stores, you can delete the method.
   *
   * @param {Object} appRegistry   app registry containing all stores and components
   */
  onActivated(appRegistry) {
    appRegistry.getStore('Explain.Store').listen(this.handleQueryStoreChange.bind(this))
  },

  /**
   * This method is called when the data service is finished connecting. You
   * receive either an error or the connected data service object, and if the
   * connection was successful you can now make calls to the database, e.g.
   *
   * dataService.command('admin', {connectionStatus: 1}, this.handleStatus.bind(this));
   *
   * If this plugin does not need to talk to the database, you can delete this
   * method.
   *
   * @param {Object} error         the error object if connection was unsuccessful
   * @param {Object} dataService   the dataService object if connection was successful
   *
   */
  onConnected(error, dataService) {
  },

  /**
   * Initialize the Mworld store state. The returned object must
   * contain all keys that you might want to modify with this.setState().
   *
   * @return {Object} initial store state.
   */
  getInitialState() {
    return {
      status: 'enabled',
      queryStore: {}
    };
  },

  handleQueryStoreChange(state) {
    debug(arguments)
    debug(state)
    debug(this.state)
    this.setState({ queryStore: state })
  },

  /**
   * handlers for each action defined in ../actions/index.jsx, for example:
   */
  toggleStatus() {
    this.setState({
      status: this.state.status === 'enabled' ? 'disabled' : 'enabled'
    });
  },

  /**
   * log changes to the store as debug messages.
   * @param  {Object} prevState   previous state.
   */
  storeDidUpdate(prevState) {
    debug('Mworld store changed from', prevState, 'to', this.state);
  }
});

module.exports = MworldStore;
