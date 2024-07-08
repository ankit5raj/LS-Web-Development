const questions = [
  {
      question: "Where did Cricket originated in India?",
      options: ["Bombay", "Patna", "Madras", "Palampur"],
      answer: "Bombay"
  },
  {
      question: "Which Year is considered to be origin of Test cricket?",
      options: ["1877", "1879", "1880", "1876"],
      answer: "1877"
  },
  {
      question: "Which group founded first Indian Cricket Club?",
      options: ["Parsis", "Zoroastrians", "Christians", "Hindus"],
      answer: "Parsis"
  }
];

function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container');

  questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');

      const questionText = document.createElement('p');
      questionText.textContent = `Question ${index + 1}: ${q.question}`;
      questionDiv.appendChild(questionText);

      q.options.forEach(option => {
          const button = document.createElement('button');
          button.textContent = option;
          button.onclick = () => checkAnswer(index, option);
          questionDiv.appendChild(button);
      });

      const result = document.createElement('p');
      result.classList.add('result');
      result.id = `result-${index}`;
      questionDiv.appendChild(result);

      quizContainer.appendChild(questionDiv);
  });
}

function checkAnswer(questionIndex, answer) {
  const resultElement = document.getElementById(`result-${questionIndex}`);
  if (answer === questions[questionIndex].answer) {
      resultElement.textContent = 'Correct!';
      resultElement.style.color = 'green';
  } else {
      resultElement.textContent = 'Incorrect. Try again!';
      resultElement.style.color = 'red';
  }
}

document.addEventListener('DOMContentLoaded', loadQuiz);

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('open');
});
