<template>
    <div class="modal contactsModal" @click.self="closeModal" :class="{active: modalShow}" :style="{transition: convertTimeCss()}">
        <div class="wrap" :style="{transition: convertTimeCss()}">
            <h2>Контакты</h2>
            <div class="row">
                <a href="tel: +79168196021">+7 (916) 819 60 21</a>
                <span>Или</span>
                <a href="https://api.whatsapp.com/send?phone=79168196021&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%2C%20%D1%85%D0%BE%D1%87%D1%83%20%D1%83%D0%B7%D0%BD%D0%B0%D1%82%D1%8C%20%D0%BE%20%D0%B2%D0%B0%D1%88%D0%B5%D0%B9%20%D0%BC%D0%B8%D0%BA%D1%80%D0%BE%D0%B7%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%20%F0%9F%98%8E">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M39.9977 29.8887C39.9977 30.1077 39.991 30.5827 39.9779 30.9496C39.9457 31.8473 39.8745 33.0058 39.7669 33.5336C39.6051 34.3268 39.3609 35.0755 39.0426 35.6986C38.6659 36.4358 38.1854 37.0961 37.6145 37.666C37.0448 38.2347 36.3851 38.7133 35.649 39.0885C35.0226 39.4077 34.2693 39.652 33.4715 39.813C32.949 39.9186 31.7992 39.9884 30.9071 40.0201C30.5399 40.0332 30.0648 40.0398 29.8466 40.0398L10.1502 40.0366C9.93114 40.0366 9.45622 40.0299 9.0893 40.0168C8.19152 39.9846 7.03308 39.9134 6.50523 39.8058C5.71202 39.644 4.9633 39.3999 4.34018 39.0815C3.60299 38.7048 2.94271 38.2243 2.37282 37.6534C1.80407 37.0837 1.32548 36.4241 0.950356 35.688C0.631058 35.0616 0.38676 34.3082 0.225704 33.5105C0.120235 32.9879 0.0504299 31.8382 0.018672 30.9461C0.00562503 30.5789 -0.000976562 30.1038 -0.000976562 29.8856L0.00214845 10.1892C0.00214845 9.97019 0.00882817 9.49523 0.0219923 9.12832C0.054219 8.23055 0.125352 7.07211 0.23297 6.5443C0.394728 5.75109 0.63887 5.00238 0.95727 4.37922C1.33395 3.64207 1.81446 2.98176 2.38536 2.41188C2.95505 1.84316 3.61474 1.36453 4.3508 0.989375C4.97725 0.670156 5.73065 0.425859 6.52835 0.264805C7.05089 0.159297 8.2007 0.0894922 9.09274 0.0577734C9.46001 0.0446875 9.93513 0.0380859 10.1533 0.0380859L29.8497 0.04125C30.0688 0.04125 30.5437 0.0479297 30.9106 0.0610938C31.8084 0.0933203 32.9668 0.164453 33.4947 0.27207C34.2879 0.433828 35.0366 0.677969 35.6597 0.996367C36.3969 1.37305 37.0572 1.85355 37.6271 2.42445C38.1958 2.99414 38.6744 3.65379 39.0495 4.38988C39.3688 5.01633 39.6131 5.76969 39.7742 6.56738C39.8796 7.08996 39.9494 8.23973 39.9812 9.1318C39.9943 9.49906 40.0009 9.97414 40.0009 10.1923L39.9977 29.8887Z" fill="url(#paint0_linear)"/>
                            <path d="M30.598 9.50178C27.8898 6.79135 24.2882 5.29791 20.4509 5.29639C12.5446 5.29639 6.10977 11.7287 6.1066 19.6351C6.10559 22.1624 6.7661 24.6294 8.02133 26.804L5.98633 34.2348L13.5905 32.2408C15.6856 33.3831 18.0445 33.9851 20.4452 33.9862H20.4511C28.3567 33.9862 34.7921 27.553 34.7953 19.6465C34.7969 15.815 33.3062 12.2122 30.598 9.50178ZM20.4511 31.5643H20.4463C18.3069 31.5635 16.2086 30.989 14.3781 29.903L13.9427 29.6447L9.43032 30.8281L10.6348 26.4299L10.3512 25.979C9.15778 24.0814 8.52747 21.888 8.52841 19.6361C8.53099 13.0646 13.8794 7.71826 20.4558 7.71826C23.6402 7.71947 26.6337 8.96088 28.8846 11.2137C31.1356 13.4664 32.3746 16.461 32.3734 19.6456C32.3708 26.2176 27.0225 31.5643 20.4511 31.5643ZM26.9908 22.6379C26.6323 22.4586 24.8703 21.5918 24.5417 21.4722C24.2132 21.3526 23.9743 21.2928 23.7353 21.6516C23.4964 22.0103 22.8095 22.8173 22.6004 23.0564C22.3913 23.2956 22.1822 23.3255 21.8238 23.1461C21.4654 22.9668 20.3106 22.5884 18.9416 21.3678C17.8761 20.4178 17.1568 19.2444 16.9477 18.8856C16.7386 18.5269 16.9255 18.333 17.1049 18.1544C17.2661 17.9938 17.4633 17.7359 17.6425 17.5267C17.8217 17.3175 17.8814 17.168 18.0009 16.9288C18.1204 16.6897 18.0606 16.4805 17.971 16.3011C17.8814 16.1218 17.1646 14.3582 16.8659 13.6408C16.575 12.9421 16.2795 13.0367 16.0595 13.0257C15.8507 13.0153 15.6115 13.0131 15.3726 13.0131C15.1337 13.0131 14.7453 13.1028 14.4168 13.4615C14.0883 13.8202 13.1624 14.687 13.1624 16.4506C13.1624 18.2141 14.4467 19.9179 14.6259 20.157C14.8051 20.3962 17.1532 24.0153 20.7486 25.5672C21.6038 25.9364 22.2713 26.1569 22.7919 26.322C23.6505 26.5946 24.4318 26.5562 25.0494 26.464C25.738 26.3611 27.1699 25.5972 27.4687 24.7603C27.7673 23.9233 27.7673 23.2059 27.6777 23.0565C27.5881 22.907 27.3492 22.8173 26.9908 22.6379Z" fill="white"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear" x1="19.9999" y1="0.0380859" x2="19.9999" y2="40.0398" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#61FD7D"/>
                                <stop offset="1" stop-color="#2BB826"/>
                            </linearGradient>
                            <clipPath id="clip0">
                                <rect width="40" height="40" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </a>                    
            </div>
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
.modal .wrap .row{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
}
.modal .wrap .row span{
    margin-right: 13px;
    margin-left: 13px;
}
.modal .wrap span{
    opacity: .5;
}
</style>