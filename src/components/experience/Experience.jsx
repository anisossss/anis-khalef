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
      role: "Founder & Full Stack Developer",
      period: "2021 - Present",
      location: "Sousse, Tunisia",
      description: "Founded and lead a cutting-edge web development agency specializing in modern web applications, AI integration, and 3D interactive experiences. Delivered scalable solutions for clients across various industries.",
      achievements: [
        "Architected and developed 15+ production web applications",
        "Led a team of developers in agile development environments",
        "Implemented AI-powered features using OpenAI GPT models",
        "Optimized applications for performance and SEO",
      ],
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Three.js", "AI/ML"],
    },
    {
      company: "Freelance Web Developer",
      role: "Senior Full Stack Developer",
      period: "2020 - 2021",
      location: "Remote",
      description: "Worked as an independent contractor, delivering high-quality web solutions for international clients. Specialized in React, Node.js, and modern JavaScript frameworks.",
      achievements: [
        "Delivered 20+ successful projects on time and within budget",
        "Maintained 100% client satisfaction rate",
        "Developed custom CMS solutions for content management",
        "Integrated payment gateways and third-party APIs",
      ],
      technologies: ["React", "Express.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      company: "Tech Startup",
      role: "Frontend Developer",
      period: "2019 - 2020",
      location: "Tunis, Tunisia",
      description: "Developed user-facing features for a fast-growing tech startup. Focused on creating intuitive user interfaces and improving user experience through modern design patterns.",
      achievements: [
        "Reduced page load time by 40% through optimization",
        "Implemented responsive design for mobile-first approach",
        "Collaborated with design team on UI/UX improvements",
        "Built reusable component library",
      ],
      technologies: ["React", "TypeScript", "Redux", "Styled Components", "Figma"],
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
                        <AchievementItem key={idx}>{achievement}</AchievementItem>
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

