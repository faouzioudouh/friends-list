import { PAGE_CHANGED } from '../constants/ActionTypes';
import { getUrlParam } from '../libs/location';

const initialState = {
    currentPage: (parseInt(getUrlParam('page'), 10) - 1) || 0
};

const pagination = (state = initialState, action) => {
    switch (action.type) {
        case PAGE_CHANGED:
            return Object.assign({}, {
                currentPage: action.currentPage
            });

        default:
            return state;
    }
}

export default pagination;
