const postScore = async (score) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I2dld6bFpfO3V6aFFp3g/scores', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
  return response.json();
};

export default postScore;