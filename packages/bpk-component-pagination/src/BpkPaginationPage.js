/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import BpkButton from 'bpk-component-button';
import PropTypes from 'prop-types';
import React from 'react';
import { cssModules } from 'bpk-react-utils';

import STYLES from './bpk-pagination-page.scss';

const getClassName = cssModules(STYLES);

const BpkPaginationPage = (props) => {
  const classNames = [getClassName('bpk-pagination-page')];
  const {
    label, onSelect, isSelected,
  } = props;

  if (isSelected) { classNames.push(getClassName('bpk-pagination-page--selected')); }

  return (
    <BpkButton
      secondary
      onClick={onSelect}
      className={classNames.join(' ')}
    >
      <span>{label}</span>
    </BpkButton>
  );
};

BpkPaginationPage.propTypes = {
  label: PropTypes.node.isRequired,
  onSelect: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

BpkPaginationPage.defaultProps = {
  isSelected: false,
};

export default BpkPaginationPage;
