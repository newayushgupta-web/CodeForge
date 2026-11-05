// -------------------------------------------------------------
// CodeForge - Week 5: Single Page Application (SPA) Router Engine
// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    // 1. SPA Route Registry
    const routes = {
        '#/home': {
            viewId: 'view-home',
            title: 'CodeForge | Modern SPA Learning Platform'
        },
        '#/courses': {
            viewId: 'view-courses',
            title: 'CodeForge | Interactive Curriculum Explorer'
        },
        '#/features': {
            viewId: 'view-features',
            title: 'CodeForge | Architecture & Performance'
        },
        '#/contact': {
            viewId: 'view-contact',
            title: 'CodeForge | Get In Touch'
        }
    };

    const mainContainer = document.getElementById('main-container');
    const navLinks = document.querySelectorAll('.spa-nav-link');
    const spaViews = document.querySelectorAll('.spa-view');

    // 2. Client-Side Navigation Controller
    function handleRouting() {
        const hash = window.location.hash || '#/home';
        const targetRoute = routes[hash] || routes['#/home'];

        // Mount matching view & unmount others
        spaViews.forEach(view => {
            if (view.id === targetRoute.viewId) {
                view.classList.add('active');
                view.setAttribute('aria-hidden', 'false');
            } else {
                view.classList.remove('active');
                view.setAttribute('aria-hidden', 'true');
            }
        });

        // Update Document Title
        document.title = targetRoute.title;

        // Synchronize Active Nav Indicator
        navLinks.forEach(link => {
            const linkRoute = link.getAttribute('data-route');
            if (linkRoute === hash) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Shift Accessible Focus to Active View
        if (mainContainer) {
            mainContainer.focus();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Intercept Hash Changes and PopState Traversal
    window.addEventListener('hashchange', handleRouting);
    handleRouting();

    // 3. Dynamic Course Repository
    const courseData = {
        frontend: {
            title: "Frontend Architecture",
            badge: "Module 01 • 8 Weeks",
            icon: "</>",
            desc: "Deep dive into modern web architecture. Build scalable layouts using semantic HTML5, intrinsic CSS Grid, Flexbox alignment, and responsive fluid clamp mathematics.",
            topics: [
                "Semantic HTML5 & Accessibility Landmarks",
                "Intrinsic CSS Grid & Flexbox Layouts",
                "Client-side Single Page Application routing",
                "DOM manipulation & modular event architecture"
            ]
        },
        uiux: {
            title: "UI/UX Architecture",
            badge: "Module 02 • 6 Weeks",
            icon: "✦",
            desc: "Master modern digital design systems. Explore dark glassmorphism styling, responsive ergonomics, fluid layout formulas, and interactive micro-animations.",
            topics: [
                "Cyber-Dark & Glassmorphic Component Systems",
                "Touch Target Optimization (WCAG 48px Standards)",
                "Visual Hierarchy & Coherent Layout Balancing",
                "Smooth CSS Transitions & Keyframe Motion"
            ]
        },
        ai: {
            title: "Python & AI Systems",
            badge: "Module 03 • 10 Weeks",
            icon: "{ AI }",
            desc: "Learn algorithmic backend foundations and data workflows. Connect frontend interfaces with asynchronous APIs and intelligent Python backend pipelines.",
            topics: [
                "Python Algorithmic Paradigms & Core Data Structures",
                "Asynchronous Client-Server API Orchestration",
                "Data Cleaning & Feature Transformation",
                "Integrating AI endpoints into interactive interfaces"
            ]
        }
    };

    // 4. Explorer Component Handling
    const navItems = document.querySelectorAll('.nav-item');
    const detailsPane = document.getElementById('detailsPane');
    const detailBadge = document.getElementById('detailBadge');
    const detailIcon = document.getElementById('detailIcon');
    const detailTitle = document.getElementById('detailTitle');
    const detailDesc = document.getElementById('detailDesc');
    const detailTopics = document.getElementById('detailTopics');
    const exploreEnrollBtn = document.getElementById('exploreEnrollBtn');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(i => {
                i.classList.remove('active');
                i.setAttribute('aria-selected', 'false');
            });
            item.classList.add('active');
            item.setAttribute('aria-selected', 'true');

            const targetKey = item.getAttribute('data-target');
            const data = courseData[targetKey];

            if (data && detailsPane) {
                detailsPane.classList.remove('pane-animated');
                void detailsPane.offsetWidth;
                detailsPane.classList.add('pane-animated');

                detailBadge.textContent = data.badge;
                detailIcon.textContent = data.icon;
                detailTitle.textContent = data.title;
                detailDesc.textContent = data.desc;
                if (exploreEnrollBtn) exploreEnrollBtn.setAttribute('data-course', data.title);

                detailTopics.innerHTML = '';
                data.topics.forEach(topic => {
                    const li = document.createElement('li');
                    li.textContent = topic;
                    detailTopics.appendChild(li);
                });
            }
        });
    });

    // 5. Accessible Modal Architecture
    const modal = document.getElementById('courseModal');
    const modalCourseName = document.getElementById('modalCourseName');
    const closeModal = document.querySelector('.close-modal');
    const confirmEnrollBtn = document.getElementById('confirmEnrollBtn');
    let lastActiveTrigger = null;

    document.addEventListener('click', (e) => {
        const enrollBtn = e.target.closest('.enroll-btn');
        if (enrollBtn) {
            e.preventDefault();
            lastActiveTrigger = enrollBtn;
            const courseTitle = enrollBtn.getAttribute('data-course');
            if (modalCourseName) modalCourseName.textContent = courseTitle;
            if (modal) {
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden';
                if (closeModal) closeModal.focus();
            }
        }
    });

    const closeModalDialog = () => {
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            if (lastActiveTrigger) lastActiveTrigger.focus();
        }
    };

    if (closeModal) closeModal.addEventListener('click', closeModalDialog);
    if (confirmEnrollBtn) confirmEnrollBtn.addEventListener('click', closeModalDialog);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModalDialog();
        });

        modal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const focusables = modal.querySelectorAll('button, [href], input, [tabindex]:not([tabindex="-1"])');
                const first = focusables[0];
                const last = focusables[focusables.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            } else if (e.key === 'Escape') {
                closeModalDialog();
            }
        });
    }

    // 6. Mobile Drawer Navigation
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // 7. Form Validation with Live Region
    const contactForm = document.getElementById('contactForm');
    const userEmail = document.getElementById('userEmail');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = userEmail ? userEmail.value.trim() : '';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(emailValue)) {
                formMessage.textContent = 'Please provide a valid email address.';
                formMessage.className = 'form-message error';
                userEmail.setAttribute('aria-invalid', 'true');
                userEmail.focus();
                return;
            }

            formMessage.textContent = 'Application received successfully! Check your inbox.';
            formMessage.className = 'form-message success';
            userEmail.removeAttribute('aria-invalid');
            contactForm.reset();
        });
    }
});
