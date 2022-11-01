import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Contact from './components/Contact';
import { Suspense, useEffect } from 'react';
import { hotjar } from 'react-hotjar';



export default function App() {

  return (
      <div class = "font-sans">
          <Suspense fallback={<h1>Loading...</h1>}>
            <Navbar />
            <Hero />
            <Contact />
          </Suspense>
      </div>
  )
}
