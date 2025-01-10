import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ChangeAdForm from "./components/ChangeAdForm/ChangeAdForm";
const Messages=React.lazy(()=> import("./components/Messages/Messages"));
const InfoHeadlight=React.lazy(()=> import("./components/InfoHeadlight/InfoHeadlight"));
const AdvertForm=React.lazy(() => import('./components/AdvertForm/AdvertForm'));
const HeadLightsListAdmin=React.lazy(()=> import('./components/HeadLightsListAdmin/HeadLightsListAdmin'));
const App=()=>{

  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/addAdvert' element={<AdvertForm/>} />
        <Route path='/headlightslist' element={<HeadLightsListAdmin/>} />
        <Route path='/headlightslist/:advertId' element={<InfoHeadlight/>} />
        <Route path="/edit/:id" element={<ChangeAdForm />} />
        <Route path='/messages' element={<Messages/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </div>
  );
}


export default App;