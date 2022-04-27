
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddService from './Pages/AddService/AddService';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageServices from './Pages/ManageServices/ManageServices';
import NotFound from './Pages/NotFound/NotFound';
import Orders from './Pages/Orders/Orders';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>

      <Header />

      <Routes>
        <Route path='/' element={
          <Home ></Home>
        }></Route>
        <Route path='/home' element={
          <Home ></Home>
        }></Route>
        <Route path="/service/:serviceId" element={<ServiceDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/checkout/:serviceId' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        }></Route>

        <Route path='/addservice' element={
          <RequireAuth>
            <AddService />
          </RequireAuth>
        }></Route>

        <Route path='/manage' element={
          <RequireAuth>
            <ManageServices />
          </RequireAuth>
        }></Route>

        <Route path='/orders' element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>

      </Routes>

      <Footer />
      <ToastContainer />

    </div>
  );
}

export default App;
