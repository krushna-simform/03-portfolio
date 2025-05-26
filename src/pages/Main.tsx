import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Showcase } from "@/components/Showcase";
import { Skills } from "@/components/Skills";
import { Footer } from "@/components/Footer";
import { GetInTouch } from "@/components/GetInTouch";

const Main = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Skills />
      <About />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default Main;
