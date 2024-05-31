import { ProfileButton, ProfileContainer, ProfileSinopse } from './styles'
import ProfileImage from '../../assets/IMG_3125.webp'
import HTML from '../../assets/HTML5_logo_and_wordmark.svg.webp'
import CSS from '../../assets/logo-css-3-2048.webp'
import TS from '../../assets/Typescript_logo_2020.svg.webp'
import JS from '../../assets/js.png'
import React from '../../assets/reactjs.webp'
import Node from '../../assets/nodejs.webp'
import Java from '../../assets/java.webp'
import Python from '../../assets/python.png'
import SQL from '../../assets/sql.png'
import { WhatsappLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Profile() {
  return (
    <ProfileContainer>
      <div className="profile-content">
        <div className="profile-card">
          <img className="profile-image" src={ProfileImage} alt="" />
          <span className="name-text">Pedro Schinke</span>
          <span className="profile-text">Desenvolvedor Full Stack</span>
          <div className="social_media_container">
            <a
              href="https://wa.me/+5551983145592"
              target="_blank"
              rel="noreferrer"
            >
              <ProfileButton color="green">
                <WhatsappLogo size={26} className="icon" />
                WhatsApp
              </ProfileButton>
            </a>
            <a
              href="https://www.linkedin.com/in/pedro-schinke-17b866223/"
              target="_blank"
              rel="noreferrer"
            >
              <ProfileButton color="blue">
                <LinkedinLogo size={26} className="icon" />
                LinkedIn
              </ProfileButton>
            </a>
            <a
              href="https://github.com/PedroSchinke"
              target="_blank"
              rel="noreferrer"
            >
              <ProfileButton color="grey">
                <GithubLogo size={26} className="icon" />
                GitHub
              </ProfileButton>
            </a>
          </div>

          <div className="divider"></div>
          <div className="icons-container">
            <img className="icon-item" src={HTML} alt="" title="HTML" />
            <img className="icon-item" src={CSS} alt="" title="CSS" />
            <img className="icon-item" src={JS} alt="" title="JavaScript" />
            <img className="icon-item" src={TS} alt="" title="TypeScript" />
            <img className="icon-item" src={Node} alt="" title="Node.js" />
            <img className="icon-item" src={React} alt="" title="React.js" />
            <img className="icon-item" src={Java} alt="" title="Java" />
            <img className="icon-item" src={Python} alt="" title="Python" />
            <img className="icon-item" src={SQL} alt="" title="SQL" />
          </div>
        </div>
      </div>
      <ProfileSinopse>
        Desenvolvedor apaixonado pelo constante processo de aprendizado da
        profissão. Estudante de Sistemas de Informação na Unisinos, sou
        especializado em HTML, CSS, JavaScript, TypeScript, React.js, Java,
        Python, Node.js e SQL, além de outras tecnologias. Procuro trabalhar em
        uma empresa onde possa crescer e desenvolver minhas habilidades técnicas
        e profissionais. Acima de tudo, é meu objetivo agregar ao ambiente de
        trabalho: qualidade, trabalho em equipe, experiência e ética.
      </ProfileSinopse>
    </ProfileContainer>
  )
}

export default Profile
