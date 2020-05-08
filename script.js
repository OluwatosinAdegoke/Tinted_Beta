const button = document.querySelector('#dropd');
const element = document.querySelector('.header-sub-container')

button.addEventListener('click', event => {
        document.querySelector('.header-sub-container').classList.toggle('invisible');
        button.classList.toggle('dropd')
        button.classList.toggle('drop-active')
  });