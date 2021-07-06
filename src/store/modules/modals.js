import { SET_BASKET_MODAL, SET_CARD_DESC_MODAL, SET_COMPLETE_MODAL, SET_LOADING_MODAL } from "../types";

export default {
    state: () => ({
        activeModal: false,
        modalsTimeShow: 400,
        loading: false,
        cardDescModal: {
            show: false,
            data: null
        },
        basketModal: {
            show: false
        },
        completeModal: false
    }),
    getters: {
        getCardDescModal: state => {
            return state.cardDescModal;
        },
        getBasketModal: state => {
            return state.basketModal;
        },
        getLoading: state => {
            return state.loading
        },
        getCompleteModal: state => {
            return state.completeModal
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
        },
        [SET_LOADING_MODAL] : (state, payload) => {
            state.loading = payload;
        },
        [SET_COMPLETE_MODAL] : (state, payload) => {
            state.activeModal = payload;
            state.completeModal = payload;
        }
    }
}