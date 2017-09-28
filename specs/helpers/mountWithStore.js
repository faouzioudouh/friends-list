import React from 'react';
import { mount, shallow } from 'enzyme';
import { combineReducers, createStore } from 'redux';
import storeProvider from '../../src/hoc/storeProvider';
import configureStore from '../../src/store/configureStore';
import * as reducers from '../../src/reducers';

const wrapWithStore = store => (Component, initState = {}) => {
    const provideStore = storeProvider(store);
    const ComponentWithStore = provideStore(Component);
    return ComponentWithStore;
};

export default wrapWithStore;
