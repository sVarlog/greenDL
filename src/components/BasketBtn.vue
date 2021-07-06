<template>
    <div class="btnWrap">
        <div class="button" :class="{active: Number(getTotalCount) > 0}" @click="setBasketModal({show: true})">
            <div class="center">
                <h2>Ваш заказ</h2>
                <div class="row">
                    <span class="counter">{{getTotalCount}} шт</span>
                    <span class="price">{{getSpaceNum(getTotalSum)}} {{$store.state.currency}}</span>
                </div>
            </div>
            <div class="rigth">
                <div class="svgWrap">
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7119 5.4612L8.70418 0.453348C8.56123 0.310398 8.3707 0.231934 8.16755 0.231934C7.96418 0.231934 7.77377 0.310511 7.63082 0.453348L7.17615 0.908125C7.03331 1.05085 6.95462 1.24149 6.95462 1.44475C6.95462 1.6479 7.03331 1.84496 7.17615 1.98769L10.0976 4.91556H0.816027C0.39755 4.91556 0.0668945 5.24317 0.0668945 5.66176V6.3047C0.0668945 6.72329 0.39755 7.08393 0.816027 7.08393H10.1307L7.17626 10.0281C7.03343 10.1711 6.95474 10.3565 6.95474 10.5598C6.95474 10.7628 7.03343 10.951 7.17626 11.0938L7.63093 11.5472C7.77388 11.6901 7.96429 11.768 8.16767 11.768C8.37082 11.768 8.56134 11.6891 8.70429 11.5461L13.712 6.5384C13.8553 6.395 13.9341 6.20357 13.9336 6.00008C13.934 5.79592 13.8553 5.60438 13.7119 5.4612Z" fill="white"/>
                    </svg>
                </div>
                <span>далее</span>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';
import {SET_BASKET_MODAL} from '@/store/types';

const BasketBtn = {
    computed: {
        ...mapGetters([
            'getBasket'
        ]),
        getTotalCount() {
            let counter = 0;
            this.getBasket.chosedProducts.forEach(el => counter += Number(el.productCount));
            return counter;
        },
        getTotalSum() {
            let sum = 0;
            this.getBasket.chosedProducts.forEach(el => sum += Number(el.el.price) * Number(el.productCount));
            return sum;
        }
    },
    methods: {
        ...mapMutations({
            setBasketModal: SET_BASKET_MODAL
        })
    }
}
export default BasketBtn;
</script>

<style scoped>
.btnWrap{
    position: fixed;
    bottom: 37px;
    left: 15px;
    right: 15px;
    width: calc(100% - 30px);
    display: flex;
    justify-content: center;
}
.button{
    width: 100%;   
    height: 78px;
    background: #4BCE2A;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    display: flex;
    justify-content: center;
    opacity: 0;
    transition: .2s;
    z-index: -1;
    pointer-events: none;
    max-width: 455px;
    position: relative;
    cursor: pointer;
}
.button.active{
    opacity: 1;
    z-index: 10;
    pointer-events: auto;
}
.button .rigth{
    position: absolute;
    right: 20px;
    height: calc(100% - 30px);
    top: 15px;
    bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.button .rigth .svgWrap{
    height: 26px;
    width: 26px;
    background: #38A91B;
    border-radius: 7px;
    -webkit-border-radius: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.button .rigth span{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;
}
.button .center{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.button .center h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    color: #fff;
}
.button .center .row{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 9px;
}
.button .center .row span.counter{
    margin-right: 18px;
}
.button .center .row span{
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
}
</style>