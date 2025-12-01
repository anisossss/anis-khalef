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
      title: "Software Engineering",
      description:
        "Enterprise-grade software engineering services. I architect and build scalable, maintainable systems that handle millions of users. Not just code, engineered solutions.",
      features: [
        "System Architecture",
        "Scalable Solutions",
        "Code Quality",
        "Performance Engineering",
      ],
    },
    {
      title: "Blockchain Development",
      description:
        "Revolutionary blockchain solutions and smart contract development. Build decentralized applications, DeFi platforms, and blockchain-integrated systems that transform industries.",
      features: [
        "Smart Contracts",
        "DeFi Platforms",
        "DApps",
        "Blockchain Integration",
      ],
    },
    {
      title: "IoT Systems Engineering",
      description:
        "Connect the physical and digital worlds. I engineer complete IoT ecosystems, from embedded systems to cloud infrastructure, creating seamless device-to-cloud solutions.",
      features: [
        "Embedded Systems",
        "Device Integration",
        "Cloud Connectivity",
        "Real-time Data",
      ],
    },
    {
      title: "Project Management & Leadership",
      description:
        "As Technical Lead and Project Manager, I orchestrate entire development lifecycles. From concept to deployment, I ensure on-time delivery and technical excellence.",
      features: [
        "Agile/Scrum",
        "Team Leadership",
        "Project Planning",
        "Risk Management",
      ],
    },
    {
      title: "Full Stack Engineering",
      description:
        "End-to-end engineering services from frontend to backend. I build complete systems with modern frameworks, microservices architecture, and cloud-native deployment.",
      features: [
        "React/Next.js",
        "Node.js Backend",
        "Database Design",
        "Cloud Deployment",
      ],
    },
    {
      title: "AI & Machine Learning",
      description:
        "Integrate cutting-edge AI capabilities into your systems. From OpenAI GPT integration to custom ML models, I engineer intelligent automation that drives business value.",
      features: [
        "AI Integration",
        "ML Pipelines",
        "Intelligent Automation",
        "Data Analytics",
      ],
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
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>
                      {service.description}
                    </ServiceDescription>
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
    content: "-";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.portfolio.fontColor.primary};
  }
  @media only screen and (max-width: 1050px) {
    font-size: 1.6rem;
  }
`;

export default Services;
