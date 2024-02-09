import { Arrows, ContentContainer, Header, HeroContainer } from './styles'
import { RefObject, useRef, Suspense, lazy } from 'react'

const Profile = lazy(() => import('../Profile/Profile'))
const Projects = lazy(() => import('../projects/Projects'))
const Contact = lazy(() => import('../contact/Contact'))

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
        <h1>Procurando um desenvolvedor Full Stack?</h1>
        <Arrows>
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </Arrows>
      </HeroContainer>

      <ContentContainer tipo="normal" ref={apresentacaoRef}>
        <Suspense>
          <Profile />
        </Suspense>
      </ContentContainer>

      <ContentContainer tipo="maior" ref={projetosRef}>
        <Suspense>
          <Projects />
        </Suspense>
      </ContentContainer>

      <ContentContainer tipo="normal" ref={contatoRef}>
        <Suspense>
          <Contact />
        </Suspense>
      </ContentContainer>
    </>
  )
}
