import React from "react";
import { useSelector } from "react-redux";

export default function AppContainer() {
  const appState = useSelector(state => state.app);
  console.log(appState);
  return <div>Hello world!</div>;
}
