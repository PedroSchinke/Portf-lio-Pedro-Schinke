import { ProfileContainer, ProfileSinopse } from './styles'
import ProfileImage from '../../assets/profile_image.jpg'
import HTML from '../../assets/HTML5_logo_and_wordmark.svg.png'
import CSS from '../../assets/logo-css-3-2048.png'
import TS from '../../assets/ts.png'
import JS from '../../assets/js.png'
import React from '../../assets/react.svg'
import Node from '../../assets/node.png'

export function Profile() {
  return (
    <ProfileContainer>
      <div className="profile-content">
        <div className="profile-card">
          <img className="profile-image" src={ProfileImage} alt="" />
          <span className="name-text">Pedro Schinke</span>
          <span className="profile-text">
            Foco, disciplica e consistência. Vamos revolucionar o mercado de
            tecnologia juntos?
          </span>
          <a
            href="https://www.instagram.com/pauloborges.tech/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="profile-button">Conhecer insta!</button>
          </a>
          <div className="divider"></div>
          <div className="icons-container">
            <img className="icon-item" src={HTML} alt="" title="HTML" />
            <img className="icon-item" src={CSS} alt="" title="CSS" />
            <img className="icon-item" src={JS} alt="" title="JavaScript" />
            <img className="icon-item" src={TS} alt="" title="TypeScript" />
            <img className="icon-item" src={Node} alt="" title="Node.js" />
            <img className="icon-item" src={React} alt="" title="React.js" />
          </div>
        </div>
      </div>
      <ProfileSinopse>
        Desenvolvedor apaixonado pelo constante processo de aprendizado da
        profissão. Procuro uma empresa onde possa crescer e desenvolver minhas
        habilidades técnicas e profissionais. Acima de tudo, é meu objetivo
        agregar ao ambiente de trabalho: qualidade, trabalho em equipe,
        experiência e ética.
      </ProfileSinopse>
    </ProfileContainer>
  )
}
