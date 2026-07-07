# ADR-001 - Adopt React Component-Based Architecture

## Status

Accepted

## Context

The portfolio is expected to evolve continuously as new projects, pages and features are added.

Building the application with static HTML pages would quickly lead to duplicated code, inconsistent user interfaces and more difficult maintenance.

A scalable solution was required to encourage component reuse, improve maintainability and separate presentation from application logic.

## Decision

The portfolio is developed using React and follows a component-based architecture.

Reusable UI components are created whenever they represent a shared interface element, such as buttons, cards, badges or section titles.

React Router is used to manage navigation while keeping the application as a single-page application (SPA).

The project structure separates pages, layouts, reusable components and project data to keep responsibilities clearly defined.

## Consequences

### Positive

- Encourages component reuse across the application
- Reduces duplicated code
- Improves long-term maintainability
- Simplifies future feature additions
- Provides a consistent user experience
- Keeps responsibilities clearly separated

### Negative

- Higher initial project setup
- Requires understanding React concepts and component composition
- Adds some abstraction compared to a simple static website
