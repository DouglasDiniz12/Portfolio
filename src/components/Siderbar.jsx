import Avatar from '../img/IMG_1141.jpg'
import '../styles/components/sidebar.sass'
import Informacao from './Informacao'
import Social from './Social'
import Pdf from '../curriculo/curriculo_portfolio.pdf'

const Siderbar = () => {
  return (
    < aside id="sidebar">

      <img src={Avatar} alt="DouglasDiniz" />
      <p className="title">Desenvolvedor Frontend</p>
      <Social/>
      <Informacao/>
  
      <a href={Pdf} download="curriculo"   className="btn">Download curriculo</a>
      
    </aside>
  )
}

export default Siderbar
