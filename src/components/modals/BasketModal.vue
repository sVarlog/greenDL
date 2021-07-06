<template>
    <div class="modal basketModal" @click.self="closeModal" :class="{active: modalShow}" :style="{transition: convertTimeCss()}">
        <div class="wrap" :style="{transition: convertTimeCss()}">
            <div class="header">
                <div class="back">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.319675 9.223L7.54238 2.00013C7.74856 1.79396 8.02335 1.68079 8.31636 1.68079C8.60969 1.68079 8.88432 1.79412 9.0905 2.00013L9.74626 2.65606C9.95228 2.86191 10.0658 3.13687 10.0658 3.43004C10.0658 3.72305 9.95228 4.00727 9.74626 4.21312L5.53264 8.43602H18.9195C19.5231 8.43602 20 8.90853 20 9.51227V10.4396C20 11.0433 19.5231 11.5635 18.9195 11.5635H5.48484L9.7461 15.8099C9.95212 16.0161 10.0656 16.2836 10.0656 16.5768C10.0656 16.8696 9.95212 17.141 9.7461 17.347L9.09033 18.0008C8.88416 18.207 8.60952 18.3194 8.31619 18.3194C8.02319 18.3194 7.74839 18.2055 7.54222 17.9994L0.319511 10.7766C0.112846 10.5698 -0.000810623 10.2937 3.8147e-06 10.0002C-0.000646591 9.70576 0.112846 9.4295 0.319675 9.223Z" fill="#1D1D1D"/>
                    </svg>                        
                </div>
                <div class="title">
                    <h2>{{getTotalSum}} {{getCurrencyFromStore()}}</h2>
                    <span>Ваш заказ</span>
                </div>
                <div class="delete" @click="deleteProducts">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5625 2.5H13.125V1.875C13.125 0.839453 12.2855 0 11.25 0H8.75C7.71445 0 6.875 0.839453 6.875 1.875V2.5H3.4375C2.57457 2.5 1.875 3.19957 1.875 4.0625V5.3125C1.875 5.6577 2.1548 5.9375 2.5 5.9375H17.5C17.8452 5.9375 18.125 5.6577 18.125 5.3125V4.0625C18.125 3.19957 17.4254 2.5 16.5625 2.5ZM8.125 1.875C8.125 1.53047 8.40547 1.25 8.75 1.25H11.25C11.5945 1.25 11.875 1.53047 11.875 1.875V2.5H8.125V1.875Z" fill="#1D1D1D"/>
                        <path d="M3.06152 7.1875C2.94999 7.1875 2.86112 7.2807 2.86644 7.39211L3.38206 18.2141C3.42972 19.2156 4.25237 20 5.25472 20H14.7461C15.7485 20 16.5711 19.2156 16.6188 18.2141L17.1344 7.39211C17.1397 7.2807 17.0509 7.1875 16.9393 7.1875H3.06152ZM12.5004 8.75C12.5004 8.40469 12.7801 8.125 13.1254 8.125C13.4707 8.125 13.7504 8.40469 13.7504 8.75V16.875C13.7504 17.2203 13.4707 17.5 13.1254 17.5C12.7801 17.5 12.5004 17.2203 12.5004 16.875V8.75ZM9.37542 8.75C9.37542 8.40469 9.65511 8.125 10.0004 8.125C10.3457 8.125 10.6254 8.40469 10.6254 8.75V16.875C10.6254 17.2203 10.3457 17.5 10.0004 17.5C9.65511 17.5 9.37542 17.2203 9.37542 16.875V8.75ZM6.25042 8.75C6.25042 8.40469 6.53011 8.125 6.87542 8.125C7.22073 8.125 7.50042 8.40469 7.50042 8.75V16.875C7.50042 17.2203 7.22073 17.5 6.87542 17.5C6.53011 17.5 6.25042 17.2203 6.25042 16.875V8.75Z" fill="#1D1D1D"/>
                    </svg>                        
                </div>
            </div>
            <ul class="basketItems" v-if="basketItems && basketItems.length > 0">
                <li class="basketItem" v-for="(item, index) in basketItems" :key="index">
                    <div class="left">
                        <img :src="item.el.imgSrc" alt="item.title">
                    </div>
                    <div class="center">
                        <h3>{{item.el.title}}</h3>
                        <span>{{item.el.price}} {{getCurrencyFromStore()}}</span>
                    </div>
                    <div class="rigth">
                        <div class="minus" @click="changeItemCount(item, index, 'minus')">
                            <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.80952 0.19043H9.70593C10.4175 0.19043 11 0.788097 11 1.49995C11 2.21181 10.4175 2.80948 9.70593 2.80948H6.80952H4.19048H1.29407C0.582476 2.80948 0 2.21181 0 1.49995C0 0.788097 0.582476 0.19043 1.29407 0.19043H4.19048H6.80952Z" fill="#201E1E"/>
                            </svg>									
                        </div>                        
                        <span class="count">{{item.productCount}}</span>
                        <div class="plus" @click="changeItemCount(item, index, 'plus')">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.70593 4.19048H6.80952V1.29407C6.80952 0.582476 6.21186 0 5.5 0C4.78814 0 4.19048 0.582476 4.19048 1.29407V4.19048H1.29407C0.582476 4.19048 0 4.78814 0 5.5C0 6.21186 0.582476 6.80952 1.29407 6.80952H4.19048V9.70593C4.19048 10.4175 4.78814 11 5.5 11C6.21186 11 6.80952 10.4175 6.80952 9.70593V6.80952H9.70593C10.4175 6.80952 11 6.21186 11 5.5C11 4.78814 10.4175 4.19048 9.70593 4.19048Z" fill="#201E1E"/>
                            </svg>									
                        </div>
                    </div>
                </li>
            </ul>
            <span class="noData" v-else>Нет выбранных товаров</span>
            <div class="form">
                <h2>Адрес доставки</h2>
                <input type="text" v-model="formData.street" placeholder="Улица">
                <div class="inputsRow">
                    <input type="text" v-model="formData.flat" placeholder="Кв/офис">
                    <input type="text" v-model="formData.entrance" placeholder="Подъезд">
                    <input type="text" v-model="formData.intercom" placeholder="Домофон">
                </div>
                <input type="text" v-model="formData.phone" placeholder="Телефон">
                <textarea v-model="formData.comment" placeholder="Комментарий"></textarea>
            </div>
            <button class="pay" @click="makeOrder" :disabled="checkBtnShow">
                Оплатить
                <span>
                    <div class="icon">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#sd1wd12e1312)">
                                <path d="M13.7114 6.4612L8.70369 1.45335C8.56074 1.3104 8.37022 1.23193 8.16707 1.23193C7.96369 1.23193 7.77328 1.31051 7.63033 1.45335L7.17566 1.90813C7.03283 2.05085 6.95414 2.24149 6.95414 2.44475C6.95414 2.6479 7.03283 2.84496 7.17566 2.98769L10.0971 5.91556H0.815538C0.397061 5.91556 0.0664062 6.24317 0.0664062 6.66176V7.3047C0.0664062 7.72329 0.397061 8.08393 0.815538 8.08393H10.1303L7.17578 11.0281C7.03294 11.1711 6.95425 11.3565 6.95425 11.5598C6.95425 11.7628 7.03294 11.951 7.17578 12.0938L7.63044 12.5472C7.77339 12.6901 7.9638 12.768 8.16718 12.768C8.37033 12.768 8.56085 12.6891 8.7038 12.5461L13.7115 7.5384C13.8548 7.395 13.9336 7.20357 13.9331 7.00008C13.9335 6.79592 13.8548 6.60438 13.7114 6.4612Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="sd1wd12e1312">
                                    <rect width="13.8667" height="13.8667" fill="white" transform="translate(0.0664062 0.0666504)"/>
                                </clipPath>
                            </defs>
                        </svg>                            
                    </div>
                    {{getTotalSum}} {{getCurrencyFromStore()}}
                </span>
            </button>
        </div>
    </div>
