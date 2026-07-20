// ---------- Effet machine à écrire (bio) ----------
const bio = "Ingénieur aéronautique en formation, passionné par les systèmes embarqués, l'IoT et l'intelligence artificielle. Je conçois des solutions à la croisée du matériel et du logiciel — des microcontrôleurs industriels aux assistants intelligents.";
const bioEl = document.getElementById('typewriter-text');
let bioIndex = 0;

function typeBio(){
  if(!bioEl) return;
  if(bioIndex < bio.length){
    bioEl.textContent += bio.charAt(bioIndex);
    bioIndex++;
    setTimeout(typeBio, 18);
  }
}

const aboutSection = document.getElementById('about');
let bioStarted = false;
const bioObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting && !bioStarted){
      bioStarted = true;
      typeBio();
    }
  });
}, { threshold: 0.3 });
if(aboutSection) bioObserver.observe(aboutSection);

// ---------- Onglets de compétences ----------
const skillTabs = document.querySelectorAll('.skill-tab');
const skillCategories = document.querySelectorAll('.skill-category');

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    skillTabs.forEach(t => t.classList.remove('active'));
    skillCategories.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById(tab.dataset.category);
    if(target) target.classList.add('active');
  });
});

// ---------- Filtre projets ----------
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      if(filter === 'all' || card.dataset.category === filter){
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ---------- Menu mobile ----------
const menuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');
if(menuToggle && navLinks){
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navLinks.style.display = navLinks.classList.contains('open') ? 'flex' : 'none';
  });
}

// ---------- Animation d'apparition des panneaux ----------
const revealTargets = document.querySelectorAll('.panel');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealTargets.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(12px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';
  revealObserver.observe(el);
});
