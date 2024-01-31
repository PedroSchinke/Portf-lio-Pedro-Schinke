import styled from 'styled-components'
import ProfileBackground from '../../assets/anas-alshanti-feXpdV001o4-unsplash.jpg'

export const ProfileContainer = styled.div`
  color: #333;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${ProfileBackground});
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
        border: 4px solid #9026ff;
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
        background-color: #9026ff;
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
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, auto);
        justify-content: space-around;
        justify-items: center;
        align-items: center;
        gap: 15px;

        .icon-item {
          width: 50px;
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
  font-size: 1.5rem;
`
