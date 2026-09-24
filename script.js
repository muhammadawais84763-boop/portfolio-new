const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.querySelector('.nav-panel');
const navLinks = [...document.querySelectorAll('.nav-link')];
const backToTopBtn = document.querySelector('.back-to-top');
const filterButtons = [...document.querySelectorAll('.filter-btn')];
const projectCards = [...document.querySelectorAll('.project-card')];
const revealItems = [...document.querySelectorAll('.reveal')];
const serviceCards = [...document.querySelectorAll('.service-card')];
const modalOverlays = [...document.querySelectorAll('.modal-overlay')];
const testimonials = [...document.querySelectorAll('.testimonial')];
const form = document.querySelector('.contact-form');
const statusMessage = document.querySelector('.form-status');

const projectData = {
  'project-1': {
    title: 'Film Noir Story',
    category: 'Cinematic Films',
    description: 'A dramatic cinematic edit shaped around atmosphere, tension, and layered storytelling. Built to feel premium and immersive from the first frame to the final beat.',
    details: ['Narrative pacing and scene flow', 'Creative color treatment', 'Sound layering and atmospheric design'],
    techniques: 'Narrative editing, cinematic grading, sound design',
    software: 'Adobe Premiere Pro, DaVinci Resolve, Adobe Audition',
    thumb: 'linear-gradient(135deg, rgba(255,77,77,0.25), rgba(255,255,255,0.05), rgba(102,224,168,0.18))'
  },
  'project-2': {
    title: 'Social Campaign Cut',
    category: 'Short Form',
    description: 'Fast-paced social content optimized for attention, retention, and platform-native pacing. This edit uses strong hooks and bold text-driven emphasis.',
    details: ['Hook-first sequence design', 'Fast transitions and B-roll rhythm', 'Caption-ready edit structure'],
    techniques: 'Short-form storytelling, motion text, rhythm editing',
    software: 'Premiere Pro, After Effects, CapCut',
    thumb: 'linear-gradient(135deg, rgba(255,77,77,0.12), rgba(255,255,255,0.02), rgba(102,224,168,0.12))'
  },
  'project-3': {
    title: 'Product Launch Edit',
    category: 'Commercials',
    description: 'A polished commercial edit designed to showcase product features with clarity, confidence, and premium motion treatment.',
    details: ['Product storytelling structure', 'Brand-led visual rhythm', 'High-end transitions and polish'],
    techniques: 'Commercial editing, product pacing, brand motion graphics',
    software: 'Premiere Pro, After Effects, Photoshop',
    thumb: 'linear-gradient(135deg, rgba(102,224,168,0.18), rgba(255,255,255,0.05), rgba(255,77,77,0.18))'
  },
  'project-4': {
    title: 'Brand Animation Sequence',
    category: 'Motion Graphics',
    description: 'Animated brand motion designed to build identity, impact, and visual clarity across storytelling beats and launch elements.',
    details: ['Kinetic typography', 'Animated title sequence', 'Visual transitions and overlays'],
    techniques: 'Motion graphics, typography animation, compositing',
    software: 'After Effects, Illustrator, Premiere Pro',
    thumb: 'linear-gradient(135deg, rgba(255,77,77,0.22), rgba(255,255,255,0.04), rgba(102,224,168,0.14))'
  },
  'project-5': {
    title: 'Highlight Montage',
    category: 'Gaming Edits',
    description: 'An energetic gameplay edit with beat-synced transitions, crowd-driven hype moments, and a cinematic finish.',
    details: ['Highlight selection and pacing', 'Sound design and impact cues', 'Dynamic transitions and overlays'],
    techniques: 'Gaming montage editing, sound design, dynamic transitions',
    software: 'Premiere Pro, Audition, After Effects',
    thumb: 'linear-gradient(135deg, rgba(102,224,168,0.12), rgba(255,255,255,0.02), rgba(255,77,77,0.18))'
  },
  'project-6': {
    title: 'AI Visual Story',
    category: 'AI-Assisted',
    description: 'Creative AI-assisted visuals blended with human-editing precision for a modern, experimental, and future-facing visual style.',
    details: ['AI-assisted visual generation', 'Creative experimentation', 'Fast workflow enhancement'],
    techniques: 'AI-enhanced editing, generative visuals, creative automation',
    software: 'AI tools, Premiere Pro, After Effects',
    thumb: 'linear-gradient(135deg, rgba(255,77,77,0.16), rgba(255,255,255,0.05), rgba(102,224,168,0.2))'
  },
  'project-7': {
    title: 'Long-Form Retention Cut',
    category: 'YouTube Editing',
    description: 'A long-form content edit focused on retention, clarity, and emotional pacing to keep viewers engaged throughout the journey.',
    details: ['Retention-focused pacing', 'B-roll integration', 'Intro and outro polishing'],
    techniques: 'Podcast and YouTube editing, pacing, clean audio polish',
    software: 'Premiere Pro, Audition, DaVinci Resolve',
    thumb: 'linear-gradient(135deg, rgba(102,224,168,0.16), rgba(255,255,255,0.04), rgba(255,77,77,0.12))'
  },
  'project-8': {
    title: 'Travel Visual Story',
    category: 'Cinematic Films',
    description: 'A travel narrative built on atmosphere, movement, and carefully timed transitions to create immersive mood and emotional flow.',
    details: ['Atmospheric pacing', 'Elegant travel transitions', 'Location-driven color composition'],
    techniques: 'Cinematic travel storytelling, grading, motion pacing',
    software: 'Premiere Pro, DaVinci Resolve, Photoshop',
    thumb: 'linear-gradient(135deg, rgba(255,77,77,0.12), rgba(255,255,255,0.03), rgba(102,224,168,0.18))'
  }
};

