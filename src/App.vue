<template>
	<div id="app">
		<header-component></header-component>
		<router-view/>
		<basket-btn></basket-btn>
		<modals></modals>
	</div>
</template>

<script>
import HeaderComponent from '@/components/Header';
import BasketBtn from '@/components/BasketBtn';
import Modals from '@/components/Modals';

const App = {
	components: {
		HeaderComponent,
		BasketBtn,
		Modals
	},
	computed: {
		getActiveModal() {
			return this.$store.state.modals.activeModal;
		}
	},
	watch: {
		getActiveModal() {
			this.getActiveModal ? document.body.classList.add('modalActive') : document.body.classList.remove('modalActive');
		}
	}
};
export default App;
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
