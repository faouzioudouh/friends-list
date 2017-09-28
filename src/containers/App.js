import React, { Component } from 'react';

import FriendListApp from './FriendListApp';
import storeProvider from '../hoc/storeProvider';
import configureStore from '../store/configureStore';

const store = configureStore();
const provideStore = storeProvider(store);
const FriendListAppWithStore = provideStore(FriendListApp);

export default class App extends Component {
  render() {
    return (
      <div>
        <FriendListAppWithStore />
      </div>
    );
  }
}
