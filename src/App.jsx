import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import {useState} from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Hero isLoggedIn={isLoggedIn} />
      </main>
    </>
    
  )
}