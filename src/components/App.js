import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"
import Checkout from "../pages/Checkout";
import Game from "../pages/Game"

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}