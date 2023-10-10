const buttons = document.querySelectorAll('but');

but.forEach((but) => {
  but.addEventListener('click', () => {
    if (but.classList.contains('clicked')) {
      but.classList.remove('clicked');
    } else {
      but.classList.add('clicked');
    }
  });
});

