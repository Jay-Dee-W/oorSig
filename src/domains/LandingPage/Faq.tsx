import React, { useState } from 'react';
import styled, { x } from '@xstyled/emotion';
import { motion } from 'framer-motion';
import { Typography } from '@atoms/index';
import { ScrollScaleAnimation } from './ScrollScaleAnimation';
import { SectionContainer } from './SectionContainer';

const FaqList = [
  {
    title: 'Do I have to be in GitStart to use Oorsig?',
    description: [
      `the ultimate GitHub data visualization tool, designed for every developer! While Oorsig is open to all GitHub users, we've optimized it to cater specifically to developers in GitStart and organizations like GitStart. `,
      `Rest assured, your organization's data remains secure, hidden behind /org:gitstart pages. With Oorsig, effortlessly access and visualize your GitHub metrics, track progress, and optimize productivity. Embrace data-driven insights and take control of your development journey. `,
    ],
    id: 1,
  },
  {
    title: 'Is Oorsig an open-source?',
    description: [
      `As of now, Oorsig is not open-source. It is a proprietary tool of GitStart, designed to enhance GitHub data visualization and performance monitoring.`,
      `While there might be plans to consider open-sourcing it in the future, currently, Oorsig is exclusive to GitStart and is not available as an open-source project.`,
    ],
    id: 2,
  },
  {
    title: 'Does Oorsig store any of my github data?',
    description: [
      `Ideally, Oorsig does not store any of your GitHub data. As a tool designed for GitHub data visualization and performance monitoring, its primary function is to provide real-time access and visualization of your GitHub metrics without storing any of your data. `,
      `Your GitHub data is processed and displayed directly within the platform, ensuring your information remains secure and private within your GitHub account.`,
      `With a focus on data privacy and security, Oorsig aims to provide a seamless, efficient, and safe user experience for every developer.`,
    ],
    id: 3,
  },
  {
    title:
      'Is Oorsig a tool for developer or is it a tool for project managers?',
    description: [
      `Ideally, Oorsig is a versatile tool designed to benefit both developers and project managers alike. It caters to the needs of various stakeholders involved in a development project.`,
      `Oorsig provides developers with a comprehensive dashboard that visualizes GitHub data in an easy-to-understand manner. It empowers developers to access key performance metrics, monitor code quality, track commit frequencies, and gain insights into their individual or team's progress. Developers can use Oorsig to optimize their workflows, identify areas for improvement, and make data-driven decisions to enhance their productivity.`,
      `Oorsig equips project managers with valuable data to track the overall health and progress of development projects. It offers a unified view of multiple repositories and organizations, providing project managers with real-time updates on various projects' statuses. With this information, project managers can efficiently allocate resources, identify bottlenecks, and ensure projects stay on track. The platform's advanced analytics and visualizations aid in creating data-backed reports for stakeholders, enabling effective communication and decision-making.`,
    ],
    id: 4,
  },
  {
    title: 'How does Oorsig benefit me as a developer?',
    description: [
      ` Oorsig is a valuable tool for developers, providing a user-friendly platform to access, visualize, and analyze GitHub data. By leveraging Oorsig's capabilities, you can boost your productivity, improve collaboration with your team, and gain insights that drive continuous personal and project development.`,
    ],
    id: 5,
  },
];

const rotationVariant = {
  rotated: { rotate: 90 },
  default: { rotate: 0 },
};

export const FAQ: React.FC = () => {
  const [expandedItm, setExpandedId] = useState<number | null>(null);

  const toggleCollapse = (id: number) => {
    if (id === expandedItm) setExpandedId(null);
    setExpandedId(id);
  };

  return (
    <SectionContainer id="faq">
      <ScrollScaleAnimation>
        <ContainerSection>
          <div className="container">
            <FaqTitle>
              <Typography variant="h1">FAQ</Typography>
              <div>
                <Typography variant="h2">Frequently asked</Typography>
                <Typography variant="h3">Questions</Typography>
              </div>
            </FaqTitle>

            <div>
              {FaqList.map((el, i) => (
                <CollapsibleItem key={i}>
                  <CollapsibleHeader onClick={() => toggleCollapse(el.id)}>
                    <Typography variant="h4" size="2xl">
                      {el.title}
                    </Typography>

                    <motion.div
                      className="arrow"
                      initial={expandedItm === el.id ? 'rotated' : 'default'}
                      animate={expandedItm === el.id ? 'rotated' : 'default'}
                      variants={rotationVariant}
                    />
                  </CollapsibleHeader>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expandedItm === el.id ? 'auto' : 0,
                      opacity: expandedItm === el.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="content">
                      {el.description.map((content, i) => (
                        <Typography key={i}>{content}</Typography>
                      ))}
                    </div>
                  </motion.div>
                </CollapsibleItem>
              ))}
            </div>
          </div>
        </ContainerSection>
      </ScrollScaleAnimation>
    </SectionContainer>
  );
};

const ContainerSection = styled(x.section)`
  padding: 6rem 0;
  .container {
    width: 94%;
    max-width: 1100px;
    margin: auto;
  }
`;

const CollapsibleHeader = styled(x.div)`
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  h4 {
    flex: 1;
  }

  div.arrow {
    width: 1.5rem;
    height: 1.4rem;
    background-image: url('/arrow.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
`;
const CollapsibleItem = styled(x.div)`
  background-color: gray-400;
  border-bottom: 1px solid gray;
  overflow: hidden;

  p {
    color: gray-text;
    font-size: base;
    margin-bottom: 1rem;
  }

  .content {
    padding: 0 0.5rem 1rem;
  }
`;

const FaqTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1;
  width: fit-content;
  margin: auto;
  margin-bottom: 2rem;

  h1 {
    font-size: 6xl;
    margin: 0;
    color: gray-100;
    font-weight: bold;
  }

  h2 {
    font-size: xl;
    margin: 0;
  }

  h3 {
    font-size: 4xl;
    margin: 0;
  }
`;
