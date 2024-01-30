import {
  Arrows,
  ContentContainer,
  Header,
  HeroContainer,
  ProfileContainer,
  ProfileSinopse,
  ProjectContainer,
} from './styles'
import ProfileImage from '../../assets/profile_image.jpg'
import TS from '../../assets/ts.png'
import JS from '../../assets/js.png'
import React from '../../assets/react.png'
import Node from '../../assets/node.png'
import Batman from '../../assets/batmanimage.jpeg'

export function Home() {
  return (
    <>
      <HeroContainer>
        <Header>
          <nav>
            <ul>
              <li>Home</li>
              <li>Projetos</li>
              <li>Tecnologias</li>
              <li>Contato</li>
            </ul>
          </nav>
        </Header>
        <h1>Procurando um desenvolvedor FullStack?</h1>
        <Arrows>
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </Arrows>
      </HeroContainer>
      <ContentContainer>
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
                <img className="icon-item" src={JS} alt="" />
                <img className="icon-item" src={TS} alt="" />
                <img className="icon-item" src={Node} alt="" />
                <img className="icon-item" src={React} alt="" />
              </div>
            </div>
          </div>
          <ProfileSinopse>
            Oficial R2 do exército brasileiro, sempre engajado na transformação
            e evolução tecnológica. Atuo focado no ecossistema Javascript com
            React, React-native e Node.Tendo participado do desenvolvimento de
            diversas aplicações Web e Mobile, com alta relevância no mercado,
            como um aplicativo Mobile em React-Native para uma grande agência de
            turismo e viagens corporativas, a aplicação tem o objetivo de
            facilitar a visualização, filtragem e envio dos dados necessários,
            sendo o cliente corporativo ou não, outro aplicativo desenvolvido
            com React-native é um aplicativo para praticantes de paraquedismo
            que faz o controle e recebe o feedback de saltos de inúmeras
            categorias, além de lidar com dados meteorológicos do local
            escolhido em todo o Brasil ,para uma melhor experiência do usuário.
            Disponível na AppStore e PlayStore. Em relação ao supracitado, um
            desafio no ambiente web que encarei foi na participação da
            refatoração de uma interface da plataforma mapa inversiones, do
            governo da Colômbia, onde são demonstradas diversas páginas contendo
            elementos como gráficos,relatórios, infográficos, documentos e dados
            abertos relacionados ao investimento público do governo colombiano.
          </ProfileSinopse>
        </ProfileContainer>
      </ContentContainer>

      <ContentContainer>
        <ProjectContainer>
          <div className="project-content">
            <div className="position-container right">
              <div className="project-card">
                <img className="project-image" src={Batman} alt="" />
                <p className="project-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets
                </p>
              </div>
            </div>

            <div className="position-container left">
              <div className="project-card card-reverse">
                <img
                  className="project-image image-reverse"
                  src={Batman}
                  alt=""
                />
                <p className="project-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets
                </p>
              </div>
            </div>

            <div className="position-container right">
              <div className="project-card">
                <img className="project-image" src={Batman} alt="" />
                <p className="project-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets
                </p>
              </div>
            </div>
          </div>
        </ProjectContainer>
      </ContentContainer>
    </>
  )
}
