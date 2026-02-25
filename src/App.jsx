import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"

import Admin from "./pages/Admin"
import Login from "./pages/Login"
import ProtectedRoute from "./ProtectedRoute"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4 mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard/>} />
      
          <Route path="/admin" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App
