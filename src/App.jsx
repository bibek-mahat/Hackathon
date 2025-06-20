import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/ui/HeroSlider";
import Complain from "./components/pages/Complain";
// import Navbar from "@/components/Navbar";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <AppRoutes />
    // </BrowserRouter>
    <>
      <Navbar />
      <HeroSlider/>
      <Complain/>
    </>
  );
}

export default App;
