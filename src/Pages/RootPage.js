import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import SimpleBottomNavigation from "../components/SimpleBottomNavigation";
function RootPage() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </>
  );
}

export default RootPage;
