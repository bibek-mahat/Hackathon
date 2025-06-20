import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app/routes";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <AppRoutes />
    // </BrowserRouter>
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
