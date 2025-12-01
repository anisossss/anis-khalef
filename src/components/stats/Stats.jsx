import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Header from "../reusable/Header";
import Divider from "../reusable/Divider";
import styled from "styled-components";

const AnimatedCounter = ({ value, suffix = "", duration = 2 }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [displayValue, setDisplayValue] = React.useState(0);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!inView) {
      setDisplayValue(0);
      return;
    }

    const startValue = 0;
    const endValue = value;
    const startTime = Date.now();
    startTimeRef.current = startTime;

    const animate = () => {
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(
        startValue + (endValue - startValue) * easeOutQuart
      );

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(endValue);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [inView, value, duration]);

  return (
    <CounterContainer ref={ref}>
      <span>{displayValue}</span>
      {suffix && <span>{suffix}</span>}
    </CounterContainer>
  );
};

const Stats = ({ statsRef, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    { label: "Projects Completed", value: 25, suffix: "+" },
    { label: "Years of Experience", value: 4, suffix: "+" },
    { label: "Technologies Mastered", value: 15, suffix: "+" },
    { label: "Happy Clients", value: 20, suffix: "+" },
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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container ref={statsRef}>
      <Inner>
        <Header title="Achievements" headerRef={statsRef} />
        <StatsGrid ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Grid>
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <StatCard
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StatValue>
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatCard>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </StatsGrid>
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

const StatsGrid = styled.div`
  margin-top: 50px;
  margin-bottom: 150px;
  width: 100%;
  @media only screen and (max-width: 1050px) {
    margin-bottom: 100px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

const StatCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 30px;
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
    padding: 40px 25px;
  }
`;

const StatValue = styled.div`
  font-size: 6rem;
  font-family: ${({ theme }) => theme.main.fontFamily.bold};
  color: ${({ theme }) => theme.portfolio.fontColor.primary};
  margin-bottom: 15px;
  text-align: center;
  @media only screen and (max-width: 1050px) {
    font-size: 5rem;
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 4.5rem;
  }
`;

const StatLabel = styled.p`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.main.fontFamily.med};
  color: ${({ theme }) => theme.portfolio.fontColor.secondary};
  text-align: center;
  @media only screen and (max-width: 1050px) {
    font-size: 1.8rem;
  }
`;

const CounterContainer = styled.span`
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
`;

export default Stats;
