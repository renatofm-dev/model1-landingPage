import Styles from "./especialista.module.scss";
import Button from "../button/";
import { ScrollTo } from "../../utils/scrollTo";

const Especialista = () => {
  return (
    <div id="especialista" className={Styles.container}>

      <div className={Styles.text}>
        <h1>Dr. Jacob Miguel Machado</h1>
        <p>
            Professor e advogado altamente qualificado e especializado em 
            Planejamento Patrimonial, Holdings Familiares, 
            Direito Empresarial e Processo Civil. 
            Ele possui vasta experiência profissional em diversas causas complexas envolvendo grandes famílias e empresas.
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
