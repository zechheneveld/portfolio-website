// Project filters
const chips = document.querySelectorAll('.chip');
const projects = document.querySelectorAll('.project');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.toggle('active', c === chip));
    const filter = chip.dataset.filter;
    projects.forEach((p) => {
      const tags = p.dataset.tags.split(' ');
      p.hidden = filter !== 'all' && !tags.includes(filter);
    });
  });
});

// Reveal on scroll
const revealTargets = document.querySelectorAll('.project, .service, .steps li, .principles');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  revealTargets.forEach((el) => { el.classList.add('reveal'); io.observe(el); });
}

document.getElementById('year').textContent = new Date().getFullYear();
