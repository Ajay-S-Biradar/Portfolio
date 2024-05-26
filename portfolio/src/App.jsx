import './App.css'
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import Socials from './components/Socials';

const AppLayout = ()=>{
    return(
      <>
        <Socials />
        <Outlet />
      </>
    )
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  )
}

export default App
