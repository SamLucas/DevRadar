import React from "react";
import { StatusBar } from "react-native";
import Routes from "./src/routes";

export default function pages() {
  return (
    <>
      <StatusBar backgroundColor="#7D40E7" barStyle="light-content" />
      <Routes />
    </>
  );
}
