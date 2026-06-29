# UI Components

## Purpose

This document describes the purpose of the reusable UI components used throughout the portfolio.

Each component has a single responsibility and is designed to provide consistency, readability and maintainability across the application.

---

## SectionTitle

### Purpose

Introduces a new section of a page.

### Responsibility

The component renders a semantic section heading and an optional subtitle.

By default, it renders an `h2`, but the heading level can be customized using the `level` prop when needed.

---

## Button

### Purpose

Represents an action or a navigation element.

### Responsibility

Provides a consistent interface for:

* internal navigation
* external links
* standard button actions

Button variants should only define visual appearance while preserving the same behaviour.

---

## Card

### Purpose

Groups related content inside a visually distinct container.

### Responsibility

Provides a reusable structure for displaying projects, experiences, skills or other self-contained pieces of information.

Cards should focus on layout rather than content.

---

## Badge

### Purpose

Displays short contextual information.

### Responsibility

Highlights technologies, categories, skills or other concise labels while maintaining visual consistency.

---

## Design Principles

All UI components should follow the project's core principles:

* simplicity
* consistency
* readability
* reusability
* semantic HTML

Components should remain focused on a single responsibility and evolve only when justified by real project needs.