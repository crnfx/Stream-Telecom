window.addEventListener("DOMContentLoaded", () => {

  console.log("DOM fully loaded");
  const modalTrigger = document.querySelectorAll('.settings-trigger');
  const modalOverlay = document.querySelector('.settings__overlay ');
  const modals = document.querySelectorAll('.settings__modal');
  const wrapper = document.querySelector('.settings__wrapper');
  const modalClose = document.querySelector('.settings__modal--close');
  const section = document.querySelector('.settings');

  function closePopup() {
    modalOverlay.classList.remove('settings__overlay--visible');
    modals.forEach(el => {
      el.classList.remove('settings__modal--visible');
    });
    wrapper.classList.remove('settings__wrapper--hidden');
    if (section.style.backgroundColor = "rgba(45, 45, 45, 0.75)") {
      section.style.backgroundColor = "#2D2D2D";
    }
  }

  modalTrigger.forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      let path = e.currentTarget.getAttribute('data-path');
      modals.forEach(el => {
        el.classList.remove('settings__modal--visible');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('settings__modal--visible');
      modalOverlay.classList.add('settings__overlay--visible');
      wrapper.classList.add('settings__wrapper--hidden');
      if (section.style.backgroundColor = "#2D2D2D") {
        section.style.backgroundColor = "rgba(45, 45, 45, 0.75)";
      }
    });
  });

  modalOverlay.addEventListener('click', e => {
    if (e.target == modalOverlay) {
      closePopup()
    }
  });

  modalClose.addEventListener('click', closePopup)

});
