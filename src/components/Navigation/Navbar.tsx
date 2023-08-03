import React from "react";

import { NavLink } from "react-router-dom";
import { Routes } from "../../data/Routes";
import moment from "moment";
import "moment/locale/fr";
import { SunIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";

const listRoutes = Routes.map((route, index) => (
  <NavLink
    to={route.path}
    className={({ isActive }) => (isActive ? "text-blue-500" : "")}
    key={index}
  >
    <div className="uppercase hover:text-blue-400 duration-150 h-16 flex items-center font-semibold">
      {route.label}
    </div>
  </NavLink>
));

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 bg-white z-40 h-12">
      <NavLink to="/" className="border-b-4 border-transparent mx-4">
        <div className="flex items-center">
          <SunIcon boxSize={8} color="orange" />
          <Text fontSize={22} className="pl-2">
            MyWeather
          </Text>
        </div>
      </NavLink>
      {/* <div className="lg:block w-full max-lg:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between ">
            <div className="flex space-x-8 flex-wrap">{listRoutes}</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
