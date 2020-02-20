import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const BackgroundInfo = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Popover = styled.div`
  position: relative;
  bottom: 10rem;

  .box {
    width: 30rem;
    height: 25rem;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;

    .tipo {
      font-family: Helvetica;
      font-style: italic;
      font-weight: 800;
      letter-spacing: -2px;
      margin: 0;
      color: #666;

      &.title {
        font-size: 8em;   
      }

      &.sub-title {
        font-size: 3.5em;
      }
    }

    .cover {
      margin: 1rem 0;
      background-color: #666;
      transition: all .2s;
      width: 100%;
      padding: 15px 0 10px;

      p {
        font-family: Helvetica Light;
        color: #fff;
        font-size: 2.5rem;
        text-align: center;
      }
    }
  }

  .cont-box-rotate {
    position: absolute;
    bottom: -180px;
    right: 0;
    width: 0px;
    height:0px;
    border-right:300px solid transparent;
    border-top: 180px solid #fff; 
  }  
`;  

const Home = () => {
  return (
    <>
      <Background>
        <Motion defaultStyle={{top: -500}} style={{top: spring(-100)}}>
          {
            interpolatingStyle =>
            <Popover style={interpolatingStyle}>
              <div className="box">
                <div>
                  <h1 className="tipo title">FE</h1>
                  <p className="tipo sub-title">Developer</p>
                  <div className="cover">
                    <p>SANGHYUP JEONG</p>
                  </div>
                </div>
              </div>
              <div className="cont-box-rotate"></div>
            </Popover>
          }
        </Motion>
      </Background>
      <BackgroundInfo />
    </>
  );
};

export default Home;
