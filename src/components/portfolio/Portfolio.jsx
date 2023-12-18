import React from 'react';

import KitchenThumbnail from '../../assets/images/screenkitchen.png';
import ChatbotThumbnail from '../../assets/images/chatbott.png';
import StreaksThumbnail from '../../assets/images/SS.png';

import { FiArrowUpRight } from 'react-icons/fi';

import PortfolioSection from './PortfolioSection';
import Header from '../reusable/Header';

import styled from 'styled-components';

const Portfolio = ({ portfolioRef }) => {
  return (
    <Container>
      <Inner>
        <Header title="Projects" headerRef={portfolioRef} />
        <TopDivider />
        <Feed>
          <PortfolioSection
            header="KITCHEN SAVVY"
            sub="AI-Powered Recipe Generator App"
            desc="Introducing the ultimate culinary assistant, your AI-powered tool that generates delicious, customized recipes based on your personal tastes and dietary preferences.."
            src={KitchenThumbnail}
            demoLink="https://kitchen-savvy.com/"
            codeLink="#"
            tech="Next.js, Express.js, Node.js MongoDB, NGINX"
            date="2022"
          />
          <PortfolioSection
            header="AUTO ASSISTANT"
            sub="Social Media Content Generator"
            desc="Based on openAI's GPT-4-preview newest model, unlock early access to the future of content planning."
            src={ChatbotThumbnail}
            demoLink="https://auto-assistant.vercel.app/"
            codeLink="https://github.com/anisossss/auto-assistant"
            tech="Next.js, NextUI, Node.js, MongoDB"
            date="2023"
          />
          <PortfolioSection
            header="3D Partcicles Animations"
            sub="Motion subtle swirls and explosive dynamics"
            desc="Built using React, TypeScript, Three.js, Framer Motion, and styled-components chech this vibrant particle animation collection."
            src={StreaksThumbnail}
            demoLink="https://particles-animations.vercel.app/"
            codeLink="https://github.com/anisossss/particles-animations"
            tech="React, TypeScript, Three.js"
            date="2022"
          />
        </Feed>
        <ButtonContainer
          rel="noreferrer"
          target="_blank"
          href="https://github.com/anisossss?tab=repositories"
        >
          <Button>View More</Button>
          <ArrowIcon size={47} />
        </ButtonContainer>
        <Divider />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 100vh;
  position: relative;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 150px 40px 0 40px;
  @media only screen and (max-width: 1050px) {
    margin-top: 0vh;
    padding: 0 40px;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.portfolio.line};
  margin: 60px 0 0px 0;
`;

const TopDivider = styled(Divider)`
  margin: 60px 0 60px 0;
`;

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  align-items: center;
`;

const ArrowIcon = styled(FiArrowUpRight)`
  transform: translateY(0px);
  transition: transform 0.75s;
`;

const ButtonContainer = styled.a`
  padding-top: 60px;
  display: flex;
  align-items: center;
  width: fit-content;
  gap: 20px;
  &:hover {
    p {
      text-shadow: 0px 0px 10px rgba(255, 255, 255, 0.664);
      &::after {
        transform: scaleX(1) translateY(50px);
        transform-origin: left;
      }
    }
    img {
      transform: translateX(20px);
    }
  }
`;

const Button = styled.p`
  position: relative;
  width: fit-content;
  color: ${({ theme }) => theme.main.fonts.primary};
  font-size: 3.6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  cursor: pointer;
  transition: text-shadow 0.5s;
  &::after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    width: 100%;
    transform: scaleX(0) translateY(50px);
    transform-origin: right;
    transition: transform 0.5s;
    height: 3px;
    background-color: rgb(255, 255, 255, 0.64);
  }
`;

export default Portfolio;
