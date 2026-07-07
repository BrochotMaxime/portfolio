# ADR-003 - Centralize Project Data

## Status

Accepted

## Context

The portfolio is expected to grow over time as new projects are completed.

Project information is displayed in several places throughout the application, including the projects listing page and individual project pages.

Duplicating project data across multiple components would increase maintenance effort and introduce a risk of inconsistencies whenever project information changes.

A single source of truth was required to simplify maintenance and support future growth.

## Decision

All project information is centralized in a dedicated data file (`projects.js`).

Each project is described as a structured object containing all information required to render both the project listing and its detailed case study.

React components consume this data without embedding project-specific content directly into the presentation layer.

## Consequences

### Positive

* Provides a single source of truth for project information
* Simplifies the addition of new projects
* Prevents duplicated content across components
* Keeps presentation and content clearly separated
* Improves maintainability as the portfolio grows

### Negative

* The data structure must evolve carefully as new project features are introduced
* Components become dependent on a consistent data model
* Significant changes to the data structure may require updates across multiple components