import '../index.css'
import { Routes, Route } from "react-router";
import Home from '../pages/Home.tsx'
import Header from "@/shared/components/header/Header.tsx";
import PostHeader from "@/shared/components/post-header/Post-Header.tsx";
import GamePage from '../pages/GamePage/GamePage.tsx'

function App() {

  return (
  <div>
    <Header/>
    <PostHeader/>
    <main className="max-w-[1200px] mx-auto px-4">
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='games/:id' element={<GamePage/>}/>
    </Routes>
    </main>
  </div>
  )
}

export default App
