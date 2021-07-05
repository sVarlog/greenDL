<template>
    <div class="modalsParent">
        <card-desc-modal v-if="getCardDescModal.show"></card-desc-modal>
        <basket-modal v-if="getBasketModal.show"></basket-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
const CardDescModal = () => import('@/components/modals/CardDescModal');
const BasketModal = () => import('@/components/modals/BasketModal');

const Modals = {
    computed: {
        ...mapGetters([
            'getCardDescModal',
            'getBasketModal'
        ])
    },
    components: {
        CardDescModal,
        BasketModal
    }
};
export default Modals;
</script>