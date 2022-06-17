import Post from './components/Post';
import checkCoords from './components/checkCoords';

window.onload = () => {
  const feedForm = document.getElementById('feed-form');
  const feed = document.querySelector('.feed__posts');
  const warningPopup = document.querySelector('.warning-popup');
  const warningPopupForm = document.getElementById('form-warning');
  let postText;

  feedForm.reset();
  warningPopupForm.reset();

  feedForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    postText = feedForm.querySelector('#post').value;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = `[${position.coords.latitude.toFixed(
            5
          )}, ${position.coords.longitude.toFixed(5)}]`;
          feed.appendChild(new Post(postText, coords).render());
          feedForm.reset();
          return;
        },
        (error) => {
          warningPopup.classList.remove('hidden');
          feedForm.reset();
          if (warningPopupForm.querySelector('.form-warning__hint')) {
            warningPopupForm.querySelector('.form-warning__hint').remove();
          }
          return;
        }
      );
    }
  });

  warningPopupForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let coordsValue = warningPopupForm.querySelector('#coords-input').value;
    if (checkCoords(coordsValue)) {
      if (warningPopupForm.querySelector('.form-warning__hint')) {
        warningPopupForm.querySelector('.form-warning__hint').remove();
      }
      if (!/[\[\]]/g.test(coordsValue)) {
        coordsValue = `[${coordsValue}]`;
      }
      feed.appendChild(new Post(postText, coordsValue).render());
      warningPopupForm.reset();
      warningPopup.classList.add('hidden');
      return;
    } else {
      const warningHint = document.createElement('span');
      warningHint.className = 'form-warning__hint';
      warningHint.textContent =
        'Некорректно введены значения координат (координаты должны содержать 5 символов после точки, между координатами можеть быть не больше одного пробела.)';
      warningPopupForm.appendChild(warningHint);
    }
  });

  warningPopupForm
    .querySelector('.cancel-btn')
    .addEventListener('click', (evt) => {
      evt.preventDefault();
      warningPopup.classList.add('hidden');
      warningPopupForm.reset();
      return;
    });
};
