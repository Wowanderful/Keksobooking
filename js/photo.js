const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarInput = document.getElementById('avatar');
const avartarPreview = document.querySelector('.ad-form-header__preview').querySelector('img');

const photoInput = document.getElementById('images');
const photoPreview = document.querySelector('.ad-form__photo');

function loadAvatarPreview () {
  avatarInput.addEventListener('change', () => {
    const file = avatarInput.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      avartarPreview.src = URL.createObjectURL(file);
    }
  });
};


function loadPhotoPreview () {
  photoInput.addEventListener('change', () => {
    const file = photoInput.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const image = document.createElement('img');
      image.width = '70';
      image.height = '70';
      image.alt = 'User photo preview'
      image.src = URL.createObjectURL(file);
      photoPreview.appendChild(image);
    }
  });
};

export {loadAvatarPreview, loadPhotoPreview}


