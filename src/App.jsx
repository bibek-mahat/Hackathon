// import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./app/routes";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Feed } from "./components/ui/feedback";

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <AppRoutes />
    // </BrowserRouter>
    <>
      <Navbar />
      <Body />
      <Feed />
      <Footer />
    </>
  );
}

export default App;
