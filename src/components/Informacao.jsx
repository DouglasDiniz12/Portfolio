import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import '../styles/components/informacao.sass'

const Informacao = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon"/>
        <div>
          <h3>telefone</h3>
          <p>(11) 9 4953-3514</p>
        </div>
      </div>
      <div className="info-card">
        <AiOutlineMail id="email-icon"/>
        <div>
          <h3>E-mail</h3>
          <p>douglasdiniz2026@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon"/>
        <div>
          <h3>Localização</h3>
          <p>Jandira/ SP</p>
        </div>
      </div>
    </section>
  )
}

export default Informacao
