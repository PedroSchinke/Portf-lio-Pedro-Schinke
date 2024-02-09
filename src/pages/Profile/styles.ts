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

    @media (max-width: 768px) {
      width: 90%;
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

      .profile-image {
        width: 150px;
        height: auto;
        border-radius: 50%;
        border: 4px solid #9026ff;

        @media (max-width: 768px) {
          width: 80px;
        }
      }

      .name-text {
        font-family: 'Oswald', sans-serif;
        font-size: 23px;
        margin-top: 15px;

        @media (max-width: 768px) {
          margin-top: 5px;
        }
      }

      .profile-text {
        margin-bottom: 10px;
        width: 80%;
        font-family: 'Oswald', sans-serif;
        font-size: 17px;
        text-align: center;
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
`

export const ProfileSinopse = styled.p`
  width: 430px;
  font-family: 'Oswald', sans-serif;
  color: #ebebeb;
  font-size: 1.5rem;
  text-shadow: 5px 5px 4px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    width: 85%;
    font-size: 1.2rem;
    text-align: justify;
    line-height: 1.5rem;
  }
`
