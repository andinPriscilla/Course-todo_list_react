import React from "react";

import MyProvider from "./context/MyProvider";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <MyProvider>
      <main>
        <Header />
        <Section />
        <Footer />
      </main>
    </MyProvider>
  );
};

export default App;
