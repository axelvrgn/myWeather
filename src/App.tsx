import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./view/HomeView";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <Layout>
                <HomeView />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
