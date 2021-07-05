<template>
    <div class="modalsParent">
        <card-desc-modal v-if="getCardDescModal.show"></card-desc-modal>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
const CardDescModal = () => import('@/components/modals/CardDescModal');
const Modals = {
    computed: {
        ...mapGetters([
            'getCardDescModal'
        ])
    },
    components: {
        CardDescModal
    }
};
export default Modals;
</script>