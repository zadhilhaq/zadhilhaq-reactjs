import * as React from "react";
import { Routes, Route, Outlet, BrowserRouter } from "react-router-dom";
import ValiationForm from "../Form/Pembahasan/Validation";
import DataFetching from "../Hooks/Pembahasan/Hooks";
import Komponen from "../Komponen";
import LifecycleComponent from "../LifecycleComponent/Pembahasan/LifecycleComponent";
import Styling from "../Styling";
import Home from "./Home";
// import ValiationForm from "../Form/Pembahasan/Validation";
// import Hooks from "../Hooks";
import Navigation from "./Navigation";

const Routing = () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation />
            <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/lifecycle' element={<LifecycleComponent />} />
        <Route path='/komponen' element={<Komponen />} />
        <Route path='/datafetching' element={<DataFetching />} />
        <Route path='/form' element={<ValiationForm />} />
        <Route path='/styling' element={<Styling />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path='/about'>
          <ValiationForm />
            </Route>
          <Route path='/dashboard'>
          <Hooks />
          </Route> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>
      </BrowserRouter>
      <Outlet />
      
        </div>
    )
}
export default Routing