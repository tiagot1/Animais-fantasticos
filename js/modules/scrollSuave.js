export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function navScroll(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  linksInternos.forEach((link) => {
    link.addEventListener('click', navScroll);
  });
}
