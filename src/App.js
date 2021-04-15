import React, { Suspense, lazy } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const History = lazy(() => import("./pages/History"));
const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

function App() {
  return (
    <>
      <Header />
      <main className="py-6 px-6">
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/history" exact component={History} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </Switch>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
