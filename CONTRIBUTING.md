# Contributions Guidelines

Before you get started, please review the following guidelines:

## Key Technical Skills

- Next.js
- GraphQL
- Xstyled

## Reporting Bugs and Issues

We welcome bug reports and feedback from our users. Before reporting a new issue, please search existing issues to make sure your issue hasn't already been reported.

If you're unable to find an existing issue that matches your problem, please create a new issue. When creating a new issue, please follow these guidelines:

1. Use a clear and descriptive title that summarizes the issue.
2. Provide steps to reproduce the issue. Be as specific as possible and provide any relevant code snippets or screenshots.
3. Describe the expected behavior. What should happen when the user takes the steps you've outlined?
4. Describe the actual behavior. What actually happened when the user took the steps you've outlined?

## Contributing Code

### Setting Up the Project

To set up the project, please follow these steps:

1. Clone the project repository to your local machine.
2. Make sure that you run `nvm use` for selecting the proper node version.
3. Install necessary dependencies by running `npm install`
4. Create a `.env` file in the root of the project directory.
5. Generate a personal access token on GitHub by following [these instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).
6. Add your GitHub access token to the `.env` file by adding the following line: `REACT_APP_GITHUB_AUTH_TOKEN=<your-personal-access-token>`
7. Build the project by running `npm run build`
8. Run the project locally by running `npm run dev`.
9. Open [http://localhost:3000](http://localhost:3000/) with your browser to see the dashboard.

## Code Style

To ensure consistency and readability in the codebase, we ask that you follow these coding standards:

1. Import files alphabetically and prioritize importing third-party libraries before importing relative paths. This helps improve code organization and readability.
2. When adding a new folder to the `src` directory, it is important to update the paths in the `tsconfig.json` file to include a relative path for the new folder. This ensures that the TypeScript compiler can properly resolve the module imports and prevent errors in the code.
3. Use a linter to enforce coding standards and catch common errors. We recommend using `ESLint`or if you want to do it manually run `npm run lint`.
4. Use camelCase for variable and function names.