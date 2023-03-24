import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/Logo-completa-red.svg";
import Logo1 from "/public/images/logo60x60.svg";
import Styles from "./header.module.scss";
import Button from "../button";
import { ScrollTo } from "../../utils/scrollTo";

const Header = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logotipo}>
        <Image className={Styles.logo} src={Logo} alt="Logo" />
      </div>
      <div className={Styles.logotipoMobile}>
        <Image className={Styles.logo} src={Logo1} alt="Logo" />
        
      </div>
      <div className={Styles.menu}>
        <Link scroll={true} href="/">Home</Link>
        <Link href="/#especialista">Nosso Especialista</Link>
        <Link href="https://hsblog.com.br/">Blog</Link>
      </div>
      <div className={Styles.space}></div>
      <div className={Styles.action}>
        <Button  title="Fale com um Especialista " onClick={() => ScrollTo("especialista")} />
      </div>
      <div className={Styles.actionMobile}>
        <Button title="Faça seu Orçamento " onClick={() => ScrollTo("contato")} />
      </div>
    </div>
  );
};

export default Header;
