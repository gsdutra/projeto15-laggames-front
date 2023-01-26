import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"
import Game from "../pages/Game"

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes>      
            <Route path="/home" element={<Home />} />
            <Route path="/game" element={<Game />} />
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}