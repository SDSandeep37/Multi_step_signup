import Hero from "../sections/Hero";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../sections/Banner";
import Cards from "../sections/Cards";
import Footer from "../sections/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen landing flex flex-col">
      <Navbar />
      <Hero />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
};

export default Landing;
