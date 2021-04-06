import { makeObservable, observable, action } from "mobx";

class AuthStore {
  constructor() {
    makeObservable(this);
  }
  @observable isLogin = false;
  @observable isLoading = false;
  @observable values = {
    username: "xxx",
    password: "123456",
  };

  @action setIsLogin(isLogin) {
    this.isLogin = isLogin;
  }

  @action setUsername(username) {
    this.values.username = username;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  @action login() {
    console.log("登录中...");
    this.isLoading = true;
    setTimeout(() => {
      console.log("登陆成功");
      this.isLogin = true;
      this.isLoading = false;
    }, 1000);
  }

  @action logout() {
    console.log("已注销");
  }

  @action register() {
    console.log("注册中...");
    this.isLoading = true;
    setTimeout(() => {
      console.log("注册成功");
      this.isLogin = true;
      this.isLoading = false;
    }, 1000);
  }
}

export {AuthStore}