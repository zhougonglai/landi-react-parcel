import {observable, action} from 'mobx';

export class Todo {
  id = Math.random();
  @observable title = '';
  @observable finished = false;
}

export default class Store {
  static instance;
  @observable list = [];
  @observable user = {};

  static getInstance = () => Store.instance || (Store.instance = new Store());

  @action setUser (user) {
    this.user = user;
  }

  @action addItem (item) {
    this.list.concat([item]);
  }

  @action onUserChange(account) {
    this.user.account = account;
  }

  fetchUser (phone, password) {
    return {phone, password};
  }
}
