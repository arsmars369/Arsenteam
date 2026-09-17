const tabs = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');
const memberCards = document.querySelectorAll('.member-card');

function setActiveProfile(targetId) {
  tabs.forEach((tab) => {
    tab.classList.toggle('active', tab.dataset.tab === targetId);
  });

  panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === targetId);
  });

  memberCards.forEach((card) => {
    card.classList.toggle('active', card.dataset.target === targetId);
  });

  const targetSection = document.getElementById('resume');
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => setActiveProfile(tab.dataset.tab));
});

memberCards.forEach((card) => {
  card.addEventListener('click', () => setActiveProfile(card.dataset.target));
});
