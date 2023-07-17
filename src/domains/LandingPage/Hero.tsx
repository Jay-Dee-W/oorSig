import React from 'react';
import styled, { x } from '@xstyled/emotion';
import { Typography } from '@oorsig/atoms';
// import { HeroVector } from '@oorsig/atoms/HeroVector';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// import { useFollowPointer } from '@utils/userFlowPointer';

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const typographyRef = useRef(null);
  //   const { x, y } = useFollowPointer(ref);
  //   const { scrollYProgress } = useScroll({
  //     target: typographyRef,
  //     offset: ['end end', 'end start'],
  //   });
  const { scrollYProgress } = useScroll();
  //   const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.2, 0.5, 0.6],
    [1, 0, 0.3, -1, 0]
  );

  const zIndex = useTransform(scrollYProgress, [0, 0.5], [1, -1]);
  const skew = useTransform(scrollYProgress, [0, 0.2, 1], [20, 0, 1]);
  const scaleImage = useTransform(scrollYProgress, [0, 0.2, 1], [0.8, 1, 2]);
  const display = useTransform(scrollYProgress, pos => {
    return pos >= 0.5 ? 'hidden' : 'block';
  });

  return (
    <HeroSection>
      <motion.section
        style={{ opacity, scale, zIndex, display }}
        className="typography-section"
        ref={typographyRef}
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
          <button
            style={{
              display: 'block',
              margin: 'auto',
            }}
          >
            Get Started
          </button>
        </div>
      </motion.section>

      {/* <HeroVector /> */}

      <motion.div
        style={{
          marginTop: '16rem',
          skew,
          scale: scaleImage,
          marginRight: 'auto',
          marginLeft: 'auto',
          zIndex: 111,
        }}
      >
        <Image
          src="/HeroDashboard.svg"
          width={1300}
          height={600}
          alt="main content"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'fill',
          }}
        />
      </motion.div>
    </HeroSection>
  );
};
const HeroSection = styled(x.section)`
  background-color: gray-200;
  padding-top: 10rem;
  text-align: center;
  overflow: hidden;
  height: 52rem;

  .typography-section {
    /* background-color: red; */
    position: fixed;
    right: 0;
    left: 0;
    top: 2rem;
    opacity: 1;

    div {
      /* height: 100vh; */
      padding-top: 6rem;
    }
  }

  h1 {
    text-align: center;
    font-size: 5xl;
    line-height: 5xl;
    margin-bottom: 1rem;
  }
  p {
    text-align: center;
    font-size: base;
    line-height: base;
    margin-bottom: 1rem;
  }
  button {
    padding: 1rem 2rem;
  }
  svg {
    margin-top: 32rem;
    width: 80%;
    display: block;
    margin: auto;
    /* margin-top: 3rem; */
  }
`;

const ImageContainer = styled(x.div)`
  margin-top: 30rem;
  transform: skew(15deg, 15deg);
  margin-right: auto;
  margin-left: auto;

  img {
    /* display: block;
    width: 100% !important;
    display: none; */
  }
`;

{
  /* 
      <motion.div
        ref={ref}
        className="box box-shadow-2"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 3,
          stiffness: 2,
          restDelta: 0.001,
        }}
        style={{
          width: 0,
          height: 0,
          position: 'fixed',
          overflow: 'hidden',
          borderRadius: '90rem',
          boxShadow: '0 0 32rem 12rem #72cf71',
        }}
      />

      <motion.div
        ref={ref}
        className="box box-shadow-3"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 100,
          stiffness: 15,
          restDelta: 0.001,
        }}
        style={{
          width: 0,
          height: 0,
          position: 'fixed',
          overflow: 'hidden',
          borderRadius: '90rem',
          boxShadow: '0 0 32rem 12rem #fff02d',
        }}
      />

      <motion.div
        ref={ref}
        className="box box-shadow-1"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 20,
          restDelta: 0.001,
        }}
        style={{
          width: 0,
          height: 0,
          position: 'fixed',
          overflow: 'hidden',
          borderRadius: '90rem',
          boxShadow: '0 0 32rem 12rem #007aff',
        }}
      /> */
}
