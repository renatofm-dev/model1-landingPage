import Styles from "./welcome.module.scss";
import Button from "../button/";
import BannerWelcome from "/public/images/bannerWelcome.svg";
import Image from "next/image";
import { ScrollTo } from "../../utils/scrollTo";

const Welcome = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.text}>
        <h1>Planejamento Patrimonial Inteligente</h1>
        <p>
           
        </p>
        <Button
          title="Faça Hoje seu Orçamento"
          kind="secundary"
          onClick={() => ScrollTo("contato")}
        />
      </div>
      <div className={Styles.image}>
        <Image src={BannerWelcome} alt="Banner Welcome" />
      </div>
    </div>
  );
};

export default Welcome;
