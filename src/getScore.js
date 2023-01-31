const scores = document.querySelector('.scores');

const getScore = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I2dld6bFpfO3V6aFFp3g/scores');
  const data = await response.json();
  scores.innerHTML = data.result.map((score) => `<li>${score.user}: ${score.score}</li>`).join('');
};

export default getScore;