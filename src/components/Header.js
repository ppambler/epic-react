import React, { useState, useEffect } from "react";
import LogoUrl from "../common/assets/logo.svg";
import closeUrl from "../common/assets/close.svg";
import openUrl from "../common/assets/open.svg";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { useStores } from "../stores";
import { observer } from "mobx-react";
import { debounce } from "../tools/index";

const classMap = {
  header:
    "flex flex-wrap flex-row justify-between md:items-center md:space-x-4 bg-white py-6 px-6 relative",
  logoLink: "block",
  logoText: "sr-only",
  logoImg: "h-6 md:h-8",
  hamburger:
    "inline-block md:hidden w-8 h-8 rounded bg-white text-blue-300 p-1",
  nav:
    "absolute md:relative top-16 left-0 md:top-0 z-20 md:flex flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-white shadow-md rounded-lg md:rounded-none md:shadow-none md:bg-transparent p-6 pt-0 md:p-0",
  link: "block py-1 text-gray-600 hover:underline",
  active: "text-blue-400",
};

const Logo = styled.img`
  @media (max-width: 768px) {
    position: relative;
    top: 3px;
  }
`;

const StyledLink = styled(NavLink)``;

const Login = styled.div``;
const StyleButton = styled(Button)`
  border-radius: 0.25rem;
`;

const Component = observer(() => {
  const history = useHistory();
  const { UserStore, AuthStore } = useStores();
  const [hidden, setHidden] = useState(false);

  const handleLogout = () => {
    AuthStore.logout();
    console.log("用户注销");
    history.push("/");
  };

  const handleLogin = () => {
    console.log("跳转到登录页面");
    isHidden(true);
    history.push("/login");
  };

  const handleRegister = () => {
    console.log("跳转到注册页面");
    isHidden(true);
    history.push("/register");
  };

  const isHidden = (xx) => {
    if (xx === true) {
      setHidden(true);
    } else {
      setHidden(!hidden);
    }
  };

  window.addEventListener(
    "resize",
    debounce(() => {
      if (document.documentElement.clientWidth < 768) {
        isHidden(true);
      }
    }, 100)
  );

  useEffect(() => {
    isHidden(true);
  }, []);
  return (
    <header className={classMap.header}>
      <a
        className={classMap.logoLink}
        onClick={() => {
          isHidden(true);
          history.push("/");
        }}
      >
        <Logo className={classMap.logoImg} src={LogoUrl} alt="" />
      </a>
      <button id="hamburger" className={classMap.hamburger} onClick={isHidden}>
        {hidden ? (
          <img src={openUrl} alt="" />
        ) : (
          <img src={closeUrl} alt="" />
        )}
      </button>
      <nav className={`${classMap.nav} ${hidden ? "hidden" : ""}`}>
        <StyledLink
          className={classMap.link}
          to="/"
          activeClassName={classMap.active}
          exact
          onClick={() => {
            isHidden(true);
          }}
        >
          首页
        </StyledLink>
        <StyledLink
          className={classMap.link}
          to="/history"
          activeClassName={classMap.active}
          onClick={() => {
            isHidden(true);
          }}
        >
          上传历史
        </StyledLink>
        <StyledLink
          className={classMap.link}
          to="/about"
          activeClassName={classMap.active}
          onClick={() => {
            isHidden(true);
          }}
        >
          关于我
        </StyledLink>
        <Login>
          {UserStore.currentUser ? (
            <>
              <span className="mr-1">
                {UserStore.currentUser.attributes.username}
              </span>
              <StyleButton type="primary" onClick={handleLogout}>
                注销
              </StyleButton>
            </>
          ) : (
            <>
              <StyleButton
                className="mr-1"
                type="primary"
                onClick={handleLogin}
              >
                登录
              </StyleButton>
              <StyleButton type="primary" onClick={handleRegister}>
                注册
              </StyleButton>
            </>
          )}
        </Login>
      </nav>
    </header>
  );
});

export default Component;
