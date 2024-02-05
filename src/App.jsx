import ArticleOrganiser from "./components/Article/ArticleOrganiser";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrowserRouter basename="/app">
        <Routes>
          <Route path="/" />
        </Routes>
      </BrowserRouter>
    </>
    
  )
}