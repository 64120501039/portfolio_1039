const butt = document.querySelectorAll('butt');

butt.forEach((butt) => {
    butt.addEventListener('click', () => {
    if (butt.classList.contains('clicked')) {
        butt.classList.remove('clicked');
    } else {
        butt.classList.add('clicked');
    }
  });
});