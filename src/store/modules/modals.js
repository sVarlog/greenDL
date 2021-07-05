import { SET_BASKET_MODAL, SET_CARD_DESC_MODAL } from "../types";

export default {
    state: () => ({
        activeModal: false,
        modalsTimeShow: 400,
        cardDescModal: {
            show: false,
            data: null
        },
        basketModal: {
            show: false
        }
    }),
    getters: {
        getCardDescModal: state => {
            return state.cardDescModal;
        },
        getBasketModal: state => {
            return state.basketModal;
        }
    },
    mutations: {
        [SET_CARD_DESC_MODAL] : (state, payload) => {
            state.activeModal = payload.show;
            state.cardDescModal = payload;
        },
        [SET_BASKET_MODAL] : (state, payload) => {
            state.activeModal = payload.show;
            state.basketModal = payload;
        }
    }
}