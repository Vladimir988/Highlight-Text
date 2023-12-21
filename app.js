document.addEventListener('DOMContentLoaded', () => {
  highlightText();
});

function highlightText() {
  const text = [...document.querySelectorAll('.highlight')];
  for (let i = 0; i < text.length; i++) {
    highlight(text[i]);
  }

  const textModified = [...document.querySelectorAll('.highlight')];
  for (let i = 0; i < textModified.length; i++) {
    highlightModified(textModified[i]);
  }
}

function highlight(text) {
  let textArr = text.innerHTML.split(' ');
      textArr = textArr.map((item, index) => {
        return `<span class="item-${index}">${item}</span>`;
      });

  text.innerHTML = textArr.join(' ');
}

function highlightModified(text, interval = 1) {
  interval   = (parseFloat(text.dataset.interval) || interval) * 1000;
  let chunks = text.querySelectorAll('span');
  let item   = 0;
  let vector = 'up';
  setInterval(() => {
    if(vector === 'up') {
      chunks[item].style.opacity = .5;
      item++;
      vector = (item >= chunks.length) ? 'down' : 'up';
    } else if(vector === 'down') {
      item--;
      chunks[item].style.opacity = 1;
      vector = (item === 0) ? 'up' : 'down';
    }
  }, interval);
}