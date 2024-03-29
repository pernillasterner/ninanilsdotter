import { About } from "../components/Sections/About/About";
// import { Contact } from "../components/Sections/Contact/Contact";
import { Hero } from "../components/Sections/Hero";
import { Product } from "../components/Sections/Product/Product";
import { Treatment } from "../components/Sections/Treatment/Treatment";
import "./Home.scss";

export const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Product />
      <Treatment />
      {/* <Contact /> */}
    </main>
  );
};
