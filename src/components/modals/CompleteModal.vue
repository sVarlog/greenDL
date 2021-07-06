<template>
    <div class="modal completeModal" @click.self="closeModal" :class="{active: modalShow}" :style="{transition: convertTimeCss()}">
        <div class="wrap" :style="{transition: convertTimeCss()}">
            <svg width="149" height="149" viewBox="0 0 149 149" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="74.5" cy="74.5" r="74.5" fill="#4BCE2A"/>
                <path d="M103.632 50.4968L101.945 49.0476C99.1453 46.6413 94.9376 46.9095 92.4654 49.6509L64.2456 80.9412L55.7273 73.6047C52.9301 71.1957 48.7217 71.4586 46.2466 74.197L44.7551 75.8475C43.5455 77.1851 42.9175 78.9496 43.0087 80.752C43.1008 82.5534 43.9044 84.2445 45.2441 85.4535L60.8585 99.7523C62.2104 101.022 64.0222 101.684 65.874 101.586C67.7259 101.488 69.4572 100.637 70.6669 99.2312L104.354 60.0888C105.531 58.7212 106.116 56.9423 105.981 55.1436C105.845 53.3437 105.001 51.6725 103.632 50.4968Z" fill="white"/>
            </svg>
            <h2>Отлично!</h2>                
            <span>Ваш заказ уже спешит к вам!</span>
            <button @click="closeModal">Подтвердить</button>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import {SET_COMPLETE_MODAL} from '@/store/types.js';

const CompleteModal = {
    props: {
        touchFN: {}
    },
    data: () => ({
        modalShow: false,
        touchStatus: true
    }),
    mounted() {
        this.touch = this.$props.touchFN;
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
            setModal: SET_COMPLETE_MODAL
        }),
        closeModal() {
            this.modalShow = false;
            this.modalWrap.style.background = 'rgba(0,0,0,0)';
            this.content.style.cssText = `
                transform: translateY(150%);
                transition: ${this.convertTimeCss()};
            `;
            setTimeout(() => {
                this.setModal({show: false});
            }, this.$store.state.modals.modalsTimeShow + 200)
        }
    }
}
export default CompleteModal;
</script>

<style scoped>
.modal .wrap{
    padding: 55px 15px 40px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.modal h2{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    color: #201E1E;
    margin-top: 35px;
}
.modal span{
    margin-top: 10px;
    margin-bottom: 50px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 150%;
    color: #201E1E;
    opacity: 0.5;
}
.modal button{
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4BCE2A;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    border: 0;
    outline: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF
}
</style>