</template>

<script>
import {eventBus} from '@/main.js';
import {mapMutations, mapGetters} from 'vuex';
import {SET_BASKET_MODAL, SET_BASKET_DATA, SET_LOADING_MODAL, SET_COMPLETE_MODAL, DELETE_BASKET_DATA} from '@/store/types.js';

const BasketModal = {
    props: {
        touchFN: {}
    },
    data: () => ({
        modalShow: false,
        defaultWrapBg: .6,
        startY: null,
        touchStatus: true,
        formData: {
            street: '',
            flat: '',
            entrance: '',
            intercom: '',
            phone: '',
            comment: ''
        }
    }),
    computed: {
        ...mapGetters([
            'getBasket'
        ]),
        basketItems() {
            return this.getBasket.chosedProducts
        },
        getTotalCount() {
            let counter = 0;
            this.getBasket.chosedProducts.forEach(el => counter += Number(el.productCount));
            return counter;
        },
        getTotalSum() {
            let sum = 0;
            this.getBasket.chosedProducts.forEach(el => sum += Number(el.el.price) * Number(el.productCount));
            return sum;
        },
        checkBtnShow() {
            return this.getBasket.chosedProducts.length === 0 
                    || this.formData.street === '' 
                    || this.formData.flat === '' 
                    || this.formData.entrance === '' 
                    || this.formData.intercom === '' 
                    || this.formData.phone === ''
        }
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
                this.content.querySelector('.header').addEventListener('touchmove', (move) => {
                    this.touch({startY: this.startY, move: move.touches[0].clientY});
                });
                this.content.querySelector('.header').addEventListener('touchend', (move) => {
                    this.touch({startY: this.startY, move: move.changedTouches[0].clientY, end: true});
                    this.touchStatus = true;
                })
            }
            this.$forceUpdate();
        }, 100);
    },
    methods: {
        ...mapMutations({
            setModal: SET_BASKET_MODAL,
            changeBasket: SET_BASKET_DATA,
            setLoading: SET_LOADING_MODAL,
            setCompleteModal: SET_COMPLETE_MODAL
        }),
        deleteProducts() {
            this.$store.commit(DELETE_BASKET_DATA);
            eventBus.$emit('deleteProducts')
        },
        makeOrder() {
            this.setLoading(true);
            setTimeout(() => {
                this.closeModal();
                setTimeout(() => {
                    this.setCompleteModal(true);
                }, this.$store.state.modals.modalsTimeShow);
                this.setLoading(false);
            }, 2000)
        },
        changeItemCount(item, index, type) {
            let newProductList = this.basketItems;
            if (type === 'plus') {
                if (newProductList[index].productCount < 100) {
                    newProductList[index].productCount += 1;
                }
            } else if (type === 'minus') {
                if (newProductList[index].productCount > 0) {
                    newProductList[index].productCount -= 1;
                }
            }
            this.changeBasket({chosedProducts: newProductList});
        },
        closeModal() {
            this.modalShow = false;
            this.modalWrap.style.background = 'rgba(0,0,0,0)';
            this.content.style.cssText = `
                transform: translateY(125%);
                transition: ${this.convertTimeCss()};
            `;
            setTimeout(() => {
                this.setModal({show: false});
            }, this.$store.state.modals.modalsTimeShow)
        }
    }
}
export default BasketModal;
</script>

