import { ProfileButton, ProfileContainer, ProfileSinopse } from './styles'
import ProfileImage from '../../assets/profile_image.jpg'
import HTML from '../../assets/HTML5_logo_and_wordmark.svg.png'
import CSS from '../../assets/logo-css-3-2048.png'
import TS from '../../assets/ts.png'
import JS from '../../assets/js.png'
import React from '../../assets/reactjs.png'
import Node from '../../assets/nodejs.png'
import { WhatsappLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

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
            href="https://wa.me/+5551983145592"
            target="_blank"
            rel="noreferrer"
          >
            <ProfileButton color="green">
              <WhatsappLogo size={26} />
              WhatsApp
            </ProfileButton>
          </a>
          <a
            href="https://www.linkedin.com/in/pedro-schinke-17b866223/"
            target="_blank"
            rel="noreferrer"
          >
            <ProfileButton color="blue">
              <LinkedinLogo size={26} />
              LinkedIn
            </ProfileButton>
          </a>
          <a
            href="https://github.com/PedroSchinke"
            target="_blank"
            rel="noreferrer"
          >
            <ProfileButton color="grey">
              <GithubLogo size={26} />
              GitHub
            </ProfileButton>
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
        profissão. Hoje sou especializado em HTML, CSS, JavaScript, TypeScript,
        React.js e Node.js, além de outras tecnologias. Procuro uma empresa onde
        possa crescer e desenvolver minhas habilidades técnicas e profissionais.
        Acima de tudo, é meu objetivo agregar ao ambiente de trabalho:
        qualidade, trabalho em equipe, experiência e ética.
      </ProfileSinopse>
    </ProfileContainer>
  )
}
