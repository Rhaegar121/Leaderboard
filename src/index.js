import './style.css';
import getScore from './getScore.js';
import postScore from './postScore.js';

const form = document.querySelector('form');
const refresh = document.querySelector('#refresh');
const btn = document.querySelector('#submit');

window.onload = () => {
  getScore();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  btn.disable = true;
  const formData = new FormData(e.target);
  const score = {
    user: formData.get('name'),
    score: formData.get('score'),
  };
  postScore(score).then(() => {
    e.target.reset();
    getScore();
  });
  btn.disable = false;
});

refresh.onclick = () => {
  getScore();
};