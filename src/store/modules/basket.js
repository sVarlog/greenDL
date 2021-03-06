import { DELETE_BASKET_DATA, SET_BASKET_DATA } from "../types";

export default {
    state: () => ({
        chosedProducts: []
    }),
    getters: {
        getBasket: state => {
            return state
        },
    },
    mutations: {
        [SET_BASKET_DATA] : (state, payload) => {
            state = payload;
        },
        [DELETE_BASKET_DATA] : (state) => {
            state.chosedProducts = [];
        }
    }
};