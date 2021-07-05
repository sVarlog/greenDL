import Vue from 'vue';
import Vuex from 'vuex';
import basket from './modules/basket.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currency: '₽'
    },
    modules: {
        basket
    }
})

export default store;