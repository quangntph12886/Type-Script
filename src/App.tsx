import { useEffect, useState } from 'react'
import './App.css'
import { add, list } from './api/product';
import { Navigate,NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './pages/layout/WebsiteLayout';
import AdminLayout from './pages/layout/AdminLayout';
import List from './pages/admin/product/List';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import Add from './pages/admin/product/add';
import UpdateProduct from './pages/admin/product/update';
import { Home } from './pages/Home';
import Detail from './pages/Detail'
function App() {

  return (
    <div className="App">
        <main>
          <Routes>
            <Route path='' element={<WebsiteLayout/>}>
              <Route index element={<Navigate to="/home" />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/home/:id" element={<Detail />}/>
            </Route>

            <Route path='admin' element={<AdminLayout/>}>
              <Route path="product/list" element={<List />}/>
              <Route path="product/add" element={<Add />}/>
              <Route path="product/:id" element={<UpdateProduct />}/>
            </Route>

            

            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </main>
    </div>
  )
}

export default App