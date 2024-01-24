import { About } from "../components/Blocks/About/About";
import { Hero } from "../components/Blocks/Hero";
import "./Home.scss";

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
};
