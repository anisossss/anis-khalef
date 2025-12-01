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
              I'm <strong>Anis Khalef</strong>, a{" "}
              <strong>Software Engineer</strong> who doesn't just code, I{" "}
              <strong>architect digital revolutions</strong>. As the founder and{" "}
              <strong>Technical Lead</strong> of <strong>TuniCyberLabs</strong>,
              I've spent over four years transforming complex ideas into{" "}
              <strong>world-class software solutions</strong> that scale to
              millions of users. I'm not just a developer, I'm an{" "}
              <strong>engineering powerhouse</strong> specializing in{" "}
              <strong>
                Software Engineering, Blockchain Technology, and IoT Systems
              </strong>
              . My expertise extends beyond coding: I'm a{" "}
              <strong>Project Manager</strong> and <strong>Team Lead</strong>{" "}
              who orchestrates entire development lifecycles, from concept to
              deployment. I engineer{" "}
              <strong>enterprise-grade applications</strong> using{" "}
              <strong>React.js, Next.js, Node.js, MongoDB, Three.js</strong>,
              and cutting-edge <strong>AI/ML integration</strong>. But what sets
              me apart? I build <strong>blockchain-powered solutions</strong>{" "}
              and <strong>IoT ecosystems</strong> that connect the physical and
              digital worlds. Every line of code I write is engineered for{" "}
              <strong>maximum performance, scalability, and impact</strong>.
            </Description>
            <Skills>
              <Skill>
                <SkillTitle>Front End Engineering</SkillTitle>
                <SkillItem>NextJS</SkillItem>
                <SkillItem>React</SkillItem>
                <SkillItem>Javascript</SkillItem>
                <SkillItem>Typescript</SkillItem>
                <SkillItem>Redux</SkillItem>
                <SkillItem>Three.js</SkillItem>
              </Skill>
              <Skill>
                <SkillTitle>Back End & Infrastructure</SkillTitle>
                <SkillItem>Node.js</SkillItem>
                <SkillItem>Express.js</SkillItem>
                <SkillItem>MongoDB</SkillItem>
                <SkillItem>PostgreSQL</SkillItem>
                <SkillItem>Docker</SkillItem>
                <SkillItem>AWS</SkillItem>
              </Skill>
              <Skill>
                <SkillTitle>Blockchain & IoT</SkillTitle>
                <SkillItem>Blockchain Development</SkillItem>
                <SkillItem>Smart Contracts</SkillItem>
                <SkillItem>IoT Systems</SkillItem>
                <SkillItem>Embedded Systems</SkillItem>
              </Skill>
              <Skill>
                <SkillTitle>Leadership & Tools</SkillTitle>
                <SkillItem>Project Management</SkillItem>
                <SkillItem>Team Leadership</SkillItem>
                <SkillItem>Agile/Scrum</SkillItem>
                <SkillItem>Figma</SkillItem>
                <SkillItem>Blender</SkillItem>
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
  grid-column-gap: 40px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
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
