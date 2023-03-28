import Head from "next/head";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Holding Familiar | Holding System Brazil</title>
        <meta name="description" 
          content="Especialistas em implementação de holdings familiares. 
          Oferecemos soluções personalizadas e eficazes para preservar seu patrimônio. 
          Equipe capacitada em Brasília garante seu sucesso financeiro. Entre em contato agora.">
        </meta>

        
      </Head>
      <Component {...pageProps} />;
    </>
  )
}

export default MyApp;
