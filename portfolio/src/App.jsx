import './App.css';
import { Outlet, RouterProvider, createBrowserRouter, useLocation, useOutlet } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import MySkills from './pages/MySkills';
import { AnimatePresence } from 'framer-motion';
import MyWorks from './pages/Works';
import AboutMe from './pages/AboutMe';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './constants/util';
import { PacmanLoader } from 'react-spinners'

const AppLayout = () => {
  const [loader, setLoader] = useState(true);
  const location = useLocation();
  const element = useOutlet();

  const checkApi = async()=>{
    const res =await axios.get(API_URL);
    console.log(res);
    if(res.status===200) setLoader(false);
  }

  useEffect(()=>{
    setTimeout(() => {
      checkApi();
    }, 2000);
  },[]);

  return (
    <>
      {loader? 
      <div className='flex w-full h-[100vh] justify-center items-center bg-slate-200'>
        <PacmanLoader />
      </div>
      :
      <>
        <Navbar />
        <AnimatePresence mode="wait" initial={true}>
          {element && React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </>
      }
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/works',
        element: <MyWorks />
      },
      {
        path: '/skills',
        element:<MySkills />
      },
      {
        path: '/aboutme',
        element: <AboutMe />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;
