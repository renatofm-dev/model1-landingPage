import Styles from "./especialista.module.scss";
import Button from "../button/";
import { ScrollTo } from "../../utils/scrollTo";

const Especialista = () => {
  return (
    <div id="especialista" className={Styles.container}>

      <div className={Styles.text}>
        <h1>Dr. Jacob Miguel Machado</h1>
        <p>
          Advogado e professor especializado em Planejamento Patrimonial,
          Holdings Familiares, Direito Empresarial e Processo Civil, com
          vasta experiência em casos complexos envolvendo empresas e grandes famílias.
        </p>
        <Button
          title="Conheça nosso Especialista"
          kind="secundary"
          onClick={() => ScrollTo("contato")}
        />
      </div>

    </div>
  );
};

export default Especialista;
