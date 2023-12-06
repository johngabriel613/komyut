import { Outlet } from "react-router-dom"
import Navbar from "../components/Header/Navbar"

function RootLayout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default RootLayout
