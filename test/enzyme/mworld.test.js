/* eslint no-unused-expressions: 0 */
const chai = require('chai');
const chaiEnzyme = require('chai-enzyme');
const expect = chai.expect;
const React = require('react');

const mount = require('enzyme').mount;

const MworldComponent = require('../../lib/components/mworld');
const ToggleButton = require('../../lib/components/toggle-button');

// use chai-enzyme assertions, see https://github.com/producthunt/chai-enzyme
chai.use(chaiEnzyme());

describe('<MworldComponent />', function() {
  let component;

  beforeEach(function() {
    component = mount(<MworldComponent />);
  });

  it('should contain one <h2> tag', function() {
    expect(component.find('h2')).to.have.length(1);
  });
  it('should contain one <ToggleButton />', function() {
    expect(component.find(ToggleButton)).to.have.length(1);
  });
  it('should initially have prop {status: \'enabled\'}', function() {
    expect(component).to.have.prop('status', 'enabled');
  });
});
