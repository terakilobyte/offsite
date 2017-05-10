const MworldComponent = require('./lib/components');
const MworldActions = require('./lib/actions');
const MworldStore = require('./lib/stores');

/**
 * A sample role for the component.
 */
const ROLE = {
  name: 'Offsite',
  component: MworldComponent,
  order: 1
};

/**
 * Activate all the components in the Mworld package.
 */
function activate() {
  // Register the MworldComponent as a role in Compass
  //
  // Available roles are:
  //   - Instance.Tab
  //   - Database.Tab
  //   - Collection.Tab
  //   - CollectionHUD.Item
  //   - Header.Item

  global.hadronApp.appRegistry.registerRole('Collection.Tab', ROLE);
  global.hadronApp.appRegistry.registerAction('Mworld.Actions', MworldActions);
  global.hadronApp.appRegistry.registerStore('Mworld.Store', MworldStore);
}

/**
 * Deactivate all the components in the Mworld package.
 */
function deactivate() {
  global.hadronApp.appRegistry.deregisterRole('Instance.Tab', ROLE);
  global.hadronApp.appRegistry.deregisterAction('Mworld.Actions');
  global.hadronApp.appRegistry.deregisterStore('Mworld.Store');
}

module.exports = MworldComponent;
module.exports.activate = activate;
module.exports.deactivate = deactivate;
