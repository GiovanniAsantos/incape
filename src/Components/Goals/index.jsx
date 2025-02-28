import "./style.css";
import missionImg from "../../assets/missionImg.jpg";
import iconBullsEye from "../../assets/iconBullsEye.png";

const Goals = ({ goalsRef }) => {
  return (
    <>
      <div className="goalsWrapper">
        <div className="homegoalsContainer">
          <div className="titleContainer">
            <h1 className="goalsTitle">Objetivos Principais</h1>
            <img className="goalsIcon" src={iconBullsEye} alt="Ícone Missão" />
          </div>
          <p className="goalsParagraph">
            O Incape tem como principais objetivos o compromisso em conduzir
            Cursos de Formação de alto padrão, Capacitações e Compras garantindo
            operações íntegras, éticas e eficientes. Visando ser reconhecido
            pela excelência na organização desses eventos, contribuindo para a
            preparação de profissionais qualificadados. Buscando constantemente
            por inovações nas atividades, adaptando-se às mudanças nas demandas
            do mercado e nas necessidades das instituições. O Incape procura
            introduzir abrodagens modernas que garantam uma preparação mais
            precisa e alinhada com as expectativas do setor público e privado.
          </p>
          <button className="goalsCTA">Saiba Mais</button>
        </div>
        <div className="imageContainer">
          <img src={missionImg} alt="Missão" className="goalsImage" />
        </div>
      </div>
    </>
  );
};
Goals.propTypes = {
  goalsRef: PropTypes.object.isRequired,
};
export default Goals;
