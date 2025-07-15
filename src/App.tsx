import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Search from "./pages/Search"
import TripDetail from "./pages/TripDetail"
import Payment from "./pages/payment"
import Success from "./pages/Success"
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Search" element={<Search />} />
      <Route path="/trip/:id" element={<TripDetail />} />
      <Route path="/payment/:id" element={<Payment />} />
      <Route path="//payment-success" element={<Success />} />

    </Routes>
  )
}

