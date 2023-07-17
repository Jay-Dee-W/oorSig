import styled, { x } from '@xstyled/emotion';
import React from 'react';
import Image from 'next/image';
import { Typography } from '@oorsig/atoms';

export const AskAi: React.FC = () => {
  return (
    <Container>
      <x.div display="flex" alignItems="center" gap={3}>
        <Image
          src="/gpt.svg"
          alt="Gpt Logo"
          style={{ display: 'block' }}
          width={40}
          height={40}
        />
        <Typography variant="h6" size="4xl">
          Ask about your data
        </Typography>
      </x.div>

      <PromptsContainer>
        {[
          {
            prompt: 'How many issues on open-source I worked on?',
            active: false,
          },
          {
            prompt: 'Did I improve my performance this month?',
            active: true,
          },
          {
            prompt: 'List the project I worked on with issues in ASC order',
            active: false,
          },
          {
            prompt: 'How issues remain to reach 120 issues this month',
            active: false,
          },
          {
            prompt: 'What are the most popular pull requests?',
            active: false,
          },
        ].map((itm, i) => (
          <x.div
            key={i}
            bg={itm.active === true ? 'white' : 'gray-200'}
            w={itm.active === true ? '100%' : 'fit-content'}
          >
            <Typography color={itm.active === true ? 'black' : 'white'}>
              {itm.prompt}
            </Typography>
            {itm.active && (
              <Image
                src="/send.svg"
                alt="Gpt Logo"
                style={{ display: 'block' }}
                width={30}
                height={30}
              />
            )}
          </x.div>
        ))}
      </PromptsContainer>
    </Container>
  );
};

const Container = styled(x.div)`
  padding: 2rem;
  margin: 0.5rem;
  border-radius: 0.6rem;
  flex: 1;
`;

const PromptsContainer = styled(x.div)`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2;
  width: fit-content;

  div {
    padding: 1rem 1rem;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;

    p {
      flex: 1;
    }
  }
`;
