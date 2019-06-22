import store from '../store';

const alert = {
  type: 'danger',
  text: 'Permission denied'
};

export default (to, from, next) => {
  let groups = store.getters['user/groups'];
  let isAdmin = groups.indexOf('admin') !== -1;

  if (!isAdmin) {
    store.dispatch('alert/add', alert);
    next({ name: 'home' });
  }

  next();
};
