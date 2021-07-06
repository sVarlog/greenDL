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
                <div class="desc" :class="{showGradient: showDescGradient}">
                    {{modalData.desc}}
                    <span class="arrow" @click="showFullHeight" v-if="showDescGradient">
                        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15.5" cy="15.5" r="15.5" fill="#4BCE2A"/>
                            <g clip-path="url(#clip0)">
                                <path d="M15.0725 10.1758L11.1 14.1483C10.9866 14.2617 10.9243 14.4128 10.9243 14.574C10.9243 14.7353 10.9866 14.8864 11.1 14.9998L11.4607 15.3604C11.5739 15.4738 11.7252 15.5362 11.8864 15.5362C12.0476 15.5362 12.2039 15.4738 12.3171 15.3604L14.6397 13.043L14.6397 20.4057C14.6397 20.7377 14.8996 21 15.2316 21L15.7417 21C16.0737 21 16.3598 20.7377 16.3598 20.4057L16.3598 13.0167L18.6954 15.3604C18.8087 15.4737 18.9559 15.5361 19.1171 15.5361C19.2782 15.5361 19.4274 15.4737 19.5407 15.3604L19.9003 14.9997C20.0137 14.8863 20.0755 14.7352 20.0755 14.5739C20.0755 14.4128 20.0129 14.2616 19.8995 14.1482L15.927 10.1757C15.8133 10.0621 15.6614 9.99956 15.5 10C15.3381 9.99965 15.1861 10.0621 15.0725 10.1758Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="11" height="11" fill="white" transform="translate(10 21) rotate(-90)"/>
                                </clipPath>
                            </defs>
                        </svg>                            
                    </span>
                </div>
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
                            <input inputmode="numeric" type="number" v-model="counter">
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
        index: null,
        descHeight: null,
        showDescGradient: false
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
        eventBus.$on('showDesc', () => this.showFullHeight());
        eventBus.$on('closeModal', () => this.closeModal());
        setTimeout(() => {
            this.modalShow = true;
            this.content = this.$el.querySelector('.wrap');
            this.checkDeskHeight('.desc');
            this.modalWrap = this.$el;
            if (this.touchStatus) {
                this.content.addEventListener('touchstart', (e) => {
                    this.startY = e.touches[0].clientY;
                });
                this.content.querySelector('img').addEventListener('touchmove', (move) => {
                    this.touch({startY: this.startY, move: move.touches[0].clientY});
                });
                this.content.querySelector('img').addEventListener('touchend', (move) => {
                    this.touch({startY: this.startY, move: move.changedTouches[0].clientY, end: true});
                    this.touchStatus = true;
                });
            }
            this.$forceUpdate();
        }, 100);
    },
    methods: {
        ...mapMutations({
            setModal: SET_CARD_DESC_MODAL,
        }),
        showFullHeight(){
            let el = this.$el.querySelector('.desc');
            this.showDescGradient = false;
            console.log(this.descHeight);
            el.style.maxHeight = `${this.descHeight}px`;
        },
        checkDeskHeight(selector) {
            let el = this.$el.querySelector(selector),
                lineHeight = Number(getComputedStyle(el).lineHeight.toString().replace(/\D/g, '')),
                rows = 5;
            this.descHeight = el.offsetHeight;
            console.log(this.descHeight);
            if (el.offsetHeight > lineHeight * rows) {
                el.style.maxHeight = `${lineHeight * rows}px`;
                this.showDescGradient = true;
            }
        },
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
    transition: .2s;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
.modal .wrap .content .desc.showGradient:after{
    content: '';
    position: absolute;
    width: 100%;
    height: 50px;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
}
.modal .wrap .content .desc .arrow{
    position: absolute;
    bottom: 0;
    z-index: 2;
    cursor: pointer;
    left: calc(50% - 15.5px);
}
.modal .wrap .content .bottomPart{
    border-top: 2px solid rgba(0, 0, 0, 0.03);
    padding: 20px 23px;
    position: sticky;
    bottom: 0;
    width: 100%;
    background: #fff;
    height: 135px;
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