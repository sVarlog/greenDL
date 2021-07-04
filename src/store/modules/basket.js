import { SET_BASKET_DATA } from "../types";

export default {
    state: () => ({
        chosedProducts: []
    }),
    getters: {
        getBasket: state => {
            return state
        },
        getTotal: state => {
            return state.length
        }
    },
    mutations: {
        [SET_BASKET_DATA] : (state, payload) => {
            state = payload;
        }
    }
};