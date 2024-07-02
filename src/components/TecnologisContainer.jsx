import{
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiSass,
  DiGithubBadge

} from 'react-icons/di'

import '../styles/components/tecnologi.sass'

const tecnologia =[

  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "sass", name: "Sass", icon: <DiSass /> },
  { id: "git", name: "Git", icon: <DiGithubBadge /> },


];

const TecnologisContainer = () => {
  return (
  <section className="technologies-conatainer">
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {tecnologia.map((item)=>(
        <div className="tecnologia-card" id={item.id} key={item.id}>
          {item.icon}
          <div className="tecnologia-info">
            <h3>{item.name}</h3>
            
          </div>

        </div>
      ))}
    </div>
  </section>
  )
}

export default TecnologisContainer
