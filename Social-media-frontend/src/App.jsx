import './App.css'
import Registration from './pages/registration'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home';
import Login from './pages/login';
import NotLoggedInUser from './privetRouter/NotLoggedInUser';
import LoggedInUser from './privetRouter/LoggedInUser';
import RootLayout from './components/RootLayout';
import 'swiper/css';
import CreatPostPopup from './components/HomeComponents/PostHome/creatPostPopup';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route>
   
    <Route element={<LoggedInUser />}>
        <Route element={<RootLayout />}>
        
        <Route path='/' element={<Home />}></Route>

        </Route>
    </Route>



     <Route element={<NotLoggedInUser />}>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='/login' element={<Login />}></Route>
     </Route>

    </Route>
  )
);

function App() {

  return (
    <>
    <CreatPostPopup />
      <RouterProvider router={router} />
    </>
  )
}

export default App
