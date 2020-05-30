import React from "react";
import { View } from "react-native";
import Renderer from "./components/Renderer";

export default function App() {
  let res = [];
  fetch("http://157.32.156.113:3000/notifications")
    .then(r=>{console.log(r)})
    .catch((err) => {
      console.log(err);
    });
  return <Renderer data={res} />;
}
