// script.js
// Hero text animation: sequential fade-in of lines

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('hero-text');
    if (!container) {
      return;
    }

    const lines = [
      'Hello, my name is',
      'Minseong Bae',
      'Student majoring in Robotics',
      'Welcome to my site!'
    ];
  
    lines.forEach((text, index) => {
      const p = document.createElement('p');
      p.classList.add('line');
      p.textContent = text;
      // set animation delay so each line appears sequentially
      p.style.animationDelay = `${index * 1}s`;
      container.appendChild(p);
    });
  });
