import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "../contexts/LagContext";
import Home from "../pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Routes>      
            <Route path="/" element={<Home />} />
          </Routes> 
      </UserProvider>
    </BrowserRouter>
  )
}