const serviceData = {
  'cinematic-film': {
    title: 'Cinematic Film Editing',
    category: 'Cinematic Film Editing',
    description: 'Cinematic storytelling, film editing, color grading, sound design, and scene transitions designed to create memorable visual drama.',
    features: ['Cinematic storytelling', 'Film editing', 'Color grading', 'Sound design', 'Scene transitions', 'Professional pacing']
  },
  'short-form': {
    title: 'Short-Form Video Editing',
    category: 'Short-Form Video Editing',
    description: 'Fast-paced edits for Reels, Shorts, and TikTok that hook attention quickly and keep viewers engaged with platform-native pacing.',
    features: ['Instagram Reels', 'YouTube Shorts', 'TikTok videos', 'Viral-style editing', 'Captions and subtitles', 'Fast-paced transitions', 'Engaging hooks']
  },
  'commercial': {
    title: 'Commercial Video Editing',
    category: 'Commercial Video Editing',
    description: 'Strategic commercial editing built for brand marketing, product storytelling, and professional promotional campaigns.',
    features: ['Brand advertisements', 'Product commercials', 'Business promotional videos', 'Social media ads', 'Product storytelling', 'Professional sound design']
  },
  'motion-graphics': {
    title: 'Motion Graphics Editing',
    category: 'Motion Graphics Editing',
    description: 'Graphic-driven creative edits including kinetic typography, title sequences, brand animations, and polished transitions.',
    features: ['Animated titles', 'Logo animation', 'Kinetic typography', 'Motion graphics', 'Infographics', 'Visual effects', 'Creative transitions']
  },
  'gaming': {
    title: 'Gaming Video Editing',
    category: 'Gaming Video Editing',
    description: 'High-energy edits built for gaming content with dramatic pacing, intense transitions, and clean audio emphasis.',
    features: ['Gaming highlights', 'YouTube gaming videos', 'Montage editing', 'Cinematic gaming intros', 'Sound effects', 'Beat-synced edits', 'Dynamic transitions']
  },
  'ai-assisted': {
    title: 'AI-Assisted Video Editing',
    category: 'AI-Assisted Video Editing',
    description: 'Cutting-edge AI workflows to streamline editing, generate visuals, and improve speed without compromising creative quality.',
    features: ['AI-powered editing workflows', 'AI-generated visuals', 'AI voiceovers', 'Background removal', 'Caption generation', 'Creative AI video effects', 'Faster editing workflows']
  },
  'youtube': {
    title: 'YouTube Video Editing',
    category: 'YouTube Video Editing',
    description: 'Long-form YouTube edits focused on stronger retention, audience engagement, and a professional final presentation.',
    features: ['Long-form YouTube videos', 'YouTube intros and outros', 'Retention-focused editing', 'Professional captions', 'Sound effects', 'B-roll editing', 'Thumbnail placeholder section', 'YouTube Shorts repurposing']
  }
};

