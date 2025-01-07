import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
const AdminPanel=React.lazy(() => import('./pages/AdminPanel/AdminPanel'));
const AdvertForm=React.lazy(() => import('./components/AdvertForm/AdvertForm'));
const HeadLightsListAdmin=React.lazy(()=> import('./components/HeadLightsListAdmin/HeadLightsListAdmin'));
const App=()=>{

  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/admin' element={<AdminPanel/>}>
        <Route path='addAdvert' element={<AdvertForm/>} />
        <Route path='headlightslist' element={<HeadLightsListAdmin/>} />
          <Route path='*' element={<h1>404 Not Found</h1>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}


export default App;