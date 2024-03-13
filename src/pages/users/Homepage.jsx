import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Popup from "../../components/Popup";

function Homepage() {
  return (
    <div className="bg-[#E0EBFD] md:h-screen">
      {/* Header */}
      <Header />
      {/* Hero */}
      <Hero />
      {/* Footer */}
      <Footer />
      <Popup />
      {/* <Popup/> */}
    </div>
  );
}

export default Homepage;
