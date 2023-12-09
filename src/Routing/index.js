import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart'
import Products from '../components/Products/Products'
const Routing = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Products />} />
            {/* <Route path="/product/:id" element={<Product />} /> */}
            <Route path="/cart" element={<Cart />} />
        </Routes>
    </div>
  )
}

export default Routing