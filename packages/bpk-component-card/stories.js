import React from 'react';
import { storiesOf } from '@storybook/react';

import BpkCard from './index';

storiesOf('bpk-component-card', module)
  .add('Default', () => (
    <BpkCard>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </BpkCard>
  ))
  .add('With href', () => (
    <BpkCard href="#">
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </BpkCard>
  ))
  .add('Without padding', () => (
    <BpkCard padded={false}>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </BpkCard>
  ));
