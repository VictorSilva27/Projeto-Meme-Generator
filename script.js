const inputMeme = document.getElementById('text-input');
const textMeme = document.getElementById('meme-text');

const inputImgMeme = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');

const memeContainer = document.getElementById('meme-image-container');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');

const meme01 = document.getElementById('meme-1');
const meme02 = document.getElementById('meme-2');
const meme03 = document.getElementById('meme-3');
const meme04 = document.getElementById('meme-4');

const handleChange = () => {
  textMeme.innerText = inputMeme.value;
};

inputMeme.addEventListener('keyup', handleChange);

const addImgToMeme = (event) => {
  memeImg.src = URL.createObjectURL(event.target.files[0]);
};

inputImgMeme.addEventListener('change', addImgToMeme);

const mudarBorder = (borda) => {
  memeContainer.style.border = borda;
};

btnFire.addEventListener('click', () => {
  mudarBorder('3px dashed red');
});

btnWater.addEventListener('click', () => {
  mudarBorder('blue 5px double');
});

btnEarth.addEventListener('click', () => {
  mudarBorder('groove green 6px');
});

meme01.addEventListener('click', ({ target }) => {
  memeImg.src = target.src;
});

meme02.addEventListener('click', ({ target }) => {
  memeImg.src = target.src;
});

meme03.addEventListener('click', ({ target }) => {
  memeImg.src = target.src;
});

meme04.addEventListener('click', ({ target }) => {
  memeImg.src = target.src;
});
