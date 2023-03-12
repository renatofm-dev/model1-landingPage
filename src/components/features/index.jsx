import Image from "next/image";
import Styles from "./features.module.scss";
import Icon from "/public/images/Icone-01.svg";
import Icon1 from "/public/images/Icone-02.svg";
import Icon2 from "/public/images/Icone-03.svg";

const Features = () => {
  return (
    <div className={Styles.container}>
      <h1>Soluções Personalizadas e Eficazes para Preservar seu Patrimônio.</h1>
      <p>
      Equipe capacitada em Brasília, Garantimos o seu Sucesso Financeiro.
      Faça seu Orçamento com um Especialista.
      </p>

      <div className={Styles.features}>
        <div className={Styles.feature}>
          <Image src={Icon2} alt="Icon" className={Styles.icon} />
          <h1>Planejamento Patrimonial</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon2} alt="Icon" className={Styles.icon} />
          <h1>Planejamento Sucessório</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon1} alt="Icon" className={Styles.icon} />
          <h1>Proteção Patrimonial</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="Icon" className={Styles.icon} />
          <h1>Redução de Impostos</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
