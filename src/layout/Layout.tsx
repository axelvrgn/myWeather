import React from "react";
import Navbar from "../components/Navigation/Navbar";

type layoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: layoutProps) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;

type PageContainerProps = {
  children: JSX.Element | JSX.Element[];
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="page-container mx-auto">{children}</div>;
};
