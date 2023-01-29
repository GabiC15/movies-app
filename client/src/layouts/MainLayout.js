import React from "react";
import CommonAppBar from "../components/AppBar";
import Footer from "./../components/Footer";

export default function MainLayout(props) {
  return (
    <>
      <CommonAppBar />
      {props.children}
      <Footer />
    </>
  );
}
