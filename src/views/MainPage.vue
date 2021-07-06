<template>
    <div class="homeOut">
		<div class="home" :class="{active: getBasket.chosedProducts.length > 0}">
			<h1>Микрозелень купить</h1>
			<ul class="cards">
				<li class="cardItem" v-for="(card, index) in cards" :key="index" @click="showCardDescModal(card, index, $event)">
					<div class="imgWrap">
						<img :src="card.imgSrc" alt="">
					</div>
					<div class="desc">
						<h2 class="title">{{card.title}}</h2>
						<div class="thereIs" :class="{empty: card.thereIs}">{{card.thereIs ? 'Есть в наличии' : 'Нет в наличии'}}</div>
						<button>
							<span class="noCounter" v-if="isInBasket(card)" @click="setBasketProduct(card, 'plus', index)">{{card.price}} {{getCurrencyFromStore()}}</span>
							<span class="counter" v-else>
								<div class="minus" @click="setBasketProduct(card, 'minus', index)">
									<svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M6.80952 0.19043H9.70593C10.4175 0.19043 11 0.788097 11 1.49995C11 2.21181 10.4175 2.80948 9.70593 2.80948H6.80952H4.19048H1.29407C0.582476 2.80948 0 2.21181 0 1.49995C0 0.788097 0.582476 0.19043 1.29407 0.19043H4.19048H6.80952Z" fill="#201E1E"/>
									</svg>									
								</div>
								<input type="number" inputmode="numeric" v-model="cardsCounter[index]" @blur="setBasketProduct(card, 'inputSave', index)">
								<div class="plus" @click="setBasketProduct(card, 'plus', index)">
									<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M9.70593 4.19048H6.80952V1.29407C6.80952 0.582476 6.21186 0 5.5 0C4.78814 0 4.19048 0.582476 4.19048 1.29407V4.19048H1.29407C0.582476 4.19048 0 4.78814 0 5.5C0 6.21186 0.582476 6.80952 1.29407 6.80952H4.19048V9.70593C4.19048 10.4175 4.78814 11 5.5 11C6.21186 11 6.80952 10.4175 6.80952 9.70593V6.80952H9.70593C10.4175 6.80952 11 6.21186 11 5.5C11 4.78814 10.4175 4.19048 9.70593 4.19048Z" fill="#201E1E"/>
									</svg>									
								</div>
							</span>
						</button>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
import {SET_BASKET_DATA} from '@/store/types.js';
import {SET_CARD_DESC_MODAL} from '@/store/types.js';
import {eventBus} from '@/main.js';
	
const MainPage = {
	data: () => ({
		cards: [],
		cardsCounter: [],
		canChange: false
	}),
	created() {
		this.cards = this.getCards;
	},
	mounted() {
		this.cards.forEach(() => {
			this.cardsCounter.push(0);
		});
		this.canChange = true;
		eventBus.$on('basketChange', ({item, type, index, addNum}) => this.setBasketProduct(item, type, index, addNum));
	},
	computed: {
		...mapGetters([
			'getBasket',
			'getCards'
		]),
	},
	watch: {
		cardsCounter: {
			deep: true,
			handler() {
				if (this.canChange) {
					this.cardsCounter.forEach((el, index) => {
						if (Number(el) > 0) {
							if (el.toString()[0] === '0') {
								this.cardsCounter[index] = Number(el.slice(1));
							} else if (Number(el) > 100) {
								this.cardsCounter[index] = Number(100);
							} else {
								this.cardsCounter[index] = Number(el);
							}
						} else {
							this.cardsCounter[index] = Number(0);
						}
					});
				}
			}
		}
	},
	methods: {
		...mapMutations({
			changeBasket: SET_BASKET_DATA,
			setCardDescModal: SET_CARD_DESC_MODAL
		}),
		showCardDescModal(item, index, ev) {
			let t = ev.target;
			console.log(t);
			if (!t.classList.contains('minus') && !t.classList.contains('plus') && t.tagName !== 'BUTTON' && t.tagName !== 'INPUT' && t.tagName !== 'path' && t.tagName !== 'SPAN' && t.tagName !== 'svg') {
				this.setCardDescModal({show: true, data: item, index: index});
			}
		},
		isInBasket(card) {
			return this.getBasket.chosedProducts.filter(el => el.el.id === card.id).length === 0;
		},
		getBasketCount(card) {
			let product = this.getBasket.chosedProducts[this.getProductIndex(card)];
			return product ? product.productCount : 0;
		},
		getProductIndex(item) {
			return this.getBasket.chosedProducts.findIndex(el => el.el.id === item.id)
		},
		setBasketProduct(item, type = 'plus', counterIndex, addNum = null) {
			let productCount = this.getBasket.chosedProducts.filter(el => el.el.id === item.id).length;
			if (type === 'plus') {
				if (productCount === 0) {
					this.changeBasket({chosedProducts: this.getBasket.chosedProducts.push({el: item, productCount: 1})})
					this.cardsCounter[counterIndex] = 1;
				} else {
					let index = this.getProductIndex(item),
						newProductList = this.getBasket.chosedProducts;
					newProductList[index].productCount += 1;
					if (newProductList[index].productCount <= 100) {
						this.changeBasket({chosedProducts: newProductList});
						this.cardsCounter[counterIndex] = newProductList[index].productCount;
					}
				}
			} else if (type === 'minus') {
				if (this.getBasket.chosedProducts[this.getProductIndex(item)].productCount === 1) {
					this.changeBasket({chosedProducts: this.getBasket.chosedProducts.splice(this.getProductIndex(item), 1)});
					this.cardsCounter[counterIndex] = 0;
				} else {
					let index = this.getProductIndex(item),
						newProductList = this.getBasket.chosedProducts;
					newProductList[index].productCount -= 1;
					this.changeBasket({chosedProducts: newProductList});
					this.cardsCounter[counterIndex] = newProductList[index].productCount;
				}
			} else if (type === 'inputSave') {
				if (Number(this.cardsCounter[counterIndex]) === 0) {
					this.changeBasket({chosedProducts: this.getBasket.chosedProducts.splice(this.getProductIndex(item), 1)});
				} else {
					let index = this.getProductIndex(item),
						newProductList = this.getBasket.chosedProducts;
					newProductList[index].productCount = Number(this.cardsCounter[counterIndex]);
					this.changeBasket({chosedProducts: newProductList});
				}
			} else if (type === 'addProduct') {
				this.cardsCounter[counterIndex] = this.cardsCounter[counterIndex] + Number(addNum) > 100 ? 100 : this.cardsCounter[counterIndex] + Number(addNum);
				let index = this.getProductIndex(item),
					newProductList = this.getBasket.chosedProducts;
				if (index === -1) {
					newProductList = [{el: item, productCount: Number(this.cardsCounter[counterIndex])}];
					this.changeBasket({chosedProducts: this.getBasket.chosedProducts.push({el: item, productCount: addNum})});
				} else {
					newProductList[index].productCount = Number(this.cardsCounter[counterIndex]);
					this.changeBasket({chosedProducts: newProductList});
				}
			}
			this.$forceUpdate();
		}
	}
}

