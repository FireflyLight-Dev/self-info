document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initSmoothScroll();
    initSkillBars();
    initTabs();
    initBackToTop();
    initFormSubmit();
    initScrollAnimations();
});

function initNavbar() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.boxShadow = '0 4px 20px 0 rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 12px 0 rgba(0, 0, 0, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
}

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = progress + '%';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillBars.forEach(function(bar) {
        observer.observe(bar);
    });
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            tabBtns.forEach(function(b) {
                b.classList.remove('active');
            });
            tabContents.forEach(function(c) {
                c.classList.remove('active');
            });
            
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

function initBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initFormSubmit() {
    const form = document.getElementById('messageForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                showNotification('消息已发送成功！我会尽快回复您。', 'success');
                form.reset();
            } else {
                showNotification('请填写所有必填字段。', 'error');
            }
        });
    }
}

function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification notification-' + type;
    notification.innerHTML = '<i class="fas fa-' + (type === 'success' ? 'check-circle' : 'exclamation-circle') + '"></i><span>' + message + '</span>';
    
    notification.style.cssText = 'position: fixed; top: 90px; right: 20px; padding: 15px 25px; background: ' + (type === 'success' ? '#67C23A' : '#F56C6C') + '; color: white; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.15); display: flex; align-items: center; gap: 10px; z-index: 1001; animation: slideIn 0.3s ease;';
    
    const style = document.createElement('style');
    style.textContent = '@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }';
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    setTimeout(function() {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(function() {
            notification.remove();
        }, 300);
    }, 3000);
}

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.about-card, .skill-item, .soft-skill-item, .core-skill-card, .timeline-item, .award-card, .project-card, .hobby-item, .roadmap-item, .contact-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(function(el, index) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease ' + (index % 4) * 0.1 + 's, transform 0.6s ease ' + (index % 4) * 0.1 + 's';
        observer.observe(el);
    });
}

function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - navbarHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

initActiveNavLink();

document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('.avatar');
    
    if (avatar) {
        avatar.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzRBOTBFMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Wk08L3RleHQ+PC9zdmc+';
        });
    }
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

const tags = document.querySelectorAll('.tag');
tags.forEach(function(tag, index) {
    tag.style.animationDelay = (index * 0.1) + 's';
});

const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach(function(item, index) {
    item.style.transitionDelay = (index * 0.15) + 's';
});

window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});
