import "./style.css";
import goalsImg from "../../assets/goalsImg.jpg";
import icongoals from "../../assets/iconsgoals.png";
import pastaIcon from "../../assets/pastaIcon.png";
import apertoDeMaoIcon from "../../assets/apertoDeMaoIcon.png";
import inovationIcon from "../../assets/inovationIcon.png";
import PropTypes from "prop-types";

const Goals = ({ goalsRef }) => {
  return (
    <div className="goalsWrapper">
      <div className="homeGoalsContainer">
        <div className="titleContainer">
          <h1 className="goalsTitle">Objetivos Principais</h1>
          <img className="goalsIcon" src={icongoals} alt="Ícone Objetivos" />
        </div>
        <p className="goalsParagraph">
          O Incape tem como principais objetivos o compromisso em conduzir
          Cursos de Formação de alto padrão, Capacitações e Compras garantindo
          operações íntegras, éticas e eficientes. Visando ser reconhecido pela
          excelência na organização desses eventos, contribuindo para a
          preparação de profissionais qualificados. Buscando constantemente por
          inovações nas atividades, adaptando-se às mudanças nas demandas do
          mercado e nas necessidades das instituições. O Incape procura
          introduzir abordagens modernas que garantam uma preparação mais
          precisa e alinhada com as expectativas do setor público e privado.
        </p>
        <div className="cardsContainer">
          <div className="cardGoal">
            <img src={pastaIcon} alt="" />
          </div>
          <div className="cardGoal">
            <img src={apertoDeMaoIcon} alt="" />
          </div>
          <div className="cardGoal">
            <img src={inovationIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src={goalsImg} alt="Objetivos" className="goalsImage" />
      </div>
    </div>
  );
};

Goals.propTypes = {
  goalsRef: PropTypes.object.isRequired,
};

export default Goals;
