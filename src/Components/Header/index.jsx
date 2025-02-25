import logoIncape from "../../assets/logo-incape-removebg-preview.png";
import Navbar from "../Navbar";
import "./style.css";
import PropTypes from "prop-types";
const Header = ({
  homeWelcomeRef,
  aboutUsRef,
  contractsRef,
  contactsRef,
  coursesRef,
  footerRef,
}) => {
  return (
    <>
      <div className="containerHeader">
        <img className="imgLogo" src={logoIncape} alt="" />
        <Navbar
          homeWelcomeRef={homeWelcomeRef}
          aboutUsRef={aboutUsRef}
          contractssRef={contractsRef}
          contactssRef={contactsRef}
          coursesRef={coursesRef}
          footerRef={footerRef}
        />
      </div>
    </>
  );
};

Header.propTypes = {
  homeWelcomeRef: PropTypes.object.isRequired,
  aboutUsRef: PropTypes.object.isRequired,
  contractsRef: PropTypes.object.isRequired,
  contactsRef: PropTypes.object.isRequired,
  coursesRef: PropTypes.object.isRequired,
};
export default Header;
