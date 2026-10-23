# CodeForge — Modern Interactive Learning Platform

A high-performance, responsive developer education interface built with semantic HTML5, modern CSS3, and pure Vanilla JavaScript.

Developed and architected as part of the YuvaIntern Frontend Web Developer Internship — Week 3 Task: Integrating JavaScript for Interactive User Experience.

---

## Live Demo and Repository

- Live Website: https://newayushgupta-web.github.io/CodeForge/
- GitHub Repository: https://github.com/newayushgupta-web/CodeForge

---

## Project Overview

CodeForge is an interactive technology learning interface designed to present practical development paths for aspiring software engineers. 

In Week 3, the platform progressed from an adaptive static layout into a dynamic, event-driven web application. The frontend integrates client-side DOM manipulation, dynamic content swapping, accessible dialog states, and real-time input validation without relying on third-party libraries or frameworks.

---

## Technical Implementations and Interactive Features

- Master-Detail Curriculum Explorer: Replaced static cards with a two-column interactive explorer layout. Selecting course tracks updates curriculum modules, descriptions, and learning outcomes dynamically using client-side JavaScript object mapping and controlled CSS keyframe reflow.
- Interactive Course Enrollment Modal: Integrated accessible modal dialogs that trigger via event delegation. Dynamically injects track titles into modal headings, implements background scroll-locking on open states, and supports dismissals through backdrop clicks and the keyboard Escape key.
- Real-Time Client-Side Form Validation: Implemented form handling using event.preventDefault() and regular expression evaluation (`/^[^\s@]+@[^\s@]+\.[^\s@]+\$/`). Delivers immediate visual success and error states directly into the DOM prior to submission.
- Accessible Mobile Drawer Navigation: Maintains an off-canvas drawer navigation for mobile viewports below 768px, synchronizing ARIA state attributes and auto-closing upon section navigation.
- Fluid Typography and Intrinsic Layouts: Retains responsive mathematical scaling via CSS clamp() formulas, auto-fit grid alignment, and scoped overflow containment ensuring 0px horizontal leakage across all devices.

---

## Event Architecture and Interaction Matrix

| Interactive Component | DOM Target and Trigger | JavaScript Mechanism | UX Impact and Accessibility |
| :--- | :--- | :--- | :--- |
| Curriculum Explorer | .nav-item ('click') | Dataset lookup, class toggling, dynamic node generation | Instant module exploration without layout shifts |
| Enrollment Modal | .enroll-btn ('click') | Dynamic text injection, classList toggling, Escape key listener | Focused conversion workflow with scroll-locking |
| Form Validation | #contactForm ('submit') | RegEx syntax evaluation, event.preventDefault(), inline DOM feedback | Real-time input assistance preventing invalid submission |
| Mobile Navigation | #menuToggle ('click') | Class toggling, auto-closing listeners, overflow locking | Frictionless touch drawer on handheld viewports |

---

## Viewport and Breakpoint Matrix

| Device Tier | Target Viewport | Reference Resolution | Layout Configuration | Navigation Mode |
| :--- | :--- | :--- | :--- | :--- |
| Desktop / Wide | > 1024px | 1440 x 900 px | 2-Column Hero Grid, 2-Column Master-Detail Explorer | Inline Navigation Bar |
| Tablet | 769px – 1024px | 820 x 1180 px | 1-Column Hero Stack, 2-Column Explorer Layout | Compact Inline Navigation |
| Small Tablet | 481px – 768px | 768 x 1024 px | 1-Column Stack, Single-Column Explorer Pane | Off-Canvas Drawer Menu |
| Smartphone | 320px – 480px | 375 x 667 px | 1-Column Stack, Full-Width Touch Controls (min 48px) | Fullscreen Drawer Menu |

---

## Technologies Used

- HTML5: Semantic structural landmarks (header, nav, main, section, article, footer) and data-* attributes
- CSS3: CSS Grid, Flexbox, Custom Properties, clamp() fluid typography, and hardware-accelerated animations
- Vanilla JavaScript (ES6+): Modular script handling DOM traversal, event delegation, state management, and RegEx
- Testing Tools: Google Chrome DevTools (Device Mode, Console DOM audits, and Event Listener Breakpoints)

---

## Project Structure

```text
CodeForge/
|-- index.html        # Semantic markup and accessible interactive component containers
|-- style.css         # Modern dark styling, master-detail layout, and modal animations
|-- script.js         # Core interaction logic, data structures, and event listeners
`-- README.md         # Comprehensive project documentation
```

## Author
Ayush Gupta

Frontend Web Developer Intern — YuvaIntern

B.Tech — Electronics & Computer Science Engineering

## License
This project was developed for educational and internship evaluation purposes.
