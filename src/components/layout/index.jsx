import Banner from "../../bannner/Banner";
import Footer from "../../Footer/Footer";
import FeedbackGrid from "../feedbackcard/FeedbackGrid";
import Navbar from "../navbar/Navbar";
import { Notices } from "../noticeCard/Notices";
import Services from "../services/Services";

export const Section2 = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <section className="container flex flex-col md:flex-row justify-between mx-auto w-[90vw] gap-4 mb-7">
        <div className="w-full md:w-1/2">
          <Services />
        </div>
        <div className="w-full md:w-1/2">
          <Notices />
        </div>
      </section>

      <section className="mb-7">
        <FeedbackGrid />
      </section>
      <Footer />
    </>
  );
};
