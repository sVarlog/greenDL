<template>
    <div class="modalsParent">
        <card-desc-modal :touchFN="touch" v-if="getCardDescModal.show"></card-desc-modal>
        <basket-modal :touchFN="touch" v-if="getBasketModal.show"></basket-modal>
        <complete-modal :touchFN="touch" v-if="getCompleteModal"></complete-modal>
        <contacts-modal :touchFN="touch" v-if="getContactsModal"></contacts-modal>
        <transition name="fade">
            <loading-modal v-if="getLoading"></loading-modal>
        </transition>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {eventBus} from '@/main.js';
const CardDescModal = () => import('@/components/modals/CardDescModal');
const BasketModal = () => import('@/components/modals/BasketModal');
const LoadingModal = () => import('@/components/modals/Loading');
const CompleteModal = () => import('@/components/modals/CompleteModal');
const ContactsModal = () => import('@/components/modals/ContactsModal');

const Modals = {
    data: () => ({
        defaultWrapBg: .6
    }),
    computed: {
        ...mapGetters([
            'getCardDescModal',
            'getBasketModal',
            'getLoading',
            'getCompleteModal',
            'getContactsModal'
        ])
    },
    components: {
        CardDescModal,
        BasketModal,
        LoadingModal,
        CompleteModal,
        ContactsModal
    },
    methods: {
        touch({startY, move, end}) {
            this.content = this.$el.querySelector('.modal .wrap');
            this.modalWrap = this.$el.querySelector('.modal');
            let percent = move - startY,
                onePercent = this.content.offsetHeight / 100,
                heightHide = (this.content.offsetHeight / 100) * 25;
            if (!end) {
                if (move - startY < 0) {
                    this.touchStatus = false;
                } else {
                    this.modalWrap.style.background = `rgba(0,0,0,${(this.defaultWrapBg - (this.defaultWrapBg / 100) * (percent / onePercent)).toFixed(2)})`;
                    this.content.style.cssText = `
                        transition: 0s ease-in;
                        transform: translateY(${percent}px)
                    `;
                }
            } else {
                if (percent > heightHide) {
                    this.modalWrap.style.background = 'rgba(0,0,0,0)';
                    this.content.style.cssText = `
                        transform: translateY(125%);
                        transition: ${this.convertTimeCss()};
                    `;
                    this.touchStatus = false;
                    setTimeout(() => {
                        eventBus.$emit('closeModal');
                    }, 100)
                } else {
                    this.content.style.cssText = `
                        transition: ${this.convertTimeCss()};
                        transform: translateY(0);
                    `;
                }
            }
        },
    }
};
export default Modals;
</script>
<style>
.modal{
    position: fixed;
    z-index: 100;
    background: rgba(0,0,0,0);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.modal.active{
    background: rgba(0,0,0,.6);
}
.modal .wrap{
    background: #fff;
    max-height: 90vh;
    overflow-y: auto;
    width: 100%;
    display: block;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    -webkit-border-top-left-radius: 25px;
    -webkit-border-top-right-radius: 25px;
    transform: translateY(125%);
    padding: 30px 23px 70px 23px;
    max-width: 600px;
}
.modal.active .wrap{
    transform: translateY(0);
}
@media screen and (min-width: 900px) {
    .modal{
        align-items: center;
    }
    .modal .wrap{
        transform: scale(0);
        max-height: 95vh;
        border-radius: 25px;
        -webkit-border-radius: 25px;
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;
        scrollbar-width: none;
    }
    .modal .wrap::-webkit-scrollbar { width: 0; height: 0; }
    .modal.active .wrap{
        transform: scale(1);
    }
}
</style>