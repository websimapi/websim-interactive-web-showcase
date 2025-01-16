const animateBtn = document.getElementById('animateBtn');
const circle = document.querySelector('.circle circle');
const revealBtn = document.getElementById('revealBtn');
const hiddenText = document.querySelector('.hidden-text');

animateBtn.addEventListener('click', () => {
  const length = circle.getTotalLength();
  circle.style.strokeDasharray = length;
  circle.style.strokeDashoffset = length;
  
  setTimeout(() => {
    circle.style.strokeDashoffset = '0';
  }, 0);
});

revealBtn.addEventListener('click', () => {
  hiddenText.style.display = 'block';
});