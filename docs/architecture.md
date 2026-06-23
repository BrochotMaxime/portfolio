# Project Architecture

## Purpose

This document describes the architecture of the portfolio project and explains the purpose of each part of the application.

The architecture has been designed to remain simple, scalable and maintainable throughout the project's evolution.

Its objective is not only to organize the source code, but also to make the project easy to understand for any developer discovering the repository.

---

## Architecture Principles

The project architecture follows a few simple principles.

### Single Responsibility

Each folder has a single, clearly identified responsibility.

A developer should immediately understand where a new file belongs.

### Scalability

The structure should support future growth without requiring major refactoring.

New pages, components or features should integrate naturally into the existing architecture.

### Simplicity

The project should remain as simple as possible.

New folders or abstractions should only be introduced when they provide a clear benefit.

### Consistency

Naming conventions and folder organization should remain consistent throughout the project.

---

## Root Structure

```text
portfolio/
├── docs/
│   ├── adr/
│   ├── architecture.md
│   ├── project-vision.md
│   └── roadmap.md
├── public/
└── src/
```

### Root Folder Responsibilities

#### docs/

Contains all project documentation.

This includes:

* project vision
* roadmap
* architecture documentation
* Architecture Decision Records (ADR)

#### public/

Contains static assets served directly by Vite without processing.

#### src/

Contains the entire application source code.

---

## Source Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
├── pages/
├── styles/
│   ├── abstracts/
│   ├── base/
│   └── main.scss
├── App.jsx
└── main.jsx
```

---

## Folder Responsibilities

### assets/

Contains images, icons and other static resources imported by the application.

### components/

Contains reusable React components.

This folder is divided into three categories:

#### layout/

Global layout components shared across the entire application.

Examples:
* Header
* Footer
* Layout
* Navigation

#### sections/

Large page sections.

Examples:
* Hero
* About
* Skills
* Featured Projects
* Contact CTA

#### ui/

Small reusable interface components.

Examples:
* Button
* Card
* Badge
* Tag
* SectionTitle

These components should remain generic and reusable.

### data/

Contains static portfolio data.

Examples:
* projects
* skills
* navigation
* social links

Keeping data separate from components improves readability and maintainability.

### pages/

Contains page-level React components managed by React Router.

Examples:
* HomePage
* ProjectsPage
* ProjectPage
* ContactPage

### styles/

Contains the global SCSS architecture.

This folder is divided into three categories:

#### abstracts/

Reusable styling utilities.

Examples:
* variables
* mixins
* functions

#### base/

Global styles applied to the entire application.

Examples:
* reset
* typography
* global styles

#### main.scss

Single entry point for all project styles.

Imported only once in main.jsx.

No other global stylesheet should be imported directly.

---

## File Responsibilities

### main.jsx

Application entry point.

Responsible for rendering the React application and loading the global stylesheet.

### App.jsx

Root component of the application.

Responsible for providing the application's global structure.

---

## Design Philosophy

This architecture has been intentionally designed to answer three essential questions.

### Where should a new file be created ?

The folder structure should make the answer immediately obvious.

### Where can an existing file be found ?

Developers should never have to search through multiple folders.

### Can the project evolve without becoming difficult to maintain ?

The architecture should naturally support future growth while remaining understandable.

---

## Future Evolution

This architecture is expected to evolve alongside the project.

However, every structural change should respect the project's guiding principles:

* Every decision must be justified.
* The code should reflect a professional way of working.
* The portfolio should evolve over time.
* Quality over quantity.

The goal is not to create the most complex architecture, but the simplest architecture capable of supporting the project's future evolution.