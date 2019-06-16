import store from '../store';

export default (to, from, next) => {
  let isAuth = !!store.getters.user;
  !isAuth ? next({ name: 'home' }) : next();
};
