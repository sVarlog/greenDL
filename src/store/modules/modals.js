import { SET_CARD_DESC_MODAL } from "../types";

export default {
    state: () => ({
        activeModal: false,
        modalsTimeShow: 400,
        cardDescModal: {
            show: false,
            data: null
        }
    }),
    getters: {
        getCardDescModal: state => {
            return state.cardDescModal;
        }
    },
    mutations: {
        [SET_CARD_DESC_MODAL] : (state, payload) => {
            state.activeModal = payload.show;
            state.cardDescModal = payload;
        }
    }
}