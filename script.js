// Default configuration
        const defaultConfig = {
            full_name: "Tousif Khan",
            professional_title: "Web Developer & Software Development Graduate",
            tagline: "Passionate about creating beautiful, functional web experiences. Skilled in modern web technologies and eager to contribute to innovative projects.",
            email: "your.email@example.com",
            phone: "+91 XXXXX XXXXX",
            location: "Pune, Maharashtra, India"
        };

        // Config change handler
        async function onConfigChange(config) {
            const fullName = config.full_name || defaultConfig.full_name;
            const professionalTitle = config.professional_title || defaultConfig.professional_title;
            const tagline = config.tagline || defaultConfig.tagline;
            const email = config.email || defaultConfig.email;
            const phone = config.phone || defaultConfig.phone;
            const location = config.location || defaultConfig.location;

            document.getElementById('hero-name').textContent = fullName;
            document.getElementById('hero-title').textContent = professionalTitle;
            document.getElementById('hero-tagline').textContent = tagline;
            document.getElementById('contact-email').textContent = email;
            document.getElementById('contact-phone').textContent = phone;
            document.getElementById('contact-location').textContent = location;
        }

        // Initialize Element SDK
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig: defaultConfig,
                onConfigChange: onConfigChange,
                mapToCapabilities: (config) => ({
                    recolorables: [],
                    borderables: [],
                    fontEditable: undefined,
                    fontSizeable: undefined
                }),
                mapToEditPanelValues: (config) => new Map([
                    ["full_name", config.full_name || defaultConfig.full_name],
                    ["professional_title", config.professional_title || defaultConfig.professional_title],
                    ["tagline", config.tagline || defaultConfig.tagline],
                    ["email", config.email || defaultConfig.email],
                    ["phone", config.phone || defaultConfig.phone],
                    ["location", config.location || defaultConfig.location]
                ])
            });
        }

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll to top button
        const scrollTopBtn = document.getElementById('scrollTop');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // ================= CONTACT FORM SAFE HANDLER =================
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', () => {
        setTimeout(() => {
            formSuccess.style.display = 'block';
        }, 500);
        
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    });
}

        // Skill bar animation on scroll
        const observerOptions = {
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = entry.target.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        bar.style.width = bar.style.width || '0%';
                    });
                }
            });
        }, observerOptions);

        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            observer.observe(skillsSection);
        }



        // Mobile menu functionality
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const menuOverlay = document.getElementById('menuOverlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        // Toggle mobile menu
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            // Change hamburger icon to X when menu is open
            if (mobileMenu.classList.contains('active')) {
                mobileMenuBtn.textContent = '✕';
            } else {
                mobileMenuBtn.textContent = '☰';
            }
        }

        // Close mobile menu
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            menuOverlay.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        }

        // Event listeners for mobile menu
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        menuOverlay.addEventListener('click', closeMobileMenu);

        // Close menu when clicking on a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMobileMenu();
            });
        });
    
 (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9b1fc25e5603a994',t:'MTc2NjQwNzk3Ny4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
 
// ================= CERTIFICATE PDF OPEN (FINAL) =================
function openCertificate(pdfPath) {
    if (!pdfPath) {
        alert("Certificate file path missing!");
        return;
    }
    window.open(pdfPath, "_blank");
}