import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"
import Cart from "../pages/Cart";
import Game from "../pages/Game"
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login"
import Checkout from "../pages/Checkout"
import CadastroGames from "../pages/CadastroGames"

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes> 
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />            
            <Route path="/cart" element={<Cart />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cadastrogames" element={<CadastroGames />} />
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}