function setHeaderState() {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

function initRevealOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
}

function initNavigation() {
  navToggle.addEventListener('click', () => {
    const isOpen = navPanel.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
      navPanel.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.closest('.nav-panel') && !target.closest('.nav-toggle')) {
      navPanel.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

function handleActiveSection() {
  const sections = [...document.querySelectorAll('main section[id]')];
  const scrollPos = window.scrollY + 150;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (!link) return;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-number');
  const speed = 30;

  counters.forEach((counter) => {
    const target = Number(counter.dataset.target || 0);
    let current = 0;

    const update = () => {
      current += Math.ceil(target / 40);
      if (current >= target) {
        counter.textContent = target;
        return;
      }
      counter.textContent = current;
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        update();
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    observer.observe(counter);
  });
}

function initPortfolioFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

      projectCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
}

function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const title = document.getElementById('project-modal-title');
  const category = document.getElementById('modal-category');
  const description = document.getElementById('project-description');
  const details = document.getElementById('project-details');
  const techniques = document.getElementById('project-techniques');
  const software = document.getElementById('project-software');
  const thumb = document.getElementById('modal-thumb');

  document.querySelectorAll('.view-project, .play-cta').forEach((button) => {
    button.addEventListener('click', () => {
      const key = button.dataset.project;
      const project = projectData[key];
      if (!project) return;

      title.textContent = project.title;
      category.textContent = project.category;
      description.textContent = project.description;
      techniques.textContent = project.techniques;
      software.textContent = project.software;
      thumb.style.background = project.thumb;

      details.innerHTML = '';
      project.details.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        details.appendChild(li);
      });

      openModal('project-modal');
    });
  });

  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => closeModal('project-modal'));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal('project-modal');
  });
}

function initServiceModal() {
  const modal = document.getElementById('service-modal');
  const title = document.getElementById('service-modal-title');
  const category = document.getElementById('service-category');
  const description = document.getElementById('service-description');
  const features = document.getElementById('service-features');

  serviceCards.forEach((card) => {
    const trigger = card.querySelector('.service-details-trigger');
    trigger.addEventListener('click', () => {
      const key = card.dataset.service;
      const service = serviceData[key];
      if (!service) return;

      title.textContent = service.title;
      category.textContent = service.category;
      description.textContent = service.description;
      features.innerHTML = '';
      service.features.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        features.appendChild(li);
      });

      openModal('service-modal');
    });
  });

  const closeBtn = modal.querySelector('.modal-close');
  closeBtn.addEventListener('click', () => closeModal('service-modal'));

  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal('service-modal');
  });
}

function initTestimonials() {
  let currentIndex = 0;
  const prevButton = document.querySelector('.slider-btn.prev');
  const nextButton = document.querySelector('.slider-btn.next');

  function showTestimonial(index) {
    testimonials.forEach((item, i) => {
      item.classList.toggle('active', i === index);
    });
  }

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }, 5000);
}

function validateField(field) {
  const value = field.value.trim();
  const name = field.name;

  if (name === 'name' && value.length < 2) {
    return 'Please enter your name.';
  }

  if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Please enter a valid email.';
  }

  if (name === 'projectType' && !value) {
    return 'Please select a project type.';
  }

  if (name === 'budget' && value.length < 2) {
    return 'Please enter your budget range.';
  }

  if (name === 'message' && value.length < 15) {
    return 'Please tell me a bit more about your project.';
  }

  return '';
}

