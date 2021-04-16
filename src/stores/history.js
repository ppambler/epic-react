import { observable, action, makeObservable } from "mobx";
import { Uploader } from "../models";
import { message } from "antd";

class HistoryStore {
  constructor() {
    makeObservable(this);
  }
  @observable list = [];
  @observable isLoading = false;
  @observable hasMore = true;
  @observable page = 0;
  limit = 10;

  @action append(newList) {
    this.list = this.list.concat(newList);
  }

  @action find() {
    this.isLoading = true;
    console.log('find...')
    Uploader.find({ page: this.page, limit: this.limit })
      .then((newList) => {
        this.append(newList);
        this.page++;
        if (newList.length < this.limit) {
          this.hasMore = false;
        }
      })
      .catch((error) => {
        message.error("加载数据失败", error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  @action reset() {
    this.list = [];
    this.isLoading = false;
    this.hasMore = true;
    this.page = 0;
  }

  @action delete(id) {
    return new Promise((resolve,reject)=>{
      Uploader.deleteItem(id)
        .then((results)=>{
          console.log(`删除 id 为${id}的元素`)
          message.success('图片删除成功')
          resolve(results)
        })
        .catch(error => message.error('删除元素失败'))
    })
  }
}

export default new HistoryStore();
