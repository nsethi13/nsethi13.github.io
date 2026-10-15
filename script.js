'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(expanded));
  navigation.classList.toggle('is-open', expanded);
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});

const projects = {
  governance: {
    title: 'Stronger nonprofit governance',
    meta: 'Down Syndrome Association of Pittsburgh · Pro bono consulting · January–April 2026',
    context: 'A governance consulting engagement for a disability services provider serving more than 1,800 individuals, completed through the University of Pittsburgh’s School of Public and International Affairs.',
    work: ['Analyzed board governance and benchmarked five or more peer organizations against state and federal compliance frameworks.', 'Identified governance gaps and conflicting requirements across source documents, documenting the rationale for each finding.', 'Recommended bylaw amendments and board development reforms to strengthen compliance and long-term governance capacity.'],
    focus: 'Board governance · Peer benchmarking · Regulatory analysis · Recommendations for leadership'
  },
  workforce: {
    title: 'Pathways to workforce opportunity',
    meta: 'University of Pittsburgh · Graduate academic project',
    context: 'A proposed workforce development program targeting 100 low-income youth, developed as part of a graduate strategic policy portfolio. The $250,000 figure is a projected grant request, rather than awarded funding.',
    work: ['Developed a projected $250,000 grant proposal and a five-year strategic policy portfolio.', 'Incorporated monitoring and evaluation frameworks, SMART outcomes, and budget assumptions.', 'Connected program goals to workforce skills, training, and measurable participant outcomes.'],
    focus: 'Grant proposal development · Program planning · Monitoring & evaluation · Budget assumptions'
  },
  democracy: {
    title: 'Democratic resilience & technology',
    meta: 'Matthew B. Ridgway Center for International Security Studies · October 2025–May 2026',
    context: 'A transatlantic research program on democratic resilience and technology governance, involving Cumberland Lodge in the United Kingdom and the University of Northampton.',
    work: ['Conducted background research and synthesized policy perspectives for institutional stakeholders.', 'Co-facilitated two cross-institutional dialogue sessions among U.S. and U.K. academic and government-adjacent stakeholders.', 'Translated research into concise briefing materials and recommendations.'],
    focus: 'Technology governance · Democratic resilience · Transatlantic dialogue · Policy briefings'
  },
  policy: {
    title: 'Evidence for informed policy',
    meta: 'School of Public and International Affairs · August 2024–present',
    context: 'An ongoing graduate portfolio examining civil rights, AI legislation, privacy regulation, international security, technology governance, and economic growth.',
    work: ['Authored more than nine policy memos and legal analyses, drawing on over 24 government, institutional, and academic sources.', 'Conducted qualitative and quantitative research using R/RStudio and AI-assisted analysis tools.', 'Performed sensitivity analysis and stakeholder mapping in ArcGIS Pro, integrating five data sources.', 'Reviewed empirical literature on human capital investment, workforce skills, productivity, and long-term economic growth.'],
    focus: 'Policy writing · Legal analysis · Research synthesis · R/RStudio · ArcGIS Pro'
  }
};

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');
let opener;
document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    content.replaceChildren();
    const heading = document.createElement('h2');
    heading.id = 'dialog-title';
    heading.textContent = project.title;
    const meta = document.createElement('p');
    meta.className = 'dialog-meta';
    meta.textContent = project.meta;
    const context = document.createElement('p');
    context.textContent = project.context;
    const workHeading = document.createElement('h3');
    workHeading.textContent = 'My contribution';
    const list = document.createElement('ul');
    project.work.forEach((text) => {
      const item = document.createElement('li');
      item.textContent = text;
      list.append(item);
    });
    const focusHeading = document.createElement('h3');
    focusHeading.textContent = 'Areas of focus';
    const focus = document.createElement('p');
    focus.textContent = project.focus;
    content.append(heading, meta, context, workHeading, list, focusHeading, focus);
    opener = button;
    dialog.showModal();
    document.body.classList.add('modal-open');
  });
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  opener?.focus();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach((link) => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
}
document.querySelector('#year').textContent = new Date().getFullYear();
