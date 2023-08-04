import React, { useRef } from 'react';
import Image from 'next/image';
import styled, { x } from '@xstyled/emotion';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Typography } from '@atoms/index';
import { useFollowPointer } from '@utils/userFlowPointer';
import { CtaButton } from './CtaButton';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2, 0.5, 0.6],
    [1, 0, 0.3, -1, 0]
  );
  const zIndex = useTransform(scrollYProgress, [0, 0.5], [1, -1]);
  const skew = useTransform(scrollYProgress, [0, 0.2, 1], [20, 0, 1]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 8]);
  const display = useTransform(scrollYProgress, pos => {
    return pos >= 0.5 ? 'hidden' : 'block';
  });

  return (
    <HeroSection id="hero">
      <motion.section
        style={{ opacity, scale, zIndex, display }}
        className="typography-section"
      >
        <div>
          <Typography variant="h1">
            Elevate Your Github <br /> Performance Monitoring
          </Typography>
          <Typography variant="p">
            Access and visualize all your Github metrics in one place with
            oorSig
            <br />
            by Gitstart. Export data for further analysis and optimize your
            productivity.
          </Typography>
          <CtaButton />
        </div>
      </motion.section>

      <motion.div
        className="hero-image-container"
        style={{
          skew,
          scale: scaleImage,
        }}
      >
        <Image
          src="/HeroDashboard.svg"
          width={1300}
          height={600}
          alt="main content"
        />
      </motion.div>

      <div className="blur-overlay" />

      <motion.div
        ref={ref}
        className="circle-2 moving-circle"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 3,
          stiffness: 2,
          restDelta: 0.001,
        }}
      />

      <motion.div
        ref={ref}
        className="circle-3 moving-circle"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 100,
          stiffness: 15,
          restDelta: 0.001,
        }}
      />

      <motion.div
        ref={ref}
        className="circle-1 moving-circle"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 20,
          restDelta: 0.001,
        }}
      />
    </HeroSection>
  );
};
const HeroSection = styled(x.section)`
  padding-top: 10rem;
  text-align: center;
  overflow: hidden;
  height: 52rem;

  .hero-image-container {
    margin-top: 16rem;
    margin-right: auto;
    margin-left: auto;
    z-index: 111;

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  .typography-section {
    width: 92%;
    position: fixed;
    right: 0;
    left: 0;
    top: 2rem;
    opacity: 1;

    div {
      padding-top: 6rem;
    }
  }

  h1 {
    font-size: 5xl;
    line-height: 5xl;
    margin-bottom: 1rem;
  }

  p {
    font-size: base;
    line-height: base;
    margin-bottom: 1rem;
    color: gray-text;
  }

  svg {
    margin-top: 32rem;
    width: 80%;
    display: block;
    margin: auto;
  }

  .blur-overlay {
    background-color: #00000054;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    filter: blur(12px);
  }

  .moving-circle {
    height: 10rem;
    width: 10rem;
    position: fixed;
    overflow: hidden;
    border-radius: 90rem;
    z-index: -111;
    opacity: 50%;
    filter: blur(12px);
  }

  .circle-1 {
    background-color: #fff02d;
  }

  .circle-2 {
    background-color: #72cf71;
    height: 40rem;
    width: 40rem;
  }

  .circle-3 {
    background-color: #007aff;
    height: 70rem;
    width: 70rem;
  }

  @media (max-width: 1113px) {
    height: 42rem;
    h1 {
      font-size: 4xl;
      line-height: 4xl;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 750px) {
    height: 42rem;
    display: flex;
    align-items: center !important;
    padding: 0;
    .typography-section {
      position: relative;
      margin: auto;
      padding: 0;

      div {
        padding: 0;
      }
    }

    .hero-image-container {
      display: none;
    }
  }
`;
