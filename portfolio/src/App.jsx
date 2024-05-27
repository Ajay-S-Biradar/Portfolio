import './App.css';
import { Outlet, RouterProvider, createBrowserRouter, useLocation, useOutlet } from 'react-router-dom';
import Home from './pages/Home';
import Socials from './components/Socials';
import Navbar from './components/Navbar';
import Works from './pages/Works';
import { AnimatePresence } from 'framer-motion';
import MySkills from './pages/MySkills';
import AboutMe from './pages/AboutMe';
import React from 'react';

const AppLayout = () => {
  const location = useLocation();
  const element = useOutlet();
  return (
    <>
      <Navbar />
      <Socials />
      <AnimatePresence mode="wait" initial={true}>
        {element && React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
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
        element: <Works />
      },
      {
        path: '/skills',
        element: <MySkills />
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
