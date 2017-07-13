/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import TestComponent from 'imanmh-test-component';
import s from './Home.css';

console.log('-----------vv-----------');
console.log(TestComponent);
console.log('------------------------');


class Home extends React.Component {
  static propTypes = {
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Test Component</h1>
          <TestComponent />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
