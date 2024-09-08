import { useState } from "react";

export function DataBindingState() {
  var products = ["Samsung TV- 5600.44", "IPhone -5666.89"];
  var [tv, mobile] = products;

  const [getter, setter] = useState("Anil");
  return (
    <>
      {tv}
      {mobile}
      Hello ! {getter}
    </>
  );
}
