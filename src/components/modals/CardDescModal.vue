<template>
    <div class="modal cardDesc" @click.self="closeModal" :class="{active: modalShow}" :style="{transition: convertTimeCss()}">
        <div class="wrap" :style="{transition: convertTimeCss()}">
            <div class="content" v-if="modalData">
                <img :src="modalData.imgSrc" alt="modalData.title">
                <div class="close" @click="closeModal">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.64999 5.00031L9.74362 1.90668C10.0854 1.56487 10.0854 1.0107 9.74362 0.669421L9.3312 0.257001C8.98928 -0.0849194 8.43511 -0.0849194 8.09383 0.257001L5.00031 3.35052L1.90668 0.25636C1.56487 -0.0854535 1.0107 -0.0854535 0.669421 0.25636L0.25636 0.66878C-0.0854535 1.0107 -0.0854535 1.56487 0.25636 1.90615L3.35052 5.00031L0.257001 8.09383C-0.0849194 8.43575 -0.0849194 8.98992 0.257001 9.3312L0.669421 9.74362C1.01124 10.0854 1.5654 10.0854 1.90668 9.74362L5.00031 6.64999L8.09383 9.74362C8.43575 10.0854 8.98992 10.0854 9.3312 9.74362L9.74362 9.3312C10.0854 8.98928 10.0854 8.43511 9.74362 8.09383L6.64999 5.00031Z" fill="#1D1D1D" fill-opacity="0.5"/>
                    </svg>                        
                </div>
                <div class="desc">{{modalData.desc}}</div>
                <div class="bottomPart">
                    <div class="row first">
                        <span class="title">{{modalData.title}}</span>
                        <span class="price">{{modalData.price}} {{getCurrencyFromStore()}}</span>
                    </div>
                    <div class="row">
                        <div class="count">
                            <div class="minus" @click="counter--">
                                <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.80952 0.19043H9.70593C10.4175 0.19043 11 0.788097 11 1.49995C11 2.21181 10.4175 2.80948 9.70593 2.80948H6.80952H4.19048H1.29407C0.582476 2.80948 0 2.21181 0 1.49995C0 0.788097 0.582476 0.19043 1.29407 0.19043H4.19048H6.80952Z" fill="#201E1E"/>
                                </svg>									
                            </div>
                            <input type="number" v-model="counter">
                            <div class="plus" @click="counter++;">
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.70593 4.19048H6.80952V1.29407C6.80952 0.582476 6.21186 0 5.5 0C4.78814 0 4.19048 0.582476 4.19048 1.29407V4.19048H1.29407C0.582476 4.19048 0 4.78814 0 5.5C0 6.21186 0.582476 6.80952 1.29407 6.80952H4.19048V9.70593C4.19048 10.4175 4.78814 11 5.5 11C6.21186 11 6.80952 10.4175 6.80952 9.70593V6.80952H9.70593C10.4175 6.80952 11 6.21186 11 5.5C11 4.78814 10.4175 4.19048 9.70593 4.19048Z" fill="#201E1E"/>
                                </svg>									
                            </div>
                        </div>
                        <button @click="setBasketProduct(modalData, 'addProduct', index)">Добавить</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {SET_CARD_DESC_MODAL} from '@/store/types.js';
import {eventBus} from '@/main.js';

const CardDescModal = {
    props: {
        touchFN: {}
    },
    data: () => ({
        modalShow: false,
        modalData: null,
        startY: null,
        defaultWrapBg: .6,
        touchStatus: true,
        counter: 1,
        index: null
    }),
    computed: {
        ...mapGetters([
            'getCardDescModal',
        ])
    },
    created() {
        this.modalData = this.getCardDescModal.data;
        this.index = Number(this.getCardDescModal.index);
    },
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
            setModal: SET_CARD_DESC_MODAL,
        }),
        setBasketProduct(item, type, index) {
            console.log(this.counter, 'counter');
            eventBus.$emit('basketChange', {item: item, type, index: index, addNum: this.counter});
            this.closeModal();
		},
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
    },
    watch: {
        counter: function() {
            if (Number(this.counter) > 0) {
                if (this.counter.toString()[0] === '0') {
                    this.counter = Number(this.counter.slice(1));
                } else if (Number(this.counter) > 100) {
                    this.counter = Number(100);
                } else {
                    this.counter = Number(this.counter);
                }
            } else {
                this.counter = Number(1);
            }
        }
    }
}
export default CardDescModal;
</script>

<style scoped>
.modal .wrap{
    padding: 0;
}
.modal .wrap .content{
    width: 100%;
    height: 100%;
    position: relative;
}
.modal .wrap .content img{
    width: 100%;
    height: 250px;
    object-fit: cover;
}
.modal .wrap .content .close{
    position: absolute;
    top: 25px;
    right: 25px;
    width: 32px;
    height: 32px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border-radius: 50%;
}
.modal .wrap .content .close path{
    transition: .2s;
}
.modal .wrap .content .close path:hover{
    fill-opacity: 1;
}
.modal .wrap .content .desc{
    padding: 20px 23px 25px 23px;
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    color: #201E1E;
}
.modal .wrap .content .bottomPart{
    border-top: 2px solid rgba(0, 0, 0, 0.03);
    padding: 20px 23px;
}
.modal .wrap .content .bottomPart .row{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal .wrap .content .bottomPart .row.first{
    margin-bottom: 20px;
}
.modal .wrap .content .bottomPart .row span{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #201E1E;
}
.modal .wrap .content .bottomPart .count .minus,
.modal .wrap .content .bottomPart .count .plus{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 100%;
    opacity: .5;
    transition: .2s;
}
.modal .wrap .content .bottomPart .count .plus:hover,
.modal .wrap .content .bottomPart .count .minus:hover{
    opacity: 1;
}
.modal .wrap .content .bottomPart .count .minus{
    border-right: 1.5px solid #F7F7F7;
}
.modal .wrap .content .bottomPart .count .plus{
    border-left: 1.5px solid #F7F7F7;
}
.modal .wrap .content .bottomPart .count{
    display: flex;
    align-items: center;
    border: 1.5px solid #F7F7F7;
    box-sizing: border-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    height: 47px;
}
.modal .wrap .content .bottomPart .count input{
    width: 77px;
    text-align: center;
    border: 0;
    outline: 0;
    height: 100%;
}
.modal .wrap .content .bottomPart button {
    background: #4BCE2A;
    border-radius: 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-align: right;
    color: #FFFFFF;
    height: 47px;
    width: 130px;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>