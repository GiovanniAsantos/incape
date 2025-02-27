import { useRef } from "react";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Mission from "./Components/Mission";
import "./style/global.css";
import Contacts from "./Components/Contacts";

function App() {
  const homeWelcomeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactsRef = useRef(null);
  const coursesRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <>
      <Header
        homeWelcomeRef={homeWelcomeRef}
        aboutUsRef={aboutUsRef}
        contactssRef={contactsRef}
        coursesRef={coursesRef}
        footerRef={footerRef}
      />

      <div ref={aboutUsRef}>
        <AboutUs />
      </div>

      <div ref={homeWelcomeRef}>
        <Mission />
      </div>

      <div ref={contactsRef}>
        <Contacts />
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </>
  );
}

export default App;
