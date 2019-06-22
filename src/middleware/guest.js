import store from '../store';

export default (to, from, next) => {
  let isAuth = !!store.state.user.isAuthenticated;
  !isAuth ? next({ name: 'home' }) : next();
};
