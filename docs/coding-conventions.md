# Coding Conventions

## Purpose

This document defines the basic coding conventions used in this portfolio project.

The goal is to keep the codebase readable, consistent and maintainable over time.

These conventions are intentionally simple and may evolve as the project grows.

## General Principles

> Code should be easy to read before being clever.

The project follows these general principles:

- Each file should have a clear responsibility.
- Each component should have a clear purpose.
- Naming should make the role of a file, component or function immediately understandable.
- Formatting is handled by Prettier.
- Code quality is checked with ESLint.

## File Naming

React component files should use `PascalCase`.

Examples:

- Header.jsx
- ProjectCard.jsx
- SectionTitle.jsx

Non-component JavaScript files should use `camelCase`.

Examples:

- projectData.js
- navigationLinks.js

SCSS files should use `lowercase` names.

Examples:

- main.scss
- \_variables.scss
- \_reset.scss

## React Components

Components should use `PascalCase`.

Examples:

```javascript
function ProjectCard() {
  return <article>...</article>;
}
```

A component should focus on one clear responsibility.

If a component becomes difficult to read or reuse, it should be split into smaller components.

## Functions and Variables

Functions and variables should use `camelCase`.

Examples:

```javascript
const projectList = [];
const getFeaturedProjects = () => {};
```

Constants may use `UPPER_SNAKE_CASE` when they represent fixed values that should not change.

Example:

```javascript
const MAX_PROJECTS_DISPLAYED = 3;
```

## Imports

Imports should remain simple and readable.

External libraries should usually be imported before local files.

Example:

```javascript
import { Link } from "react-router";

import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projectsData";
```

## Comments

Comments should explain why something exists, not repeat what the code already says.

Prefer clear naming and simple code over unnecessary comments.

## Formatting

Formatting is handled by Prettier.

The project currently relies on Prettier's default rules.

Custom formatting rules should only be added when they solve a clear readability or consistency problem.

## Linting

ESLint is used to detect code quality issues.

The lint command should be run before committing important changes:

```bash
npm run lint
```

## Future Evolution

These conventions are expected to evolve with the project.

Any new convention should remain simple, justified and useful for long-term maintainability.
