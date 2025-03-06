// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800, // Animation duration in milliseconds
    once: true,    // Animations happen only once
    easing: 'ease-in-out', // Smoother easing
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default anchor behavior
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth', // Smooth scroll to the target section
          block: 'start',     // Align to the top of the section
        });
      }
    });
  });
  
  // Form submission handling
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission
  
      // Show a confirmation message
      alert('Thank you for your message! I will get back to you soon.');
  
      // Clear the form fields
      form.reset();
    });
  }
  
  // Add hover effects to skill cards
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
      skill.style.transform = 'scale(1.1)';
      skill.style.backgroundColor = '#00ffff';
    });
    skill.addEventListener('mouseleave', () => {
      skill.style.transform = 'scale(1)';
      skill.style.backgroundColor = '#0a0a0a';
    });
  });
  
  // Add hover effects to project cards
  const projects = document.querySelectorAll('.project');
  projects.forEach(project => {
    project.addEventListener('mouseenter', () => {
      project.style.transform = 'translateY(-10px)';
    });
    project.addEventListener('mouseleave', () => {
      project.style.transform = 'translateY(0)';
    });
  });
  
  // Add hover effects to gallery images
  const galleryItems = document.querySelectorAll('.gallery-item img');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
    });
  });
  
  // Add hover effects to social links
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.transform = 'translateY(-5px)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.transform = 'translateY(0)';
    });
  });
  
  // Add a scroll-to-top button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '↑';
  scrollToTopButton.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopButton);
  
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  // Show/hide scroll-to-top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Add a loading animation
  window.addEventListener('load', () => {
    const loadingScreen = document.createElement('div');
    loadingScreen.classList.add('loading-screen');
    loadingScreen.innerHTML = 'Loading...';
    document.body.appendChild(loadingScreen);
  
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 2000); // Simulate a 2-second loading time
  });