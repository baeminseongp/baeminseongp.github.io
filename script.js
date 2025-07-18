// script.js
// Hero text animation: sequential fade-in of lines

document.addEventListener('DOMContentLoaded', () => {
    const lines = [
      'Hello, my name is',
      'Minseong Bae',
      'Student majoring in Robotics',
      'Welcome to my site!'
    ];
    const container = document.getElementById('hero-text');
  
    lines.forEach((text, index) => {
      const p = document.createElement('p');
      p.classList.add('line');
      p.textContent = text;S
      // set animation delay so each line appears sequentially
      p.style.animationDelay = `${index * 1}s`;
      container.appendChild(p);
    });
  });