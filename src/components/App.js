import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"
import Cart from "../pages/Cart";
import Game from "../pages/Game"
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login"

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes> 
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/" element={<Login />} />
            <Route path="/checkout" element={<Cart />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}