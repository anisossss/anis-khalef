import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../reusable/Header";
import Divider from "../reusable/Divider";
import styled from "styled-components";

const Services = ({ servicesRef, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Scalable, performant, and SEO-optimized solutions.",
      icon: "🌐",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-Browser Compatible"],
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end development services from frontend to backend, including database design, API development, and cloud deployment.",
      icon: "⚡",
      features: ["RESTful APIs", "Database Design", "Cloud Deployment", "Microservices"],
    },
    {
      title: "3D Interactive Experiences",
      description: "Immersive 3D web experiences using Three.js and WebGL. Interactive animations and visualizations that engage users.",
      icon: "🎨",
      features: ["3D Modeling", "Interactive Animations", "WebGL Rendering", "Performance Optimization"],
    },
    {
      title: "AI Integration",
      description: "Integrate cutting-edge AI capabilities into your applications using OpenAI, machine learning models, and intelligent automation.",
      icon: "🤖",
      features: ["OpenAI Integration", "Chatbots", "Content Generation", "Automation"],
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and secure checkout processes.",
      icon: "🛒",
      features: ["Payment Gateways", "Inventory Management", "User Authentication", "Order Processing"],
    },
    {
      title: "Consulting & Strategy",
      description: "Technical consulting to help you make informed decisions about technology stack, architecture, and development processes.",
      icon: "💡",
      features: ["Technical Consulting", "Architecture Design", "Code Reviews", "Best Practices"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container ref={servicesRef}>
      <Inner>
        <Header title="Services" headerRef={servicesRef} />
        <ServicesGrid ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Grid>
              {services.map((service, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <ServiceCard
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconContainer>{service.icon}</IconContainer>
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <FeaturesList>
                      {service.features.map((feature, idx) => (
                        <FeatureItem key={idx}>{feature}</FeatureItem>
                      ))}
                    </FeaturesList>
                  </ServiceCard>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </ServicesGrid>
        <Divider />
      </Inner>
    </Container>
  );
};

const Container = styled.div`
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
  width: 100%;
`;

const ServicesGrid = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  width: 100%;
  @media only screen and (max-width: 1050px) {
    margin-bottom: 100px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  @media only screen and (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`;

const ServiceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  @media only screen and (max-width: 1050px) {
    padding: 30px;
  }
`;

const IconContainer = styled.div`
  font-size: 5rem;
  margin-bottom: 20px;
  @media only screen and (max-width: 1050px) {
    font-size: 4rem;
    margin-bottom: 15px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  margin-bottom: 15px;
  @media only screen and (max-width: 1050px) {
    font-size: 2.4rem;
    margin-bottom: 12px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  line-height: 150%;
  margin-bottom: 20px;
  @media only screen and (max-width: 1050px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 0;
  list-style: none;
`;

const FeatureItem = styled.li`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  opacity: 0.8;
  position: relative;
  padding-left: 20px;
  &::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
  }
  @media only screen and (max-width: 1050px) {
    font-size: 1.6rem;
  }
`;

export default Services;

