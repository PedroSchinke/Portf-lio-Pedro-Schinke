import styled from 'styled-components'
import FormBackground from '../../assets/altumcode-dMUt0X3f59Q-unsplash.jpg'

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  background-image: url(${FormBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  form {
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    padding: 20px;
    background-color: #ebebeb;
    gap: 10px;

    div {
      width: 100%;
      display: flex;
      justify-content: center;
    }

    h2 {
      color: #333;
    }

    label {
      margin-bottom: -5px;
      display: block;
    }

    input {
      display: block;
      width: 100%;
      border: #333 1px solid;
      border-radius: 8px;
      padding: 3px;
      font-family: 'Oswald', sans-serif;
      font-size: 1rem;
    }

    textarea {
      width: 100%;
      display: block;
      height: 100px;
      padding: 3px;
      border: #333 1px solid;
      border-radius: 8px;
      font-family: 'Oswald', sans-serif;
      font-size: 1rem;
      resize: none;
    }

    button {
      margin-top: 10px;
      width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: #9026ff;
      color: #fff;
      border-radius: 8px;
      padding: 8px 12px;
      font-family: 'Oswald', sans-serif;
      font-size: 1rem;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  footer {
    position: absolute;
    bottom: 30px;
    font-size: 1.2rem;
    color: white;
  }
`

export const FormMessage = styled.p`
  display: flex;
  background-color: rgba(5, 50, 50, 0.7);
  color: #fff;
  border-radius: 8px;
  padding: 20px;
  font-size: 1.5rem;
`
