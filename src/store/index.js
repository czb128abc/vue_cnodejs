import Vuex from 'vuex';
import Vue from 'vue';

import condejs from './module/condejs';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        condejs,
    }
});

export default store;
