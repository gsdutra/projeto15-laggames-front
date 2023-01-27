import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"
import Checkout from "../pages/Checkout";
import Game from "../pages/Game"
import Cadastro from "../pages/Cadastro";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes> 
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}