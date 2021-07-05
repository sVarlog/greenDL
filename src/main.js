import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import Vuex from 'vuex';
import store from '@/store/index.js';

export const eventBus = new Vue();

Vue.config.productionTip = false;

Vue.use(Vuex);

Vue.mixin({
    methods: {
        convertTimeCss() {
            return `${(this.$store.state.modals.modalsTimeShow / 1000) % 1}s`;
        },
        getCurrencyFromStore() {
			return this.$store.state.currency;
		}
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')