import styled from 'styled-components'
import HomeImage from '../../assets/mohammad-rahmani-_Fx34KeqIEw-unsplash.jpg'

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
  }
`
export const Header = styled.header`
  nav {
    width: 50%;
  }

  ul {
    margin-top: 10px;
    width: 700px;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }

  li {
    font-family: 'Oswald', sans-serif;
    font-size: 21px;
    color: #fff;
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
