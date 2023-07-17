import React, { useState } from 'react';
import styled, { x } from '@xstyled/emotion';
import { motion } from 'framer-motion';
import { Typography } from '@oorsig/atoms';

const FaqList = [
  {
    title: 'Do I have to be in GitStart to use Oorsig?',
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis quas molestiae enim ut, tenetur eius quos veritatis? Blanditiis aliquam laudantium perspiciatis a. Necessitatibus perspiciatis ad repellat? Iusto, molestiae sequi.`,
    id: 1,
  },
  {
    title: 'Is Oorsig an open-source?',
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis quas molestiae enim ut, tenetur eius quos veritatis? Blanditiis aliquam laudantium perspiciatis a. Necessitatibus perspiciatis ad repellat? Iusto, molestiae sequi.`,
    id: 2,
  },
  {
    title: 'Does Oorsig store any of my github data?',
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis quas molestiae enim ut, tenetur eius quos veritatis? Blanditiis aliquam laudantium perspiciatis a. Necessitatibus perspiciatis ad repellat? Iusto, molestiae sequi.`,
    id: 3,
  },
  {
    title:
      'Is Oorsig a tool for developer or is it a tool for project managers?',
    description: `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nobis quas molestiae enim ut, tenetur eius quos veritatis? Blanditiis aliquam laudantium perspiciatis a. Necessitatibus perspiciatis ad repellat? Iusto, molestiae sequi.`,
    id: 4,
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
                  <Typography>{el.description}</Typography>
                </div>
              </motion.div>
            </CollapsibleItem>
          ))}
        </div>
      </div>
    </ContainerSection>
  );
};

const ContainerSection = styled(x.section)`
  /* background-color: gray-300; */
  padding: 6rem 0;

  .container {
    width: 100%;
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
    color: gray-50;
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
  div {
  }
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
