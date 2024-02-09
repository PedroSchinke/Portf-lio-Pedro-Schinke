import styled from 'styled-components'
import ProjectBackground from '../../assets/computer-1869236_1280.jpg'

export const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  background-image: url(${ProjectBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .project-content {
    width: 85%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 768px) {
      justify-content: center;
    }

    .position-container {
      width: 100%;
      display: flex;
    }

    .right {
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }

    .left {
      justify-content: flex-start;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }
  }
`

export const ProjectCard = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  background-color: #ebebeb;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column-reverse;
  }

  .project-image {
    width: 60%;
    height: auto;
    border-radius: 8px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .project-text {
    color: #333;
    font-family: 'Oswald', sans-serif;
    text-align: justify;
    font-size: 1rem;
    gap: 10px;

    #softwares {
      margin-bottom: 10px;
      font-weight: bold;
      color: #888;
    }

    .link_to_github {
      margin-top: 8px;

      @media (max-width: 768px) {
        text-align: left;
      }
    }
  }

  .card-reverse {
    flex-direction: row-reverse;
  }

  .image-reverse {
    left: 20px;
  }
`
