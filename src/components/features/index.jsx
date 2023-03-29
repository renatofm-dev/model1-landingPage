import Image from "next/image";
import Styles from "./features.module.scss";
import Icon from "/public/images/Icone-01.svg";
import Icon1 from "/public/images/Icone-02.svg";
import Icon2 from "/public/images/Icone-03.svg";

const Features = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.headerfeatures}>Soluções Personalizadas para Preservar seu Patrimônio</h1>
      <p>
        Equipe capacitada em Brasília, Garantimos o seu Sucesso Financeiro.
        Faça seu Orçamento com um Especialista.
      </p>

      <div className={Styles.features}>
        <div className={Styles.feature}>
          <Image src={Icon2} alt="Icon" className={Styles.icon} />
          <h1>Planejamento Patrimonial</h1>
          <p>
          A holding simplifica a gestão patrimonial, com administração centralizada e eficiente, possibilitando uma 
          melhor gestão para os administradores.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon2} alt="Icon" className={Styles.icon} />
          <h1>Planejamento Sucessório</h1>
          <p>
          A Holding Familiar, facilita a 
          transmissão do controle para os herdeiros
          e mantém a integridade do patrimônio.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon1} alt="Icon" className={Styles.icon} />
          <h1>Proteção Patrimonial</h1>
          <p>
          Transferir ativos para a Holding oferece proteção ao patrimônio pessoal dos proprietários, separando-os e reduzindo a vulnerabilidade a ações judiciais e ameaças.
          </p>
        </div>
        <div className={Styles.feature}>
          <Image src={Icon} alt="Icon" className={Styles.icon} />
          <h1>Redução de Impostos</h1>
          <p>
            Possibilita a redução de impostos que incidem sobre o patrimônio. A transferência dos ativos para a Holding resulta em economia de impostos sobre herança e doações.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
