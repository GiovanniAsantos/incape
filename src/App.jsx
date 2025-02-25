import { useRef } from "react";
import AboutUs from "./Components/AboutUs";
import Body from "./Components/Body";
import Header from "./Components/Header";
import "./style/global.css";

function App() {
  const homeWelcomeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contractsRef = useRef(null);
  const contactsRef = useRef(null);
  const coursesRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <>
      <Header
        homeWelcomeRef={homeWelcomeRef}
        aboutUsRef={aboutUsRef}
        contractssRef={contractsRef}
        contactssRef={contactsRef}
        coursesRef={coursesRef}
        footerRef={footerRef}
      />
      <div ref={homeWelcomeRef}> 
        <Body />
      </div>
      <div ref={aboutUsRef}> 
        <AboutUs />
      </div>
    </>
  );
}

export default App;
