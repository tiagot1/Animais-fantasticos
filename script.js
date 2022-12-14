function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if (tabContent.length && tabMenu.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((event, index) => {
      event.addEventListener('click', function () {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initScrollSuave() {
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
initScrollSuave();
