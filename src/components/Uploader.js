import React, { useRef } from "react";
import { useStores } from "../stores";
import { Observer, useLocalObservable } from "mobx-react";

import { Upload, message, Spin } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import styled from "styled-components";

const { Dragger } = Upload;

const Result = styled.div`
  padding: 20px;
  margin-top: 30px;
  border: 1px dashed #ccc;
`;

const H1 = styled.h1`
  margin: 20px 0;
  text-align: center;
`;

const Image = styled.img`
  max-width: 300px;
`;

const StyledInput = styled.input`
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 2px 4px;
  &:focus {
    border-color: #66afe9;
    outline: 0;
  }
`;

const Component = () => {
  const { ImageStore, UserStore } = useStores();

  const props = {
    showUploadList: false,
    beforeUpload: (file) => {
      ImageStore.setFile(file);
      ImageStore.setFilename(file.name);
      if (UserStore.currentUser === null) {
        message.warning("请先登录再上传，谢谢！", 3);
        return false;
      }
      // 判断图片类型
      if (!/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(file.type)) {
        message.error("只能上传 png/svg/jpg/gif 格式的图片");
        return false;
      }

      // 判断图片大小
      if (file.size > 1024 * 1024) {
        message.error("图片最大为 1M");
        return false;
      }
      ImageStore.upload()
        .then((serverFile) => {
          console.log("上传成功", serverFile);
        })
        .catch((err) => {
          console.log("上传失败");
          console.log(err);
        });
      return false;
    },
  };

  const ref1 = useRef();
  const ref2 = useRef();

  // 使用 mobx-react-lite 定义本地数据
  const store = useLocalObservable(() => ({
    width: "",
    setWidth(width) {
      store.width = width;
    },
    get widthStr() {
      return store.width ? `/w/${store.width}` : "";
    },
    height: "",
    setHeight(height) {
      store.height = height;
    },
    get heightStr() {
      return store.height ? `/h/${store.height}` : "";
    },
    get fullStr() {
      return (
        ImageStore.serverFile.attributes.url.attributes.url +
        "?imageView2/0" +
        store.widthStr +
        store.heightStr
      );
    },
  }));
  console.log("store：", store);
  const bindWidthChange = () => {
    store.setWidth(ref1.current.value);
  };

  const bindHeightChange = () => {
    store.setHeight(ref2.current.value);
  };
  return (
    <Observer>
      {() => {
        return (
          <div>
            <Spin tip="上传中" spinning={ImageStore.isUploading}>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">点击或拖拽上传图片</p>
                <p className="ant-upload-hint">
                  图片仅支持 .png/.gif/.jpg/.jpeg/.svg
                  图片的格式，且大小不可大于 1M
                </p>
              </Dragger>
            </Spin>
            {ImageStore.serverFile ? (
              <Result>
                <H1>上传结果</H1>
                <dl>
                  <dt>线上地址</dt>
                  <dd>
                    <a
                      target="_blank"
                      href={ImageStore.serverFile.attributes.url.attributes.url}
                      rel="noreferrer noopener"
                    >
                      {ImageStore.serverFile.attributes.url.attributes.url}
                    </a>
                  </dd>
                  <dt>文件名</dt>
                  <dd>{ImageStore.filename}</dd>
                  <dt>文件预览</dt>
                  <dd>
                    <Image
                      src={ImageStore.serverFile.attributes.url.attributes.url}
                      alt=""
                    />
                  </dd>
                  <dt>更多尺寸</dt>
                  <dd>
                    <StyledInput
                      type="text"
                      onChange={bindWidthChange}
                      ref={ref1}
                      placeholder="最大宽度（可选）"
                    />
                    <StyledInput
                      className="input2"
                      type="text"
                      onChange={bindHeightChange}
                      ref={ref2}
                      placeholder="最大高度（可选）"
                    />
                  </dd>
                  <dd>
                    <a
                      target="_blank"
                      href={store.fullStr}
                      rel="noreferrer noopener"
                    >
                      {store.fullStr}
                    </a>
                  </dd>
                </dl>
              </Result>
            ) : null}
          </div>
        );
      }}
    </Observer>
  );
};

export default Component;
