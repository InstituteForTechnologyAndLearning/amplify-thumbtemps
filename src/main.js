import Vue from 'vue';
import App from './views/App.vue';
import router from './router';
import store from './store';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';
import ZeitUI from '@zeit-ui/vue';
import '@zeit-ui/vue/dist/zeit-ui.css';
import './assets/styles/global.scss';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(ZeitUI);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  ...App
});
