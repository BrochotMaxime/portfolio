export const projects = [
  {
    id: 1,
    slug: "portfolio",
    title: "Portfolio",
    description:
      "Personal developer portfolio built with React and SCSS. The project focuses on clean architecture, reusable components, documentation and a maintainable development workflow.",
    overview: 
      "This portfolio is a personal project designed to present my work, technical skills and development approach through a modern and maintainable web application. Built with React, React Router and SCSS, it was also an opportunity to design a reusable component library, improve accessibility, optimise SEO and create a scalable architecture for future projects.",
    challenges: [
      "Designing a reusable component library to ensure consistency across the application.",
      "Creating a scalable project architecture while keeping the codebase easy to maintain.",
      "Improving accessibility, SEO and responsive behaviour throughout the portfolio.",
      "Building a portfolio that can evolve naturally as new projects are added."
    ],
    architecture:
      "The application follows a component-based architecture built with React and React Router. Reusable UI components such as Button, Card, Badge and SectionTitle are shared across the application to ensure visual consistency and simplify maintenance. Project data is centralised in dedicated data files, allowing pages to remain focused on presentation while making the portfolio easy to extend with future projects.",
    lessonsLearned:
      "This project reinforced the importance of building solid foundations before adding features. Designing reusable components, maintaining a consistent design system and continuously refining the user experience became central aspects of my development process. Working iteratively also highlighted the value of regular refactoring and incremental improvements to keep the codebase clean and scalable.",
    screenshots: [],
    technologies: ["React", "React Router", "SCSS", "Vite", "ESLint", "Prettier"],
    codeUrl: "https://github.com/BrochotMaxime/portfolio",
    demoUrl: "",
    featured: true,
  },
  {
    id: 2,
    slug: "trouve-ton-artisan",
    title: "Trouve ton artisan",
    description:
      "Full-stack web application built during my developer training. The project allows users to search for artisans by category and name, with a React frontend, a Node.js API and a MySQL database.",
    overview:
      "Trouve ton artisan is a full-stack web application developed as part of my web developer training. The application helps users find local artisans by category or name through a simple and accessible interface. The project combines a React frontend, a RESTful API built with Express and a MySQL database managed with Sequelize. It was designed to apply full-stack development principles while focusing on clean architecture, maintainability and user experience.",
    challenges: [
      "Designing a clear separation between the React frontend and the REST API.",
      "Building a relational database with Sequelize and maintaining data integrity.",
      "Implementing search and filtering features while keeping the code maintainable.",
      "Deploying the application and connecting it to a remote MySQL database.",
    ],
    architecture:
      "The application follows a classic full-stack architecture with a React frontend consuming a REST API developed with Express. Business logic is separated into controllers and models, while Sequelize manages database interactions with MySQL. This separation allows each layer of the application to evolve independently while keeping the project maintainable and scalable.",
    lessonsLearned:
      "This project strengthened my understanding of full-stack development and highlighted the importance of planning an application's architecture before implementing features. It also reinforced my appreciation for clean code, reusable components and incremental development, principles that I continue to apply in every new project.",
    screenshots: [],
    technologies: ["React", "Node.js", "Express", "MySQL", "Sequelize", "SCSS"],
    codeUrl: "https://github.com/BrochotMaxime/brochot-maxime-devoir-site-trouve-ton-artisan",
    demoUrl: "https://brochot-maxime-devoir-site-trouve-ton-tmpa.onrender.com/",
    featured: true,
  },
  {
    id: 3,
    slug: "port-de-plaisance-russel",
    title: "Port de Plaisance Russel",
    description:
      "RESTful API developed during my developer training to manage a marina. The project includes user authentication, CRUD operations, reservations management and API documentation with Swagger.",
    overview:
      "Port de Plaisance Russel is a RESTful API developed as part of my web developer training to manage the operations of a marina. The project provides user authentication, CRUD operations for catways, users and reservations, as well as interactive API documentation with Swagger. It was designed to strengthen my understanding of backend architecture, API design and data validation.",
    challenges: [
      "Designing a RESTful API with clear and consistent endpoints.",
      "Managing user authentication and session handling securely.",
      "Validating reservation dates and preventing overlapping bookings.",
      "Documenting the API with Swagger while keeping the documentation synchronized with the implementation.",
    ],
    architecture:
      "The backend follows an MVC architecture built with Express and MongoDB. Controllers handle business logic, Mongoose models manage data access and EJS templates provide a lightweight administration interface. Authentication relies on server-side sessions, while Swagger documents every endpoint, making the API easy to understand, test and maintain.",
    lessonsLearned:
      "This project helped me better understand how to design and structure a backend application independently from its client. It reinforced the importance of validation, error handling and clear API documentation. It also gave me practical experience with session-based authentication, MongoDB modelling and maintaining a clean separation between business logic and presentation.",
    screenshots: [],
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose", "Swagger", "EJS"],
    codeUrl: "https://github.com/BrochotMaxime/brochot-maxime-devoir-api-port-russel",
    demoUrl: "https://brochot-maxime-devoir-api-port-russel.onrender.com/",
    featured: false,
  },
  {
    id: 4,
    slug: "tifosi",
    title: "Tifosi",
    description:
      "Relational database project designed during my developer training. The project focuses on database modelling, SQL scripting, data integrity and complex queries using MySQL.",
    overview:
      "Tifosi is a relational database project developed during my web developer training to design and implement the data model of a restaurant management system. The project focuses on database modelling, SQL scripting and data integrity using MySQL. It was an opportunity to apply relational database concepts while designing a clear, consistent and maintainable schema.",
    challenges: [
      "Designing a normalized relational database while preserving data integrity.",
      "Defining relationships and constraints between multiple entities.",
      "Writing SQL scripts to create, populate and query the database.",
      "Building complex queries to retrieve meaningful business information.",
    ],
    architecture:
      "The database follows a normalized relational model built with MySQL. Tables are connected through primary and foreign keys, while constraints ensure data consistency and integrity across the application. The project includes SQL scripts for database creation, data insertion and advanced queries, making the solution easy to reproduce and maintain.",
    lessonsLearned:
      "This project strengthened my understanding of relational database design and highlighted the importance of modelling data before writing queries or implementing application logic. It also reinforced the value of data integrity, normalization and clear relationships as essential foundations for building reliable applications.",
    screenshots: [],
    technologies: ["MySQL", "SQL", "MySQL Workbench"],
    codeUrl: "https://github.com/BrochotMaxime/brochot-maxime-devoir-base-de-donnees-tifosi",
    demoUrl: "",
    featured: false,
  }
];