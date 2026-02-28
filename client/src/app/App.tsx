import '../index.css'
import { Routes, Route } from "react-router";
import Home from '../pages/Home.tsx'
import Header from "@/shared/components/header/Header.tsx";
import PostHeader from "@/shared/components/post-header/Post-Header.tsx";
import GamePage from '../pages/GamePage/GamePage.tsx'
import CartPage from "@/pages/Cart/ui/CartPage.tsx";
import Login from '@/pages/Auth/Login.tsx'
import Register from '@/pages/Auth/Register.tsx'
// Import the wrapper
import { GuestRoute } from "./providers/GuestRoute.tsx";

function App() {
  return (
      <div>
        <Header/>
        <PostHeader/>
        <main className="max-w-[1200px] mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='games/:id' element={<GamePage/>}/>
            <Route path='/cart' element={<CartPage/>}/>

            {/* Restricted routes for non-authenticated users only */}
            <Route element={<GuestRoute />}>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Route>

          </Routes>
        </main>
      </div>
  )
}

export default App