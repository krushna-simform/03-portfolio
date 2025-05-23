import { About } from "@/components/About";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Showcase } from "@/components/Showcase";
import { Skills } from "@/components/Skills";

const Main = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Skills />
      <About />
      <Projects />
    </>
  );
};

export default Main;
