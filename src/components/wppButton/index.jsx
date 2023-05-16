import { FloatingWhatsApp } from "react-floating-whatsapp";

const WppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber='+5561985576100'
      accountName='Gerente de Relacionamento'
      statusMessage='Tempo de resposta 20 minutos'
      chatMessage='Olá, sou a Bia! Gerente de relacionamento da Holding System Brazil. Como posso ajudar?'
      placeholder='Escreva sua mensagem...'
      messageDelay={1}
      allowClickAway={true}
      notification={true}
      chatboxHeight={400}
      darkMode={false}
      // onClick={() => {location.href='/'}}

    />
  )
}

export default WppButton