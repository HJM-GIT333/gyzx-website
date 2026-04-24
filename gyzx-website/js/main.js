// ===== 光奕智显科技 - 官网JS =====

document.addEventListener('DOMContentLoaded', function() {

  // ===== Particle Effect =====
  const particlesEl = document.getElementById('particles');
  if (particlesEl) {
    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (Math.random() * 8 + 6) + 's';
      p.style.animationDelay = (Math.random() * 5) + 's';
      p.style.width = (Math.random() * 3 + 1) + 'px';
      p.style.height = p.style.width;
      p.style.opacity = Math.random() * 0.5 + 0.2;
      particlesEl.appendChild(p);
    }
  }

  // ===== Header Scroll Effect =====
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== Mobile Menu =====
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      menuBtn.classList.toggle('active');
      mobileNav.classList.toggle('show');
    });
    // Close menu on link click
    mobileNav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        menuBtn.classList.remove('active');
        mobileNav.classList.remove('show');
      });
    });
  }

  // ===== Scroll Animations =====
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(function(el) {
    observer.observe(el);
  });

  // ===== Counter Animation =====
  const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-number');
        counters.forEach(function(counter) {
          if (counter.dataset.animated) return;
          counter.dataset.animated = 'true';
          const target = parseInt(counter.getAttribute('data-target'));
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(function() {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
          }, 16);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    counterObserver.observe(statsSection);
  }

  // ===== Back to Top =====
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
