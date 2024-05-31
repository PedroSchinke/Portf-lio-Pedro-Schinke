import styled from 'styled-components'
import ProfileBackground from '../../assets/pexels-pavel-danilyuk-5496464.jpg'

export const ProfileContainer = styled.div`
  color: #222;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-image: url(${ProfileBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }

  .profile-content {
    width: 30%;
    display: flex;
    justify-content: center;

    @media (max-width: 950px) {
      width: 40%;
    }

    @media (max-width: 600px) {
      width: 60%;
    }

    .profile-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 350px;
      background: #ebebeb;
      padding: 30px;
      border-radius: 8px;

      @media (max-width: 768px) {
        width: 90%;
        padding: 20px;
      }

      @media (max-width: 600px) {
        width: fit-content;
        padding: 20px 30px;
      }

      @media (max-height: 700px) {
        width: fit-content;
        padding: 10px 20px;
      }

      .profile-image {
        width: 150px;
        height: auto;
        border-radius: 50%;
        border: 4px solid #9026ff;

        @media (max-height: 900px) {
          width: 90px;
        }

        @media (max-height: 800px) {
          width: 70px;
        }
      }

      .name-text {
        font-family: 'Oswald', sans-serif;
        font-size: 1.4rem;
        margin-top: 15px;

        @media (max-height: 900px) {
          margin-top: 5px;
          font-size: 1.3rem;
        }

        @media (max-height: 700px) {
          margin-top: 0;
          font-size: 1.1rem;
        }
      }

      .profile-text {
        margin-bottom: 10px;
        width: 80%;
        display: flex;
        justify-content: center;
        font-family: 'Oswald', sans-serif;
        font-size: 17px;
        text-align: center;
        white-space: nowrap;

        @media (max-height: 900px) {
          margin-bottom: 15px;
          font-size: 1.2rem;
        }

        @media (max-height: 700px) {
          margin-bottom: 5px;
          margin-top: -5px;
          font-size: 0.8rem;
        }
      }

      .social_media_container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media (max-width: 768px) {
          gap: 5px;
        }

        a {
          width: fit-content;
          height: fit-content;
        }
      }

      .divider {
        width: 100%;
        border-top: 0.5px solid #bfbfbf;
        margin: 20px 0;

        @media (max-width: 768px) {
          width: 90%;
          margin: 13px 0;
        }

        @media (max-height: 700px) {
          margin: 8px 0;
        }
      }

      .icons-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
        justify-content: space-around;
        justify-items: center;
        align-items: center;
        gap: 15px;

        @media (max-width: 768px) {
          width: 80%;
          gap: 10px;
        }

        .icon-item {
          width: 50px;
          height: auto;

          @media (max-width: 768px) {
            width: 30px;
          }

          @media (max-width: 600px) {
            width: 20px;
          }
        }
      }
    }
  }
`

export const ProfileButton = styled.button`
  width: 150px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border-radius: 15px;
  border: none;
  background-color: #9026ff;
  color: #fff;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;

  .icon {
    @media (max-width: 600px) {
      width: 20px;
    }
  }

  ${({ color }) =>
    color === 'green' &&
    `
      background-color: #04D960;
    `}

  ${({ color }) =>
    color === 'blue' &&
    `
      background-color: #007BB6;
    `}

  ${({ color }) =>
    color === 'grey' &&
    `
      background-color: #8D9088;
    `}

  &:hover {
    opacity: 0.5;
  }

  @media (max-height: 900px) {
    height: 31px;
    font-size: 0.9rem;
  }

  @media (max-height: 700px) {
    width: 130px;
    height: 28px;
    font-size: 0.8rem;
  }
`

export const ProfileSinopse = styled.p`
  width: 430px;
  font-family: 'Oswald', sans-serif;
  color: #ebebeb;
  font-size: 1.5rem;
  text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.6);

  @media (max-height: 1020px) {
    font-size: 1.3rem;
    line-height: 1.5rem;
  }

  @media (max-height: 700px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }

  @media (max-width: 950px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 85%;
    text-align: justify;
  }
`
