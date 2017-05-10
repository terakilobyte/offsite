import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MworldComponent from '../src/components/mworld';
import ConnectedMworldComponent from '../src/components/';

storiesOf('MworldComponent', module)
  .add('connected to store', () => <ConnectedMworldComponent />)
  .add('enabled', () => <MworldComponent status="enabled" />)
  .add('disabled', () => <MworldComponent status="disabled" />);
