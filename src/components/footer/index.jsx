import Link from "next/link";
import Image from "next/image";
import Styles from "./footer.module.scss";
import Logo from "/public/images/logo60x60.svg";
import IconInstagram from "/public/images/icon-instagram.svg";
import IconFacebook from "/public/images/icon-facebook.svg";
import IconLinkedin from "/public/images/icon-linkedin.svg";
import IconYoutube from "/public/images/icon-youtube.svg";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
        <Image src={Logo} alt="Logo" />
        <h1 className={Styles.title}>+55 (61) 98557-6100</h1>
        <p>contato@holdingsystem.com.br</p>
      </div>
      <div className={Styles.column}>
        <h1>MENU</h1>
        <p>Quem somos</p>
        <p>Cases</p>
      </div>
      <div className={Styles.column}>
        <h1>CONTEÚDO</h1>
        <p>E-books</p>
        <p>Blog</p>
      </div>
      <div className={`${Styles.column} ${Styles.alignRight}`}>
        <h1>SOCIAL</h1>
        <div className={Styles.icons}>
          <Link href="https://www.instagram.com/holdingsystem/">
            <Image src={IconInstagram} alt="Icon" className={Styles.icon} />
          </Link>
          <Link href="https://www.facebook.com/holdingsystem">
            <Image src={IconFacebook} alt="Icon" className={Styles.icon} />
          </Link>
          <Link href="/">
            <Image src={IconLinkedin} alt="Icon" className={Styles.icon} />
          </Link>
          <Link href="https://www.youtube.com/@holdingsystembrazil">
            <Image src={IconYoutube} alt="Icon" className={Styles.icon} />
          </Link>
        </div>
      </div>
      <div className={Styles.allRightReserved}>
        ©2022 Holding System Brazil - Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;
