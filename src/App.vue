<template>
	<div id="app">
		<header-component></header-component>
		<router-view/>
		<basket-btn></basket-btn>
	</div>
</template>

<script>
import HeaderComponent from '@/components/Header';
import BasketBtn from '@/components/BasketBtn';

const App = {
	components: {
		HeaderComponent,
		BasketBtn
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

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
