import './style.css';
import getScore from './getScore.js';
import postScore from './postScore.js';

const form = document.querySelector('form');
const refresh = document.querySelector('#refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const score = {
    user: formData.get('name'),
    score: formData.get('score'),
  };
  postScore(score).then(() => {
    e.target.reset();
    getScore();
  });
});

refresh.onclick = () => {
  getScore();
};