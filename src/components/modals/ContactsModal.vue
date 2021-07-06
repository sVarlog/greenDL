<template>
    <div class="modal contactsModal" @click.self="closeModal" :class="{active: modalShow}" :style="{transition: convertTimeCss()}">
        <div class="wrap" :style="{transition: convertTimeCss()}">
            <h2>Контакты</h2>
            <a href="tel: +79168196021">+7 (916) 819 60 21</a>
            <span>ЭСПРО, 143072 МО, Г.ОДИНЦОВО, П.ВНИИССОК, УЛ.СЕЛЕКЦИОННАЯ, Д.14, ЭТ.1, ПОМ.1</span>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {SET_CONTACTS_MODAL} from '@/store/types.js';
import {eventBus} from '@/main.js';

const ContactsModal = {
    props: {
        touchFN: {}
    },
    data: () => ({
        touchStatus: true,
        modalShow: false
    }),
    mounted() {
        this.touch = this.$props.touchFN;
        eventBus.$on('closeModal', () => this.closeModal());
        setTimeout(() => {
            this.modalShow = true;
            this.content = this.$el.querySelector('.wrap');
            this.modalWrap = this.$el;
            if (this.touchStatus) {
                this.content.addEventListener('touchstart', (e) => {
                    this.startY = e.touches[0].clientY;
                });
                this.content.addEventListener('touchmove', (move) => {
                    this.touch({startY: this.startY, move: move.touches[0].clientY});
                });
                this.content.addEventListener('touchend', (move) => {
                    this.touch({startY: this.startY, move: move.changedTouches[0].clientY, end: true});
                    this.touchStatus = true;
                })
            }
            this.$forceUpdate();
        }, 100);
    },
    methods: {
        ...mapMutations({
            setModal: SET_CONTACTS_MODAL
        }),
        closeModal() {
            this.modalShow = false;
            this.modalWrap.style.background = 'rgba(0,0,0,0)';
            this.content.style.cssText = `
                transform: translateY(100vh);
                transition: ${this.convertTimeCss()};
            `;
            setTimeout(() => {
                this.setModal(false);
            }, this.$store.state.modals.modalsTimeShow + 200)
        }
    }
}
export default ContactsModal;
</script>

<style scoped>
.modal .wrap{
    padding: 45px 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.modal .wrap h2{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    color: #201E1E;
    margin-bottom: 25px;
}
.modal .wrap span,
.modal .wrap a{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    color: #201E1E;
    text-decoration: none;
}
.modal .wrap a{
    margin-bottom: 60px;
}
</style>