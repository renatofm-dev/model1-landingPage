import Styles from "./welcome.module.scss";
import Button from "../button/";
import { ScrollTo } from "../../utils/scrollTo";

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <h1>Planejamento Patrimonial Inteligente</h1>
        <p>
          O sistema Holding é o unico capaz de proteger seu patrimônio, impulsionar o crescimento 
          dos seus investimentos e garantir que seu legado financeiro seja transmitido de forma segura
          para as futuras gerações.
        </p>
        <Button 
          title="Faça Hoje seu Orçamento"
          kind="secundary"
          onClick={() => ScrollTo("contato")}
        />
      </div>
      {/* <div className={Styles.image}>
        <Image src={WelcomeImage} alt="Banner Welcome" />
      </div> */}
    </div>
  );
};

export default Welcome;
