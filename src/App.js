import Nav from "./components/nav/Nav";
import React, { useState, useRef, useEffect } from "react";
import Hero from "./components/hero/Hero";
import HeroMobile from "./components/hero/HeroMobile";
import Portfolio from "./components/portfolio/Portfolio";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Stats from "./components/stats/Stats";

import useWindowDimensions from "./hooks/useWindowDimensions";

import { ThemeProvider } from "styled-components";
import { darkTheme } from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

import ReactGA from "react-ga4";

function App() {
  const [top, setTop] = useState("true");
  const { height, width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState("false");
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (
      width <= 1050 ||
      (width <= 1050 && /Android/i.test(navigator.userAgent)) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      setIsMobile("true");
    } else if (width > 1050) {
      setIsMobile("false");
    }
  }, [height, width]);

  useEffect(() => {
    ReactGA.initialize("G-VFZGLR1PH3");
    ReactGA.send("pageview");
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {isMobile === "false" && (
        <Nav
          top={top}
          portfolioRef={portfolioRef}
          skillsRef={skillsRef}
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          servicesRef={servicesRef}
          statsRef={statsRef}
        />
      )}

      <Feed>
        {isMobile === "false" ? (
          <Hero setTop={setTop} />
        ) : (
          <HeroMobile setTop={setTop} />
        )}
        <Portfolio portfolioRef={portfolioRef} isMobile={isMobile} />
        <About aboutRef={aboutRef} isMobile={isMobile} />
        <Experience experienceRef={experienceRef} isMobile={isMobile} />
        <Services servicesRef={servicesRef} isMobile={isMobile} />
        <Stats statsRef={statsRef} isMobile={isMobile} />
        <Footer isMobile={isMobile} />
      </Feed>
    </ThemeProvider>
  );
}

const Feed = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
