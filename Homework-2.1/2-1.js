window.addEventListener('keydown', playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // Ngừng nếu không có âm thanh tương ứng với phím nhấn
  audio.currentTime = 0; // Play lại từ đầu mỗi khi nhấn phím
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // Bỏ qua nếu không phải transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

keys.forEach(key => key.addEventListener('click', function() {
  const audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
  audio.currentTime = 0;
  audio.play();
  this.classList.add('playing');
}));
