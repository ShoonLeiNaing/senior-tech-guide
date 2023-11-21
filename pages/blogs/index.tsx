import BlogSection from "../../components/Blogs/BlogSection";
import Footer from "../../components/Common/Footer";
import Navbar from "../../components/Common/Navbar";
import NewsLetter from "../../components/Home/NewsLetter";

export default function Blogs() {
  return (
    <div>
      <Navbar />
      <BlogSection />
      <NewsLetter />
      <Footer />
    </div>
  );
}
