import styled from 'styled-components'
import HomeImage from '../../assets/home-image.jpg'
import ContentBackground from '../../assets/content-background.jpg'
import ProjectBackground from '../../assets/Cópiadeprojectbg.jpg'

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
    color: #fff;
    font-size: 60px;
  }

  li:hover {
    color: #d870db;
  }

  .content-container {
    height: 100vh;
  }
`
export const Header = styled.header`
  nav {
    width: 50%;
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 700px;
  }

  li {
    font-family: 'Oswald', sans-serif;
    font-size: 21px;
    color: #fff;
    cursor: pointer;
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

export const ContentContainer = styled.div`
  height: 100vh;
  background-color: #333;
`

export const ProfileContainer = styled.div`
  color: #333;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${ContentBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .profile-content {
    width: 30%;

    .profile-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 350px;
      background: #fff;
      padding: 30px;
      border-radius: 8px;

      .profile-image {
        width: 150px;
        height: auto;
        border-radius: 50%;
        border: 4px solid #d870db;
      }

      .name-text {
        font-family: 'Oswald', sans-serif;
        font-size: 21px;
        margin-top: 15px;
      }

      .profile-text {
        font-family: 'Oswald', sans-serif;
        font-size: 17px;
        text-align: center;
        width: 80%;
        margin-top: 10px;
      }

      .profile-button {
        width: 150px;
        height: 50px;
        border-radius: 15px;
        border: none;
        background-color: #d870db;
        color: #fff;
        font-family: 'Oswald', sans-serif;
        margin-top: 35px;
        cursor: pointer;
      }

      .divider {
        width: 100%;
        border-top: 0.5px solid #bfbfbf;
        margin: 20px 0;
      }

      .icons-container {
        display: flex;
        width: 100%;
        justify-content: space-around;
        gap: 8px;

        .icon-item {
          width: 65px;
          height: auto;
        }
      }
    }
  }
`

export const ProfileSinopse = styled.p`
  width: 430px;
  font-family: 'Oswald', sans-serif;
  color: #fff;
  font-size: 17px;
`

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${ProjectBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .project-content {
    width: 75%;
    height: 80%;
    display: grid;
    grid-template-rows: repeat(1fr, 3);

    .position-container {
      width: 100%;
      display: flex;

      .project-card {
        width: 700px;
        height: 200px;
        background-color: black;
        box-shadow: 10px 10px 5px black;
        border-radius: 8px;
        display: flex;
        align-items: center;

        .card-reverse {
          flex-direction: row-reverse;
        }

        .project-image {
          width: 350px;
          height: auto;
          position: relative;
          border-radius: 8px;
          right: 20px;
          top: 40px;

          .image-reverse {
            left: 20px;
          }
        }

        .project-text {
          color: white;
          font-family: 'Oswald', sans-serif;
        }
      }
    }

    .right {
      justify-content: flex-end;
    }

    .left {
      justify-content: flex-start;
    }
  }
`
