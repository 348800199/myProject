import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';

let state = {
    loadingStatus: true
}

export default {
    state,
    getters,
    actions,
    mutations
}