import { React } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DataBinding } from "./components/data-binding/data-binding";
import { TwoWayDataBinding } from "./components/data-binding/data-binding-two-way";
import { DataBindingArray } from "./components/data-binding/data-binding-array";
import { DataBindingObject } from "./components/data-binding/data-binding-object";
import { DataBindingDate } from "./components/data-binding/data-binding-date";
import { Navbar } from "./Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<DataBinding />}></Route>
          <Route path={"/twowaybinding"} element={<TwoWayDataBinding />}></Route>
          <Route path={"/databindingarray"} element={<DataBindingArray />}></Route>
          <Route path={"/databindingobject"} element={<DataBindingObject />}></Route>
          <Route path={"/databindingdate"} element={<DataBindingDate />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
