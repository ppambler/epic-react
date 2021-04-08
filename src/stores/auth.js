import { makeObservable, observable, action } from "mobx";
import {Auth} from '../models'
import UserStore from './user'

window.x = UserStore

class AuthStore {
  constructor() {
    makeObservable(this);
  }
  @observable values = {
    username: "",
    password: "",
  };

  @action setUsername(username) {
    this.values.username = username;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  // 登录
  @action login() {
    console.log("登录中...");
    const {username,password} = this.values
    return new Promise((resolve,reject)=>{
      Auth.login(username,password).then(user=>{
        console.log('登录成功')
        UserStore.pullUser()
        resolve(user)
      }).catch(err=>{
        console.log('登录失败')
        UserStore.resetUser()
        reject(err)
      })
    })
  }

  @action logout() {
    console.log("已注销");
    Auth.logout()
    UserStore.resetUser()
  }

  @action register() {
    console.log("注册中...");
    const {username,password} = this.values
    return new Promise((resolve,reject)=>{
      Auth.register(username,password).then(user=>{
        console.log('注册成功')
        UserStore.pullUser()
        resolve(user)
      }).catch(err=>{
        console.log('注册失败')
        UserStore.resetUser()
        reject(err)
      })
    })
  }
}

export default new AuthStore