import React from "react";
import { observer } from "mobx-react";
import { useStores } from "../stores";

const Home = observer(() => {
  const { UserStore } = useStores();
  console.log(useStores());
  return (
    <>
      <h1>Home</h1>
      {UserStore.currentUser ? (
        <h1>Hello {UserStore.currentUser.attributes.username}</h1>
      ) : (
        <h1>未登录</h1>
      )}
    </>
  );
});

export default Home;
