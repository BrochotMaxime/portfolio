# ADR-002 - Build a Reusable UI Component Library

## Status

Accepted

## Context

The portfolio contains multiple pages sharing common user interface elements, including buttons, cards, badges, section titles and other recurring components.

Implementing these elements independently on each page would introduce duplicated code, inconsistent styling and increased maintenance effort as the application evolves.

A consistent and reusable design system was required to improve maintainability and provide a coherent user experience across the portfolio.

## Decision

The project adopts a reusable UI component library.

Shared interface elements are implemented as independent React components and reused throughout the application whenever appropriate.

Each component encapsulates its own structure, behaviour and styling while exposing a simple and consistent API through its props.

The component library is designed to evolve progressively as new interface patterns emerge during the development of the portfolio.

## Consequences

### Positive

- Promotes code reuse across the application
- Ensures visual consistency between pages
- Simplifies maintenance by centralising UI changes
- Improves readability through clear component responsibilities
- Makes future features easier to implement
- Encourages a scalable design system

### Negative

- Requires additional planning before implementing new interface elements
- Introduces an initial abstraction layer compared to page-specific markup
- Components may require periodic refactoring as the design system evolves
