# ADR-004 - Use Structured SCSS Architecture

## Status

Accepted

## Context

As the portfolio grew, the number of pages, reusable components and layouts increased significantly.

Keeping all styles in a single stylesheet would make the codebase harder to navigate, increase the risk of duplicated rules and reduce long-term maintainability.

A clear organisation of stylesheets was required to separate responsibilities and support future evolution of the project.

## Decision

The project adopts a structured SCSS architecture organised into dedicated directories.

Styles are separated according to their responsibility, including abstracts, base styles, layouts, reusable components and page-specific styles.

Each React component is associated with its own stylesheet whenever appropriate, while global variables and design tokens are centralised to ensure visual consistency across the application.

## Consequences

### Positive

* Improves readability of the stylesheet structure
* Reduces duplicated CSS rules
* Simplifies maintenance as the project grows
* Encourages separation of concerns
* Makes new pages and components easier to integrate
* Promotes a consistent design system

### Negative

* Requires developers to understand the project structure before adding new styles
* Introduces a larger number of SCSS files compared to a single stylesheet
* Some style changes may require modifications in multiple files