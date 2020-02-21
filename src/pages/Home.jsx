import React from 'react';
import { useSpring, animated } from 'react-spring';

import GithubIcon from '../asset/images/github.png';

const Home = () => {
  const HomeStyle = useSpring({ from: { opacity: 1, zIndex: 9 }, to: { opacity: 0, zIndex: -9 }, delay: 2500 });
  const contentWrapStyle = useSpring({ top: -100, from: { top: -1000 } });
  const coverStyle = useSpring({ width: 100, from: { width: 0 }, delay: 1000 });
  const coverTextStyle = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 });
  
  return (
    <div id="home-wrap">
      <animated.div style={HomeStyle} id="home-background" className="section-content">
        <animated.div style={contentWrapStyle} className="quote-content-wrap">
          <div className="quote-content-box">
            <h2 className="content-title content-title-main">FE</h2>
            <p className="content-title content-title-sub">Developer</p>
            <div className="name-cover-wrap">
              <animated.div className="cover" style={
                { width: coverStyle.width.interpolate(o => `${o}%`) }
              } />
              <animated.p style={coverTextStyle}>SANGHYUP JEONG</animated.p>
            </div>
          </div>
          <div className="cont-box-rotate" />
        </animated.div>
      </animated.div>
      <div id="about" className="section-content">
        <div className="info-content">
          <div className="title-wrap">
            <p className="kr-info-title">프론트엔드 개발자 정상협을 소개합니다.</p>
            <h2 className="en-info-title">JEONGSANGHYUP</h2>
          </div>
          <div className="contact-wrap">
            <div className="contact-list">
              <ul>
                <li>1999. 06. 17</li>
                <li>010-2523-6510</li>
                <li>
                  <a href="mailto:5656sanghup@gmail.com" target="_top">
                    5656sanghup@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/sanghup1234" target="_blank">
                    <span className="icon">
                      <img src={GithubIcon} alt="github-icon" />
                    </span>
                    <span>sanghup1234</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="career-content">
          <div className="career-area academy-wrap">
            <h3>학력사항</h3>
            <ul>
              <li>
                <span className="year">2018</span>
                서울디지텍고등학교 졸업
              </li>
            </ul>
          </div>
          <div className="career-area work-wrap">
            <h3>경력사항</h3>
            <ul>
              <li>
                <span className="year block">2017. 09 ~ 현재</span>
                <span>
                  &#40;주&#41;플레이오토 &#40;산업기능요원 현역&#41;
                </span>
              </li>
            </ul>
          </div>
          <div className="career-area license-wrap">
            <h3>자격사항</h3>
            <ul>
              <li>
                <span className="year">2017</span>
                정보처리기능사
              </li>
              <li>
                <span className="year">2016</span>
                웹디자인기능사
              </li>
            </ul>
          </div> 
          <div className="career-area language-wrap">
            <h3>기술</h3>
            <ul>
              <li>
                <span className="js">
                  Javascript (ES6+)
                </span>
              </li>
              <li>
                <span className="react">React</span>,{' '}
                <span className="redux">Redux</span>,{' '}
                <span className="saga">Redux-Saga</span>
              </li>
              <li>
              <span className="html">HTML</span>/<span className="css">CSS</span>, <span className="scss">SCSS</span>
              </li>
              <li className="italic">
                프로덕션 레벨의 SPA 개발 가능
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
