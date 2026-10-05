import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import CartDrawer from "./CartDrawer"
import Chatbox from "../Chatbox"

export default function MainLayout() {
  return (
    <div id="top" className="site-shell">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <Chatbox />
    </div>
  )
}

