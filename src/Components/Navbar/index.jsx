import "./style.css";
import PropTypes from "prop-types";
const Navbar = ({
  homeWelcomeRef,
  aboutUsRef,
  contractsRef,
  contactsRef,
  coursesRef,
}) => {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbarContainer">
      <button
        className="buttonNavbar"
        onClick={() => handleScroll(homeWelcomeRef)}
      >
        Quem Somos
      </button>
      <button className="buttonNavbar" onClick={() => handleScroll(aboutUsRef)}>
        Missão
      </button>
      <button
        className="buttonNavbar"
        onClick={() => handleScroll(contractsRef)}
      >
        Objetivos
      </button>
      <button
        className="buttonNavbar"
        onClick={() => handleScroll(contactsRef)}
      >
        Contatos
      </button>
    </div>
  );
};
Navbar.propTypes = {
  homeWelcomeRef: PropTypes.object.isRequired,
  aboutUsRef: PropTypes.object.isRequired,
  contractsRef: PropTypes.object.isRequired,
  contactsRef: PropTypes.object.isRequired,
  coursesRef: PropTypes.object.isRequired,
};
export default Navbar;
