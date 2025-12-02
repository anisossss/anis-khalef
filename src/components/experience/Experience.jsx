import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../reusable/Header";
import Divider from "../reusable/Divider";
import styled from "styled-components";

const Experience = ({ experienceRef, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: "TuniCyberLabs",
      role: "Founder, Technical Lead & Software Engineer",
      period: "2021 - Present",
      location: "Sousse, Tunisia",
      description:
        "Founded and lead a cutting-edge software engineering firm that doesn't just build applications, we engineer digital ecosystems. As Technical Lead and Project Manager, I orchestrate end-to-end development of enterprise-grade software solutions, blockchain platforms, and IoT systems. I don't just code, I architect scalable systems, lead cross-functional teams, and deliver solutions that transform businesses.",
      achievements: [
        "Engineered and architected 25+ production-grade software systems serving millions of users",
        "Led and mentored development teams of 5-10 engineers in agile/scrum environments",
        "Designed and implemented blockchain solutions and smart contract systems",
        "Built IoT ecosystems connecting physical devices to cloud infrastructure",
        "Managed complex projects from conception to deployment, ensuring 100% on-time delivery",
        "Implemented AI/ML features using OpenAI GPT models and custom machine learning pipelines",
        "Optimized systems for extreme performance, achieving 99.9% uptime and sub-100ms response times",
      ],
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Blockchain",
        "IoT",
        "Three.js",
        "AI/ML",
        "Docker",
        "AWS",
      ],
    },
    {
      company: "Freelance Software Engineer",
      role: "Senior Software Engineer & Project Lead",
      period: "2020 - 2021",
      location: "Remote",
      description:
        "Operated as an elite independent software engineer, delivering mission-critical solutions for international clients. Specialized in full-stack engineering, blockchain development, and IoT integration. Managed entire project lifecycles as both engineer and project lead, ensuring technical excellence and business alignment.",
      achievements: [
        "Engineered 30+ enterprise-grade software solutions on time and within budget",
        "Maintained 100% client satisfaction with zero project failures",
        "Architected custom blockchain solutions and smart contract systems",
        "Developed IoT platforms connecting hardware to cloud services",
        "Led project management for multiple concurrent client engagements",
        "Integrated complex payment gateways, third-party APIs, and microservices",
      ],
      technologies: [
        "React",
        "Express.js",
        "PostgreSQL",
        "Blockchain",
        "IoT",
        "AWS",
        "Docker",
        "Kubernetes",
      ],
    },
    {
      company: "Tech Startup",
      role: "Software Engineer & Team Contributor",
      period: "2019 - 2020",
      location: "Tunis, Tunisia",
      description:
        "Engineered critical user-facing systems for a fast-growing tech startup. Applied software engineering principles to build scalable, maintainable codebases. Collaborated closely with cross-functional teams to deliver exceptional user experiences while maintaining code quality and system performance.",
      achievements: [
        "Engineered performance optimizations that reduced page load time by 40%",
        "Architected responsive, mobile-first systems serving 100K+ users",
        "Collaborated with design and product teams to ship features that increased user engagement by 35%",
        "Built enterprise-grade reusable component library used across 10+ projects",
        "Contributed to technical architecture decisions and code review processes",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Redux",
        "Styled Components",
        "Jest",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container ref={experienceRef}>
      <Inner>
        <Header title="Work Experience" headerRef={experienceRef} />
        <ExperienceContainer ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ExperienceCard>
                  <HeaderSection>
                    <CompanyName>{exp.company}</CompanyName>
                    <Role>{exp.role}</Role>
                    <Period>{exp.period}</Period>
                    <Location>{exp.location}</Location>
                  </HeaderSection>
                  <Description>{exp.description}</Description>
                  <AchievementsSection>
                    <AchievementsTitle>Key Achievements:</AchievementsTitle>
                    <AchievementsList>
                      {exp.achievements.map((achievement, idx) => (
                        <AchievementItem key={idx}>
                          {achievement}
                        </AchievementItem>
                      ))}
                    </AchievementsList>
                  </AchievementsSection>
                  <TechnologiesSection>
                    <TechLabel>Technologies:</TechLabel>
                    <TechTags>
                      {exp.technologies.map((tech, idx) => (
                        <TechTag key={idx}>{tech}</TechTag>
                      ))}
                    </TechTags>
                  </TechnologiesSection>
                  {index < experiences.length - 1 && <CardDivider />}
                </ExperienceCard>
              </motion.div>
            ))}
          </motion.div>
        </ExperienceContainer>
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

const ExperienceContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  width: 100%;
  @media only screen and (max-width: 1050px) {
    margin-bottom: 100px;
  }
`;

const ExperienceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 40px 0;
  @media only screen and (max-width: 1050px) {
    padding: 30px 0;
    gap: 25px;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CompanyName = styled.h3`
  font-size: 4rem;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  @media only screen and (max-width: 1050px) {
    font-size: 3.2rem;
  }
`;

const Role = styled.p`
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  @media only screen and (max-width: 1050px) {
    font-size: 2.4rem;
  }
`;

const Period = styled.p`
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  opacity: 0.8;
  @media only screen and (max-width: 1050px) {
    font-size: 2rem;
  }
`;

const Location = styled.p`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  opacity: 0.7;
  @media only screen and (max-width: 1050px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  font-size: 2.4rem;
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  line-height: 150%;
  @media only screen and (max-width: 1050px) {
    font-size: 2rem;
  }
`;

const AchievementsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const AchievementsTitle = styled.p`
  font-size: 2.6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  @media only screen and (max-width: 1050px) {
    font-size: 2.2rem;
  }
`;

const AchievementsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20px;
`;

const AchievementItem = styled.li`
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  line-height: 150%;
  list-style-type: disc;
  @media only screen and (max-width: 1050px) {
    font-size: 1.9rem;
  }
`;

const TechnologiesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const TechLabel = styled.p`
  font-size: 2.6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  @media only screen and (max-width: 1050px) {
    font-size: 2.2rem;
  }
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TechTag = styled.span`
  padding: 8px 16px;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.main.fontFamily.light};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  @media only screen and (max-width: 1050px) {
    font-size: 1.6rem;
    padding: 6px 12px;
  }
`;

const CardDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    ${({ theme }) => theme.portfolio.line},
    transparent
  );
  margin-top: 20px;
`;

export default Experience;
