import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/social.sass';


const socialNetworks = [
  {name:"linkedin",hrfe:"https://www.linkedin.com/in/douglasdinizsantos/", icon: <FaLinkedinIn/>},
  {name:"github",hrfe:"https://github.com/DouglasDiniz12", icon: <FaGithub/>},
  {name:"instagram",hrfe:"https://www.instagram.com/douglasdiniz122/", icon: <FaInstagram/>},
];

const Social = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((item)=>(
          <a href={item.hrfe} className='social-btn' id={item.name} key={item.name}>
            {item.icon}
          </a>
        ))}

    </section>
     
  )
}

export default Social
