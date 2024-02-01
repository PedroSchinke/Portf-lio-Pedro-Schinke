import { Arrows, ContentContainer, Header, HeroContainer } from './styles'
import { Profile } from '../Profile/Profile'
import { Projects } from '../projects/Projects'
import { Contact } from '../contact/Contact'
import { RefObject, useRef } from 'react'

export function Home() {
  const apresentacaoRef = useRef(null)
  const projetosRef = useRef(null)
  const contatoRef = useRef(null)

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current!.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <HeroContainer>
        <Header>
          <nav>
            <ul>
              <li onClick={() => scrollToSection(apresentacaoRef)}>
                Apresentação
              </li>
              <li onClick={() => scrollToSection(projetosRef)}>Projetos</li>
              <li onClick={() => scrollToSection(contatoRef)}>Contato</li>
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

      <ContentContainer tipo="normal" ref={apresentacaoRef}>
        <Profile />
      </ContentContainer>

      <ContentContainer tipo="maior" ref={projetosRef}>
        <Projects />
      </ContentContainer>

      <ContentContainer tipo="normal" ref={contatoRef}>
        <Contact />
      </ContentContainer>
    </>
  )
}
