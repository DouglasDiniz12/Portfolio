import Avatar from '../img/IMG_1141.jpg'
import '../styles/components/sidebar.sass'
import Informacao from './Informacao'
import Social from './Social'


const Siderbar = () => {
  return (
    < aside id="sidebar">

      <img src={Avatar} alt="DouglasDiniz" />
      <p className="title">Desenvolvedor Frontend</p>
      <Social/>
      <Informacao/>
  
    
      
    </aside>
  )
}

export default Siderbar
