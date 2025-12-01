import React from "react";

import { useMotionValue, motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Header from "../reusable/Header";
import styled from "styled-components";

import Divider from "../reusable/Divider";
import LaptopContainer from "../../three/laptop/LaptopContainer";

const About = ({ aboutRef, isMobile }) => {
  const [mouseRef, bounds] = useMeasure({ scroll: true });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  return (
    <Container
      ref={mouseRef}
      onPointerMove={(e) => {
        mouseX.set(e.clientX - bounds.x - bounds.width / 2);
        mouseY.set(e.clientY - bounds.y - bounds.height / 2);
      }}
    >
      <Inner>
        <Header title="About" headerRef={aboutRef} />
        <SectionContainer>
          <RightContainer>
            <Description>
              Greetings, I am <strong>Anis Khalef</strong>, a passionate{" "}
              <strong>Full Stack Web Developer</strong> and the visionary
              founder of <strong>TuniCyberLabs</strong>. With over four years of
              expertise in <strong>modern web development</strong>, I specialize
              in creating high-performance, scalable web applications using
              cutting-edge technologies. My expertise spans{" "}
              <strong>React.js, Next.js, Node.js, MongoDB, Three.js</strong>,
              and <strong>AI integration</strong>, enabling me to deliver
              exceptional digital experiences that drive business growth. I am
              dedicated to crafting innovative solutions that combine beautiful
              user interfaces with robust backend architecture, ensuring optimal
              performance, SEO optimization, and user engagement.
            </Description>
            <Skills>
              <Skill>
                <SkillTitle>Front End</SkillTitle>
                <SkillItem>NextJS</SkillItem>
                <SkillItem>React</SkillItem>
                <SkillItem>Javascript</SkillItem>
                <SkillItem>Typescript</SkillItem>
                <SkillItem>Redux</SkillItem>
                <SkillItem>Three.js</SkillItem>
              </Skill>
              <Skill>
                <SkillTitle>Software & Design Tools</SkillTitle>
                <SkillItem>Figma</SkillItem>
                <SkillItem>Blender</SkillItem>
              </Skill>
              <Skill>
                <SkillTitle>Back End</SkillTitle>
                <SkillItem>Node.js</SkillItem>
                <SkillItem>Express.js</SkillItem>
                <SkillItem>MongoDB</SkillItem>
              </Skill>
            </Skills>
          </RightContainer>
          {isMobile === "false" && (
            <ImageContainer>
              <LaptopContainer mouseX={mouseX} mouseY={mouseY} />
            </ImageContainer>
          )}
        </SectionContainer>
        <Divider />
      </Inner>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 100px 40px 0 40px;
  position: relative;
  @media only screen and (max-width: 1050px) {
    padding: 80px 40px 0 40px;
  }
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
`;

const SectionContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 50px;
  margin-bottom: 150px;
  @media only screen and (max-width: 1050px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 0;
    margin-bottom: 100px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  height: 600px;
  justify-content: center;
  position: relative;
  z-index: -5;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  line-height: 150%;
`;

const Skills = styled.div`
  display: grid;
  margin-top: 60px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 50px;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SkillTitle = styled.p`
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  margin-bottom: 14px;
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  font-size: 2.4rem;
`;

const SkillItem = styled.p`
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  font-size: 2.4rem;
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
`;

export default About;
