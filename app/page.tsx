import Contact from "./_components/Contact";
import Helpyou from "./_components/Helpyou";
import Presentation from "./_components/Presentation";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <main>
      <Presentation/>
      <Projects/>
      <Helpyou/>
      <Contact/>
    </main>
  );
}
