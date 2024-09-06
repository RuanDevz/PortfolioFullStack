'use client'
import { useEffect } from "react";
import Contact from "./_components/Contact";
import Helpyou from "./_components/Helpyou";
import Presentation from "./_components/Presentation";
import Projects from "./_components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() =>{
    AOS.init({
      duration: 1200,
      once: true,
      delay: 200,
    });
  },[]);

  return (
    <main>
      <Presentation/>
      <Projects/>
      <Helpyou/>
      <Contact/>
    </main>
  );
}