<style scoped>
.modal .header{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
}
.modal .header .back{
    position: absolute;
    left: 0;
}
.modal .header .delete{
    position: absolute;
    right: 0;
}
.modal .header h2{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 150%;
    text-align: center;
    color: #201E1E;
}
.modal .header span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #201E1E;
    opacity: 0.5;
}
.modal .basketItems{
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;
    max-height: 290px;
    overflow-y: scroll;
}
.modal .basketItems .basketItem{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
}
.modal .basketItems .basketItem .left{
    width: 50px;
    height: 50px;
    border-radius: 8px;
    -webkit-border-radius: 8px;
    overflow: hidden;
    margin-right: 15px;
}
.modal .basketItems .basketItem .left img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.modal .basketItems .basketItem .center{
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.modal .basketItems .basketItem .center h3{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 150%;
    color: #201E1E;
}
.modal .basketItems .basketItem .center span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #201E1E;
    opacity: 0.5;
    margin-top: 5px;
}
.modal .basketItems .basketItem .rigth{
    width: 125px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal .basketItems .basketItem .rigth .minus,
.modal .basketItems .basketItem .rigth .plus{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 38px;
    border: 1.5px solid #F7F7F7;
    box-sizing: border-box;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    transition: .2s;
    opacity: .5;
}
.modal .basketItems .basketItem .rigth .minus:hover,
.modal .basketItems .basketItem .rigth .plus:hover{
    opacity: 1;
}
.modal .form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
.modal .form h2{
    margin-bottom: 15px;
}
.modal .form input,
.modal .form textarea{
    border: 0;
    outline: 0;
    resize: none;
    width: 100%;
    height: 60px;
    border: 1.5px solid #EDEDED;
    box-sizing: border-box;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    margin-bottom: 15px;
    padding-left: 16px;
    padding-top: 18px;
    padding-bottom: 18px;
}
.modal .form .inputsRow{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.modal .form .inputsRow input{
    width: 31%;
}
.modal button.pay{
    width: 100%;
    height: 78px;
    background: #4BCE2A;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    border: 0;
    outline: 0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    position: relative;
    transition: .2s;
}
.modal button.pay:disabled{
    opacity: .5;
}
.modal button.pay span{
    position: absolute;
    right: 16px;
    top: 16px;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #FFFFFF;
}
.modal button.pay span .icon{
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #38A91B;
    border-radius: 7px;
    -webkit-border-radius: 7px;
}
.modal .noData{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #201E1E;
    opacity: 0.5;
    margin-top: 45px;
    margin-bottom: 45px;
    display: flex;
    justify-content: center;
}
</style>