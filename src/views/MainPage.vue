<template>
    <div class="home">
		<h1>Микрозелень купить</h1>
		<ul class="cards">
			<li class="cardItem" v-for="(card, index) in cards" :key="index">
				<div class="imgWrap">
					<img :src="card.imgSrc" alt="">
				</div>
				<div class="desc">
					<h2 class="title">{{card.title}}</h2>
					<div class="thereIs" :class="{empty: card.thereIs}">{{card.thereIs ? 'Есть в наличии' : 'Нет в наличии'}}</div>
					<button @click="addToBasket(card)">
						<span v-if="isInBasket(card) === 0">{{card.price}} {{card.currency}}</span>
						<span class="counter" v-else>
							<div class="minus">
								<svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M6.80952 0.19043H9.70593C10.4175 0.19043 11 0.788097 11 1.49995C11 2.21181 10.4175 2.80948 9.70593 2.80948H6.80952H4.19048H1.29407C0.582476 2.80948 0 2.21181 0 1.49995C0 0.788097 0.582476 0.19043 1.29407 0.19043H4.19048H6.80952Z" fill="#201E1E"/>
								</svg>									
							</div>
							{{isInBasket(card)}}
							<div class="plus">
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
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
import {SET_BASKET_DATA} from '@/store/types.js';
	
const MainPage = {
	data: () => ({
		cards: [
			{id: 1, title: 'Мелисса', thereIs: true, price: 199, currency: '₽', imgSrc: '/img/cardImg.jpg'},
			{id: 2, title: 'Лук Альпийский', thereIs: false, price: 215, currency: '₽', imgSrc: '/img/cardImg.jpg'},
			{id: 3, title: 'Капуста красная', thereIs: true, price: 99, currency: '₽', imgSrc: '/img/cardImg.jpg'},
			{id: 4, title: 'Красный Альпийский лук', thereIs: true, price: 140, currency: '₽', imgSrc: '/img/cardImg.jpg'},
			{id: 5, title: 'Мелисса Свежая', thereIs: true, price: 650, currency: '₽', imgSrc: '/img/cardImg.jpg'},
			{id: 6, title: 'Морковь', thereIs: false, price: 310, currency: '₽', imgSrc: '/img/cardImg.jpg'},
		]
	}),
	computed: {
		...mapGetters([
			'getBasket'
		]),
	},
	methods: {
		...mapMutations({
			changeBasket: SET_BASKET_DATA
		}),
		isInBasket(card) {
			return this.getBasket.chosedProducts.filter(el => el.id === card.id).length;
		},
		addToBasket(item) {
			this.changeBasket({chosedProducts: this.getBasket.chosedProducts.push(item)})
		}
	}
}

export default MainPage;
</script>

<style scoped>
.home{
	margin-top: 85px;
	padding-top: 40px;
	background: #F9F9F9;
	padding-left: 23px;
	padding-right: 23px;
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
}
.home .cards .cardItem .imgWrap img{
	width: 100%;
	height: 145px;
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
}
.home .cards .cardItem .desc button span{
	font-family: Roboto;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	color: #201E1E;
}
.home .cards .cardItem .desc button span.counter{
	display: flex;
	align-items: center;
	justify-content: space-between;

}
</style>