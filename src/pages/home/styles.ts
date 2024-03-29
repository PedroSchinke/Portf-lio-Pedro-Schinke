import styled from 'styled-components'
import HomeImage from '../../assets/pexels-neo-2653362.jpg'

export const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-image: url(${HomeImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 10px;

  h1 {
    font-family: 'Oswald', sans-serif;
    color: aliceblue;
    font-size: 60px;
    text-align: center;
    text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.6);
  }
`
export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;

  nav {
    width: 50%;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  ul {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  li {
    font-family: 'Oswald', sans-serif;
    font-size: 21px;
    color: #fff;
    text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.6);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #9026ff;
    }
  }
`

export const Arrows = styled.svg`
  width: 60px;
  height: 172px;
  bottom: 20px;

  path {
    stroke: #fff;
    fill: transparent;
    stroke-width: 1px;
    animation: arrow 2s infinite;
    -webkit-animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes arrow {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }

  path.a1 {
    animation-delay: -1s;
    -webkit-animation-delay: -1s;
  }

  path.a2 {
    animation-delay: -0.5s;
    -webkit-animation-delay: -0.5s;
  }

  path.a3 {
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
  }
`

interface TipoProps {
  tipo: 'maior' | 'normal'
}

export const ContentContainer = styled.div<TipoProps>`
  background-color: #333;

  ${({ tipo }) =>
    tipo === 'maior' &&
    `
    height: fit-content;
  `}

  ${({ tipo }) =>
    tipo === 'normal' &&
    `
    height: 100vh;
  `}
`
