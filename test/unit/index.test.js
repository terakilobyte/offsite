const expect = require('chai').expect;
const MworldStore = require('../../lib/stores');

describe('MworldStore', function() {
  beforeEach(function() {
    // reset the store to initial values
    MworldStore.setState(MworldStore.getInitialState());
  });

  it('should have an initial state of {status: \'enabled\'}', function() {
    expect(MworldStore.state.status).to.be.equal('enabled');
  });

  describe('toggleStatus()', function() {
    it('should switch the state to {status: \'disabled\'}', function() {
      MworldStore.toggleStatus();
      expect(MworldStore.state.status).to.be.equal('disabled');
    });

    it('should switch the state back to {status: \'enabled\'} when used a second time', function() {
      MworldStore.toggleStatus();
      MworldStore.toggleStatus();
      expect(MworldStore.state.status).to.be.equal('enabled');
    });
  });
});
