# Oorsig  web app
Oorsig takes your GitHub data to the next level with easy-to-read charts and data visualization tools.
These tools allow you to get a clear understanding of your GitHub activity and identify areas for improvement. Whether you're a developer, project manager, or team leader, Oorsig can help you streamline your workflow and achieve your goals.

![Oorsig](https://user-images.githubusercontent.com/42426067/227998739-7d8e8b1e-9784-4c8c-a156-ab87c44cc2af.png)

Oorsig is a modern web app built with Next.js, using the GitHub GraphQL API and Relay for data management. The UI is styled using xstyled, resulting in a sleek and responsive user interface.
## Repository structure 
This project is structured with the following parts:

**`scripts/`:** The scripts folder in a GitHub API management project contains files for project management and configuration, such as generating GraphQL operation types and merging schemas.

**`src/`:** Contain the following folder structure:

- **`atoms/`:** The atom folder contains customized atomic components that are built using the xstyled library. [Xstyled](https://xstyled.dev/docs/utility-props/) is a CSS-in-JS library that provides a simple and intuitive way to style React components using utility classes.

- **`domains/`:** In oorsig project that manages GitHub API using GraphQL (GQL), the domain folder contains sub-folders for various business domains such as organization, team, and member. Each of these sub-folders contains files that represent the different entities within that domain, such as Organization, Team, and Member respectively.

- **`elements/`:** This folder contains various utility components for the oorsig project.

- **`pages/`:** This folder contains the pages for the Next.js application. Each file represents a page and is written in TypeScript. The `_app.tsx` file is the root component of the application and can be used to wrap the pages with common layout components.

- **`relay/`:** The relay folder contains various files and sub-folders that represent the different aspects of the Relay implementation.

- **`__generated__/`:** The **generated** folder contains files that are generated by Relay's code generation tooling. These files contain generated types and interfaces that represent the GraphQL schema and queries used in the application.

- **`utils/` :** The utils folder contains reusable utility functions, modules, and hooks used throughout the project.
## Contribution
Contribution in the form of bug reports, user feedback, or actual code is always welcome! We do have a [contribution guide](), There is also a [setup guide]() for building and running locally.
