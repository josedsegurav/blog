document.querySelector('.hamburger')?.addEventListener('click', () => {
    document.querySelector('.internal-links')?.classList.toggle('expanded');
    document.querySelector('.third')?.classList.toggle('close');
    document.querySelector('.right-close-menu')?.classList.toggle('close-right');
    document.querySelector('.left-close-menu')?.classList.toggle('close-left');
  });