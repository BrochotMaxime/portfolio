# Architecture Decision Records (ADR)

## Purpose

This directory contains the project's **Architecture Decision Records (ADR)**.

Each ADR documents an important architectural or technical decision made during the development of the portfolio.

The objective is not only to record the final decision, but also to preserve the reasoning behind it and the consequences it has on the project.

---

## Why use ADRs?

This portfolio is intended to demonstrate more than technical skills.

It also aims to showcase a professional development workflow and a structured decision-making process.

Documenting significant decisions makes the project easier to understand, maintain and evolve over time.

It also allows future contributors - or the project's author - to understand why a decision was made, even long after it was implemented.

---

## ADR Structure

Every ADR follows the same structure.

```markdown
# ADR-XXX – Title

## Status

Accepted

## Context

Describe the problem, need or situation that led to this decision.

## Decision

Describe the decision that was made.

## Consequences

### Positive

List the expected benefits of this decision.

### Negative

List the trade-offs, limitations or additional responsibilities introduced by this decision.
```

Using a consistent structure makes ADRs easier to read, compare and maintain throughout the project's lifetime.

---

## Writing Guidelines

The following principles apply to every ADR:

- One ADR documents one significant decision.
- ADRs describe decisions, not implementations.
- Every decision should be justified.
- Every ADR should describe both positive and negative consequences.
- Once an ADR is accepted, it should not be modified to reflect later decisions. Instead, a new ADR should be created.

---

## ADR Index

| ADR     | Title                                    | Status   |
| :------ | :--------------------------------------- | :------- |
| ADR-000 | Professional Development Workflow        | Accepted |
| ADR-001 | Adopt React Component-Based Architecture | Accepted |
| ADR-002 | Build a Reusable UI Component Library    | Accepted |
| ADR-003 | Centralize Project Data                  | Accepted |
| ADR-004 | Use Structured SCSS Architecture         | Accepted |
| ADR-005 | Prefer Static Content for Portfolio Data | Accepted |

---

## Philosophy

Architecture Decision Records are more than technical documentation.

They represent the project's decision history.

> Every significant architectural decision should be understandable, traceable and justified.
