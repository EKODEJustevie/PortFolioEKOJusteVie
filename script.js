// ===== Variables globales =====
const MyAge = 20;
const Bio = `Hello! Moi c'est Juste-Vie, j'ai ${MyAge} ans. Je suis étudiant en école d'ingénierie à Mundiapolis. Passionné par les technologies, l'exploration spatiale et de sport. Je me spécialise en génie des systèmes aéronautique avec un fort intérêt pour la programmation, la robotique et la cybersécurité dont je me passionne depuis mes 13 ans.`;

// ===== Effet de défilement pour la navigation =====
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== Navigation fluide =====
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

// ===== Effet de particules dans le hero =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 100;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 212, 255, 0.5)';
            ctx.fill();
        }
    }
    
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Connecter les particules proches
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 212, 255, ${0.2 * (1 - distance / 100)})`;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ===== Effet typewriter pour la bio =====
function typeWriter(element, text, speed = 50) {
    if (!element) return;
    
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            element.style.borderRight = '3px solid #00d4ff';
            setInterval(() => {
                element.style.borderRight = element.style.borderRight === 'none' ? '3px solid #00d4ff' : 'none';
            }, 500);
        }
    }
    type();
}

// ===== Gestion des onglets de compétences =====
function initSkillsTabs() {
    const tabs = document.querySelectorAll('.skill-tab');
    const categories = document.querySelectorAll('.skill-category');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Retirer la classe active de tous les onglets
            tabs.forEach(t => t.classList.remove('active'));
            // Ajouter la classe active à l'onglet cliqué
            tab.classList.add('active');
            
            // Masquer toutes les catégories
            categories.forEach(cat => cat.classList.remove('active'));
            
            // Afficher la catégorie correspondante
            const category = tab.dataset.category;
            const targetCategory = document.getElementById(category);
            if (targetCategory) {
                targetCategory.classList.add('active');
            }
        });
    });
}

// ===== Filtrage des projets =====
function initProjectsFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// ===== Alerte pour les projets =====
function initProjectAlerts() {
    const projectBtns = document.querySelectorAll('.project-btn');
    
    projectBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Les détails des projets sont disponibles sur demande par email pour des raisons de confidentialité. Contactez-moi à justevie@gmail.com');
        });
    });
}

// ===== Animation au scroll =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observer les éléments qui doivent s'animer
    const animatedElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .interest-card, .hobby-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===== Initialisation du menu mobile =====
function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (toggle && navLinks) {
        toggle.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            if (navLinks.style.display === 'flex') {
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.flexDirection = 'column';
                navLinks.style.background = 'rgba(10, 14, 39, 0.98)';
                navLinks.style.padding = '2rem';
                navLinks.style.gap = '1rem';
            }
        });
        
        // Fermer le menu en cliquant sur un lien
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
            });
        });
    }
}

// ===== Animation des barres de compétences =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    });
    
    skillBars.forEach(bar => observer.observe(bar));
}

// ===== Initialisation au chargement de la page =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser les particules
    initParticles();
    
    // Démarrer l'effet typewriter après un court délai
    setTimeout(() => {
        const bioElement = document.getElementById('typewriter-text');
        if (bioElement) {
            typeWriter(bioElement, Bio, 30);
        }
    }, 1000);
    
    // Initialiser les onglets de compétences
    initSkillsTabs();
    
    // Initialiser le filtre des projets
    initProjectsFilter();
    
    // Initialiser les alertes des projets
    initProjectAlerts();
    
    // Initialiser les animations au scroll
    initScrollAnimations();
    
    // Initialiser le menu mobile
    initMobileMenu();
    
    // Animer les barres de compétences
    animateSkillBars();
    
    // Ajouter un effet de parallaxe au hero
    window.addEventListener('scroll', () => {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && window.scrollY < window.innerHeight) {
            heroContent.style.transform = `translateY(${window.scrollY * 0.5}px)`;
            heroContent.style.opacity = 1 - (window.scrollY / window.innerHeight);
        }
    });
});

// ===== Gestion du redimensionnement de la fenêtre =====
window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks && window.innerWidth > 768) {
        navLinks.style.display = 'flex';
        navLinks.style.position = 'static';
        navLinks.style.flexDirection = 'row';
        navLinks.style.background = 'none';
        navLinks.style.padding = '0';
    } else if (navLinks) {
        navLinks.style.display = 'none';
    }
});
