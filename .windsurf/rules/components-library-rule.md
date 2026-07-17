---
trigger: manual
---

---
description:
globs:
alwaysApply: false
---

Library of ready-made components: LIBRARY NAME. Use shadcn mcp.
Use shadcn components only if there are no suitable components in the specified library.

When designing websites and applications, you must ALWAYS give priority to ready-made components from the library instead of writing components from scratch. Custom development is allowed only in exceptional cases when the required functionality cannot be implemented using existing components.

Step-by-step workflow
1. Technical specification analysis

You MUST request a technical specification (TS) from the user.

If there is no TS, prepare a detailed list of questions to collect it:

Project type (landing page, web app, mobile app)

Target audience

Core features and sections

Style preferences

Branding and color scheme

Responsiveness and supported devices

Make sure you fully understand the requirements before moving on to the next stage.

2. Building the list of required components

Based on the TS, create a structured list of all UI elements.

Mandatory categories to analyze:

Navigation: menus, breadcrumbs, pagination

Forms: input fields, buttons, checkboxes, selects

Content: cards, lists, tables, modals

Media: galleries, sliders, image previews

Feedback: notifications, alerts, loaders

Layout: header, footer, sidebar, containers

Component prioritization:

Highest priority: ready-made blocks (sections) from the library

Medium priority: individual components to compose the UI

Lowest priority: custom elements (only when absolutely necessary)

3. Exploring the library documentation

For each component from the list:

3.1. Search in the official documentation

Find the corresponding component on the library’s official site

Review all available variants and modifications

Copy code examples for basic usage

Determine customization options (props, styles, variants)

3.2. Analyzing ready-made blocks

PRIORITIZE searching for ready-made sections (Hero sections, Feature sections, etc.)

Check for composite blocks that can cover several requirements at once

Evaluate how easily the block can be adapted to the project’s specific needs

3.3. Documenting the findings

For each component, record:

The component name in the library

A link to the documentation

A basic usage example

Available styling options

Required props and their values

4. Styling plan

Define the project’s overall design system (colors, typography, spacing)

Create a plan for adapting the library components to the project’s style

Choose suitable variants or plan custom styles via Tailwind CSS

Take the user’s branding and visual identity into account

5. Design implementation

Only after completing all previous steps, start building.

5.1. Order of work:

Start with the library’s ready-made blocks

Adapt the styling to the project

Add individual components as needed

Minimize custom code

5.2. Styling principles:

Use Tailwind CSS classes for customization

Preserve the structure and logic of the original components

Ensure design consistency across the whole project

Keep responsiveness and accessibility in mind

Exceptions and special cases
When custom components are allowed:

The required functionality is completely missing from the library

The requirements are so specific that adapting a ready-made component is inefficient

Unique animations or interactivity are required

Mandatory actions when creating custom components:

Document the reason for not using a library component

Follow the library’s design system in terms of styles and behavior

Ensure compatibility with the other components in the project

Quality control
Before finalizing the design, verify:

✅ All possible components are taken from the library

✅ Styling matches the TS and branding

✅ Responsiveness works correctly

✅ Accessibility is observed

✅ Code is optimized and readable

✅ Ready-made blocks are used wherever possible

Result documentation:

All results must be documented in docs/components-research.md

List of library components used

Applied customizations

Rationale for any custom solutions

Further maintenance instructions

Prohibited actions

❌ Starting work without reviewing the TS

❌ Writing components from scratch without checking the library

❌ Ignoring ready-made blocks in favor of separate components

❌ Skipping the documentation review step

❌ Breaking the structure and logic of the original library components