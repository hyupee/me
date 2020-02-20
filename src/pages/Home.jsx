import React from 'react';
import { useSpring, animated } from 'react-spring'

const Home = () => {
  const contentWrapStyle = useSpring({ top: -100, from: { top: -1000 } });
  const coverStyle = useSpring({ width: 100, from: { width: 0 }, delay: 1000 });
  const coverTextStyle = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 1500 });
  
  return (
    <div id="home-background">
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
    </div>
  );
};

export default Home;
