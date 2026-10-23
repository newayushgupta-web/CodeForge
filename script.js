// -------------------------------------------------------------
// CodeForge - Week 3 Interactive JavaScript Logic
// -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {

    // 1. Dynamic Course Repository Object
    const courseData = {
        frontend: {
            title: "Frontend Architecture",
            badge: "Module 01 • 8 Weeks",
            icon: "</>",
            desc: "Deep dive into modern web architecture. Build scalable layouts using semantic HTML5, intrinsic CSS Grid, Flexbox alignment, and responsive fluid clamp mathematics.",
            topics: [
                "Semantic HTML5 & Accessibility Landmarks",
                "Intrinsic CSS Grid & Flexbox Layouts",
                "Fluid Typography via clamp() mathematics",
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

    // 2. Interactive Curriculum Selector (Master-Detail Switcher)
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
            navItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const targetKey = item.getAttribute('data-target');
            const data = courseData[targetKey];

            if (data && detailsPane) {
                // Re-trigger slide animation
                detailsPane.classList.remove('pane-animated');
                void detailsPane.offsetWidth;
                detailsPane.classList.add('pane-animated');

                // Dynamic DOM text injection
                detailBadge.textContent = data.badge;
                detailIcon.textContent = data.icon;
                detailTitle.textContent = data.title;
                detailDesc.textContent = data.desc;
                if (exploreEnrollBtn) {
                    exploreEnrollBtn.setAttribute('data-course', data.title);
                }

                // Populate topic bullets dynamically
                detailTopics.innerHTML = '';
                data.topics.forEach(topic => {
                    const li = document.createElement('li');
                    li.textContent = topic;
                    detailTopics.appendChild(li);
                });
            }
        });
    });

    // 3. Dynamic Course Enrollment Modal Dialog
    const modal = document.getElementById('courseModal');
    const modalCourseName = document.getElementById('modalCourseName');
    const closeModal = document.querySelector('.close-modal');
    const confirmEnrollBtn = document.getElementById('confirmEnrollBtn');

    document.addEventListener('click', (e) => {
        const enrollBtn = e.target.closest('.enroll-btn');
        if (enrollBtn) {
            e.preventDefault();
            const courseTitle = enrollBtn.getAttribute('data-course');
            if (modalCourseName) modalCourseName.textContent = courseTitle;
            if (modal) {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }
    });

    const closeModalDialog = () => {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (closeModal) closeModal.addEventListener('click', closeModalDialog);
    if (confirmEnrollBtn) confirmEnrollBtn.addEventListener('click', closeModalDialog);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModalDialog();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModalDialog();
        }
    });

    // 4. Mobile Hamburger Drawer Navigation
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('open');
            document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // 5. Client-Side Form Validation with RegEx
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
                return;
            }

            formMessage.textContent = 'Application received successfully! Check your inbox.';
            formMessage.className = 'form-message success';
            contactForm.reset();
        });
    }
});
