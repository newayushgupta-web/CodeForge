# CodeForge — Responsive Learning Platform

A modern, high-performance, and fully responsive technology learning platform built with semantic HTML5, CSS3, and Vanilla JavaScript.

Developed and architected as part of the YuvaIntern Frontend Web Developer Internship — Week 2 Task: Implementation of Responsive Web Design.

---

## Live Demo and Repository

- Live Website: https://newayushgupta-web.github.io/CodeForge/
- GitHub Repository: https://github.com/newayushgupta-web/CodeForge

---

## Project Overview

CodeForge is an interactive developer education interface designed to adapt dynamically across mobile, tablet, and wide desktop viewports. 

In Week 2, the static prototype was transformed into an adaptive frontend architecture featuring fluid typography calculations, auto-calculating CSS grids, an off-canvas mobile drawer navigation, and zero horizontal viewport overflow.

---

## Technical Implementations and Responsive Features

- Fluid Typography via clamp(): Headings calculate dynamically relative to viewport width, scaling seamlessly between 38.4px on mobile and 70.4px on wide screens without jagged breakpoint jumps.
- Intrinsic Grid Layouts: Implemented CSS Grid using repeat(auto-fit, minmax(280px, 1fr)) across card sections, enabling the interface to shift automatically from 3 columns to 2 columns and down to a single-column stack based on available space.
- Off-Canvas Mobile Drawer Navigation: Collapses horizontal desktop links into a slide-out drawer on screens below 768px, controlled by an accessible hamburger toggle and event listeners.
- Mobile Touch Optimization: All primary and secondary call-to-action buttons scale to 100% container width on viewports under 480px, adhering to the 48px minimum touch-target guideline.
- Zero Horizontal Viewport Overflow: Enforced universal border-box sizing and scoped overflow containment, preventing horizontal scrollbars across all device tiers.

---

## Viewport and Breakpoint Matrix

| Device Tier | Target Viewport | Reference Resolution | Layout Behavior | Navigation Mode |
| :--- | :--- | :--- | :--- | :--- |
| Desktop / Wide | > 1024px | 1440 x 900 px | 2-Column Hero Grid, 3-Column Cards | Inline Navigation Bar |
| Tablet | 769px – 1024px | 820 x 1180 px | 1-Column Hero Stack, 2-Column Fluid Cards | Compact Inline Bar |
| Small Tablet | 481px – 768px | 768 x 1024 px | 1-Column Hero Stack, 1-Column Cards | Off-Canvas Drawer Menu |
| Smartphone | 320px – 480px | 375 x 667 px | 1-Column Stack, Full-Width Touch Buttons | Fullscreen Drawer Menu |

---

## Technologies Used

- HTML5: Semantic structural landmarks (header, nav, main, section, article, footer)
- CSS3: CSS Grid, Flexbox, Custom Properties, fluid clamp() formulas, keyframe animations
- JavaScript: State-managed mobile drawer navigation and event handling
- Testing Tools: Google Chrome DevTools Device Mode (resolution audit and zero-overflow verification)

---

## Project Structure

```text
CodeForge/
|-- index.html
|-- style.css
`-- README.md
```

## Author
Ayush Gupta

Frontend Web Developer Intern — YuvaIntern

B.Tech — Electronics & Computer Science Engineering

## License
This project was developed for educational and internship evaluation purposes.
