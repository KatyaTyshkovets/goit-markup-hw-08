(() => {
  const refs = {
    openMobalBtn: document.querySelector('[data-mobal-open]'),
    closeMobalBtn: document.querySelector('[data-mobal-close]'),
    mobal: document.querySelector('[data-mobal]'),
  };

  refs.openMobalBtn.addEventListener('click', toggleMobal);
  refs.closeMobalBtn.addEventListener('click', toggleMobal);

  function toggleMobal() {
    refs.mobal.classList.toggle('is-hidden');
  }
})();