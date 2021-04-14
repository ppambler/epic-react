import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";
import InfiniteScroll from "react-infinite-scroller";
import { List, Spin } from "antd";
import styled from "styled-components";

const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px solid #eee;
`;

const LinkContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 500px;
`;

const TitleContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  h5 {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
  }
`;

const InfiniteContainer = styled.div`
  height: 60vh;
  padding: 8px 12px 8px 0;
  overflow: auto;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
`;

const LoadingContainer = styled.div`
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
`;

const Component = observer(() => {
  const { HistoryStore } = useStores();

  const loadMore = () => {
    HistoryStore.find();
  };

  useEffect(() => {
    console.log(1);
    return () => {
      console.log("卸载");
      HistoryStore.reset();
    };
  }, []);

  return (
    <InfiniteContainer>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={loadMore}
        hasMore={!HistoryStore.isLoading && HistoryStore.hasMore}
        useWindow={true}
      >
        <List
          dataSource={HistoryStore.list}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <div>
                <Img
                  src={item.attributes.url.attributes.url}
                  style={{ height: "100px" }}
                  alt=""
                />
              </div>
              <TitleContainer>
                <h5>{item.attributes.filename}</h5>
              </TitleContainer>
              <LinkContainer>
                <a
                  target={"_blank"}
                  href={item.attributes.url.attributes.url}
                  rel="noreferrer noopener"
                >
                  {item.attributes.url.attributes.url}
                </a>
              </LinkContainer>
            </List.Item>
          )}
        >
          {HistoryStore.isLoading && HistoryStore.hasMore && (
            <LoadingContainer>
              <Spin tip={"加载中"} />
            </LoadingContainer>
          )}
        </List>
      </InfiniteScroll>
    </InfiniteContainer>
  );
});

export default Component;