export default MainPage;
</script>

<style scoped>
.homeOut{
	position: fixed;
    bottom: 0;
    top: 0;
	padding-top: 85px;
    overflow-y: scroll;
	width: 100%;
	left: 0;
	right: 0;
	max-height: 100%;
}
.home{
	padding-top: 40px;
	background: #F9F9F9;
	padding-left: 23px;
	padding-right: 23px;
	transition: .2s;
	max-width: 1200px;
    margin: auto;
}
.home.active{
	margin-bottom: 121px;
}
.home h1{
	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 26px;
	line-height: 32px;
	text-align: left;
	color: #201E1E;
}
.home .cards{
	margin-top: 35px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.home .cards .cardItem{
	width: calc(50% - 7px);
	margin-bottom: 15px;
	background: #fff;
	background: #FFFFFF;
	box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.03);
	-webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.03);
	border-radius: 18px;
	-webkit-border-radius: 18px;
	overflow: hidden;
	cursor: pointer;
}
.home .cards .cardItem .imgWrap img{
	width: 100%;
	min-height: 145px;
	object-fit: cover;
}
.home .cards .cardItem .desc{
	height: 144px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	position: relative;
}
.home .cards .cardItem .desc .title{
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;
	display: flex;
	align-items: center;
	text-align: center;
}
.home .cards .cardItem .desc .thereIs{
	font-family: Roboto;
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 14px;
	color: #A2A1A1;
	margin-top: 8px;
	margin-bottom: 45px;
}
.home .cards .cardItem .desc button{
	margin-top: 24px;
	height: 45px;
	width: calc(100% - 20px);
	border: 0;
	outline: 0;
	background: #F9F9F9;
	border-radius: 13px;
	-webkit-border-radius: 13px;
	padding-left: 17px;
	padding-right: 17px;
	position: absolute;
	bottom: 10px;
	left: 10px;
	right: 10px;
	cursor: pointer;
}
.home .cards .cardItem .desc button span,
.home .cards .cardItem .desc button span.counter input{
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	color: #201E1E;
}
.home .cards .cardItem .desc button span.noCounter{
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
}
.home .cards .cardItem .desc button span.counter{
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.home .cards .cardItem .desc button span.counter .minus,
.home .cards .cardItem .desc button span.counter .plus{
	display: flex;
	justify-content: center;
	align-items: center;
}
.home .cards .cardItem .desc button span.counter input{
	border: 0;
	outline: 0;
	background: transparent;
	width: 50px;
	text-align: center;
}
@media screen and (min-width: 700px) {
	.home .cards{
		justify-content: flex-start;
	}
	.home .cards .cardItem{
		width: calc(33.33% - 10px);
		margin-left: 0;
		margin-right: 0;
	}
	.home .cards .cardItem{
		margin-left: 15px;
		margin-right: 15px;
	}
	.home .cards .cardItem:nth-child(1n){
		margin-left: 0;
	}
	.home .cards .cardItem:nth-child(3n){
		margin-left: 0;
		margin-right: 0;
	}
	.home .cards .cardItem .desc button{
		max-width: 155px;
		margin-left: auto;
		margin-right: auto;
	}
}
@media screen and (min-width: 1200px) {
	.home{
		padding-left: 0;
		padding-right: 0;
	}
}
</style>