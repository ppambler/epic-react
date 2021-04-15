import { observable, action, makeObservable } from "mobx";
import { Auth } from "../models";

class UserStore {
  constructor() {
    makeObservable(this);
  }
  @observable currentUser = null;

  @action pullUser() {
    this.currentUser = Auth.getCurrentUser();
  }

  @action resetUser() {
    this.currentUser = null;
  }
}

const userStore = new UserStore()

userStore.pullUser()

export default userStore;
