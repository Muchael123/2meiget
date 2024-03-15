import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";

function Homepage() {
  return (
    <div className="bg-[#E0EBFD] md:h-screen">
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
