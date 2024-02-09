import { ProjectCard, ProjectContainer } from './styles'
import CoffeeDeliveryGIF from '../../assets/demonstration.gif'

function Projects() {
  return (
    <ProjectContainer>
      <div className="project-content">
        <div className="position-container right">
          <ProjectCard>
            <img className="project-image" src={CoffeeDeliveryGIF} alt="" />
            <p className="project-text">
              <h2 id="title">Coffee Delivery</h2>
              <p id="softwares">React.js + TypeScript</p>
              Projeto de interface de delivery de cafés onde é possível
              adicionar produtos no carrinho, completar seu pedido respondendo
              ao formulário e acessar seu histórico de pedidos. Projeto em que
              desenvolvi minhas habilidades em <strong>useReducer</strong> para
              manipulação de estados, <strong>React Hook Form</strong> e{' '}
              <strong>Zod Resolver</strong> para registro e validação de
              formulários e <strong>Styled Components</strong> para criação de
              componentes estilizados, além de bibliotecas como{' '}
              <strong>Date-fns</strong> e <strong>Toastify</strong>.
              <p className="link_to_github">
                Mais detalhes em:{' '}
                <a
                  href="https://github.com/PedroSchinke/Coffee-Delivery"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/PedroSchinke/Coffee-Delivery
                </a>
              </p>
            </p>
          </ProjectCard>
        </div>

        <div className="position-container left">
          <ProjectCard>
            <p className="project-text">
              <h2>Daily Diet API</h2>
              <p id="softwares">Node.js + TypeScript + Fastify</p>
              API REST de controle de dieta em que é possível o usuário
              cadastrado registrar, visualizar, editar e apagar refeições, além
              de obter o resumo completo de sua dieta. O projeto inclui um
              sistema de autenticação dos usuários com JWT, para que apenas
              usuários logados possam acessar as rotas e que cada usuário tenha
              acesso apenas às suas próprias refeições, além de criptografia de
              senhas dos usuários. Nesse projeto desenvolvi minhas habilidades
              em <strong>Knex.js</strong> para a criação e manipulação de
              consultas em bancos de dados, <strong>JSON Web Token</strong> para
              a autenticação dos usuários, <strong>Bcrypt.js</strong> para
              realizar a criptografia das senhas, <strong>Vitest</strong> e{' '}
              <strong>Supertest</strong> para a realização de testes nas rotas
              da aplicação, <strong>Dotenv</strong> para o gerenciamento das
              variáveis de ambiente e <strong>Eslint</strong> para a
              padronização do código.
              <p className="link_to_github">
                Mais detalhes em:{' '}
                <a
                  href="https://github.com/PedroSchinke/Daily-Diet"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/PedroSchinke/Daily-Diet
                </a>
              </p>
            </p>
          </ProjectCard>
        </div>

        <div className="position-container right">
          <ProjectCard>
            <p className="project-text">
              <h2>GymPass API</h2>
              <p id="softwares">Node.js + TypeScript + Fastify</p>
              API de serviço de check-in em academias, sendo o check-in feito
              pelo usuário e validado por administradores. É possível para o
              usuário buscar as academias cadastradas pelo nome ou por
              proximidade, assim como administradores cadastrarem novas
              academias. O usuário também pode ter acesso às suas métricas de
              check-ins realizados. Todos os perfis tem suas senhas
              criptografadas e passam por um processo de autenticação por JWT
              para poderem acessar seus dados e métricas. Nesse projeto
              desenvolvi minhas habilidades em <strong>Docker</strong> para
              implementação do software em um contêiner isolado e{' '}
              <strong>Prisma</strong> para a criação de schemas e migrations de
              tabelas para o banco de dados, além de <strong>Dayjs</strong> para
              a manipulação de datas e horários.
              <p className="link_to_github">
                Mais detalhes em:{' '}
                <a
                  href="https://github.com/PedroSchinke/Gympass"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/PedroSchinke/Gympass
                </a>
              </p>
            </p>
          </ProjectCard>
        </div>

        {/* <div className="position-container left">
          <ProjectCard>
            <p className="project-text">
              <h2>Controle de Pagamentos</h2>
              <p id="softwares">React.js + TypeScript</p>
              Projeto Front-End desenvolvido por mim para uma aplicação
              Full-Stack para a empresa ****. Projeto voltado para o registro e
              busca dos pagamentos realizados pela empresa, além de um dashboard
              com as métricas dos faturamentos por cliente e por atividades,
              podendo selecionar períodos de tempo distintos. Cada pagamento é
              vinculado a um cliente e uma atividade, ambos dinâmicos, sendo
              registrados, editados e excluídos pelo próprio usuário. Nesse
              projeto pude desenvolver minhas habilidades em{' '}
              <strong>ApexCharts</strong> para a construção do gráfico de
              faturamento, <strong>Axios</strong> para a integração com o
              Back-End e <strong>React Input Mask</strong> com{' '}
              <strong>React Number Format</strong> para as máscaras de input e
              formatação de números.
              <p className="link_to_github">
                Mais detalhes em:{' '}
                <a
                  href="https://github.com/PedroSchinke/Controle-de-Pagamentos"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/PedroSchinke/Controle-de-Pagamentos
                </a>
              </p>
            </p>
          </ProjectCard>
        </div> */}
      </div>
    </ProjectContainer>
  )
}

export default Projects