function initContactForm() {
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let hasError = false;
    const fields = [...form.querySelectorAll('input, select, textarea')];

    fields.forEach((field) => {
      const message = validateField(field);
      field.setCustomValidity(message);
      if (message) {
        hasError = true;
      }
    });

    if (hasError) {
      const firstInvalid = fields.find((field) => field.validationMessage);
      const errorMessage = firstInvalid ? firstInvalid.validationMessage : 'Please complete all required fields.';
      statusMessage.textContent = errorMessage;
      statusMessage.classList.remove('success');
      statusMessage.classList.add('error');
      return;
    }

    statusMessage.textContent = 'Your inquiry has been prepared successfully. Connect the form to a real backend to send messages.';
    statusMessage.classList.remove('error');
    statusMessage.classList.add('success');
    form.reset();
  });
}

function initBackToTop() {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initMotionInteractions() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (reduceMotion || !finePointer) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  document.body.classList.add('custom-cursor');
  const ambientBackground = document.querySelector('.ambient-background');
  let pointerX = -100;
  let pointerY = -100;
  let ringX = pointerX;
  let ringY = pointerY;

  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;

    if (ambientBackground) {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      ambientBackground.style.setProperty('--ambient-x', `${x * 18}px`);
      ambientBackground.style.setProperty('--ambient-y', `${y * 14}px`);
    }
  }, { passive: true });

  const animateCursor = () => {
    ringX += (pointerX - ringX) * 0.14;
    ringY += (pointerY - ringY) * 0.14;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
    requestAnimationFrame(animateCursor);
  };
  animateCursor();

  document.querySelectorAll('a, button, input, select, textarea, .service-card, .project-card, .price-card').forEach((element) => {
    element.addEventListener('pointerenter', () => document.body.classList.add('cursor-hover'));
    element.addEventListener('pointerleave', () => document.body.classList.remove('cursor-hover'));
  });

  document.querySelectorAll('.service-card, .project-card, .price-card, .software-card, .stat-card, .point, .contact-item, .contact-form-wrap, .timeline-content, .testimonial, .hero-frame, .portrait-card').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      card.style.setProperty('--card-x', `${x * 100}%`);
      card.style.setProperty('--card-y', `${y * 100}%`);
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 5}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 5}deg`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.removeProperty('--card-x');
      card.style.removeProperty('--card-y');
      card.style.removeProperty('--tilt-x');
      card.style.removeProperty('--tilt-y');
    });
  });

  const heroFrame = document.querySelector('.hero-frame');
  if (heroFrame) {
    heroFrame.addEventListener('pointermove', (event) => {
      const rect = heroFrame.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      heroFrame.style.setProperty('--hero-tilt-x', `${(0.5 - y) * 6}deg`);
      heroFrame.style.setProperty('--hero-tilt-y', `${(x - 0.5) * 8 - 4}deg`);
    });
    heroFrame.addEventListener('pointerleave', () => {
      heroFrame.style.removeProperty('--hero-tilt-x');
      heroFrame.style.removeProperty('--hero-tilt-y');
    });
  }

  const portraitCard = document.querySelector('.portrait-card');
  if (portraitCard) {
    portraitCard.addEventListener('pointermove', (event) => {
      const rect = portraitCard.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      portraitCard.style.setProperty('--portrait-tilt-x', `${(0.5 - y) * 5}deg`);
      portraitCard.style.setProperty('--portrait-tilt-y', `${(x - 0.5) * 7 + 3}deg`);
    });
    portraitCard.addEventListener('pointerleave', () => {
      portraitCard.style.removeProperty('--portrait-tilt-x');
      portraitCard.style.removeProperty('--portrait-tilt-y');
    });
  }
}

function initEscClosing() {
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modalOverlays.forEach((modal) => closeModal(modal.id));
    }
  });
}

window.addEventListener('scroll', () => {
  setHeaderState();
  handleActiveSection();
});

window.addEventListener('load', () => {
  setHeaderState();
  initRevealOnScroll();
  animateCounters();
  initNavigation();
  initPortfolioFilters();
  initProjectModal();
  initServiceModal();
  initTestimonials();
  initContactForm();
  initBackToTop();
  initMotionInteractions();
  initEscClosing();
});
