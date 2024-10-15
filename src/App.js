import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Collection from "./Pages/Collection";
import Sale from "./Pages/Sale";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Main from "./components/PagePreview/Main";
import { Router } from "react-router-dom";
// import Lookbook from "./Pages/Lookbook";

function App() {
  return (
    <div id="main">
      <Router>
        <Banner />
        <Navbar />
        {/* <Main /> */}
        {/* <Home/> */}
        <Shop />
        {/* <Collection/> */}
        {/* <Sale/> */}
        {/* <Blog/> */}
        {/* <Lookbook/> */}
        {/* <ContactUs/> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
