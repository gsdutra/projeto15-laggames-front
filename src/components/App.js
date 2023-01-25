import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"
import Checkout from "../pages/Checkout";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}