import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/ui/HeroSlider";
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
    </>
  );
}

export default App;
