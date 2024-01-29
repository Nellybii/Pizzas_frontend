import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Restaurants from "./components/RestaurantList"
import Pizzas from "./components/Pizzas"
import SearchBarFilter from "./components/SearchBar"

function App() {
  

  return (
    <>
      <NavBar />
      <SearchBarFilter />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/pizzas" element={<Pizzas />} />
      </Routes>
    </>
  )
}

export default App
