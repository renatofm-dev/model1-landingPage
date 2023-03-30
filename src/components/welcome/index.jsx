import Styles from "./welcome.module.scss";
import Button from "../button/";
import { ScrollTo } from "../../utils/scrollTo";

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <h1>Planejamento Patrimonial Inteligente</h1>
        <p>
        Proteja seu patrimônio e garanta seu legado financeiro com segurança para as futuras gerações através do sistema Holding.
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
