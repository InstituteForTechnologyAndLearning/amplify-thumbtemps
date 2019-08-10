import Vue from 'vue';
import App from './views/App.vue';
import router from './router';
import store from './store';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import awsconfig from './aws-exports';
import VueMouseParallax from 'vue-mouse-parallax';
import Gravatar from 'vue-gravatar';
import Datetime from 'vue-datetime';
import 'vue-datetime/dist/vue-datetime.css';
import ZeitUI from '@zeit-ui/vue';
import '@zeit-ui/vue/dist/zeit-ui.css';
import './assets/styles/global.scss';

// overwrite auth type to IAM
awsconfig['aws_appsync_authenticationType'] = 'AWS_IAM';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;

Vue.use(AmplifyPlugin, AmplifyModules);
Vue.use(VueMouseParallax);
Vue.use(Datetime);
Vue.use(ZeitUI);

Vue.component('v-gravatar', Gravatar);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  ...App,
});
