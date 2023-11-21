import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import AboutUs from "../components/Home/AboutUs";
import Blogs from "../components/Home/Blogs";
import Hero from "../components/Home/Hero";
import NewsLetter from "../components/Home/NewsLetter";
import OurMission from "../components/Home/OurMission";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurMission />
      <Blogs />
      <NewsLetter />
      <Footer />
    </div>
  );
}
