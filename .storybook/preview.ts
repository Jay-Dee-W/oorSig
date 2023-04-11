import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

// import { ThemeProvider } from '@xstyled/emotion';

// export const decorators = [
//   (Story) => (
//     <>
//       <ThemeProvider>
//         <Story />
//       </ThemeProvider>
//     </>
//   ),
// ];

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// };
