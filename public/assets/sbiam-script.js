document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('gods-time-logde-theme') || 'snow';
  setTheme(savedTheme, false);
});

function setTheme(theme, persist = true) {
  const html = document.documentElement;
  const body = document.body;
  const snowBtn = document.querySelector('.theme-btn-snow');
  const carbonBtn = document.querySelector('.theme-btn-carbon');

  if (theme === 'carbon') {
    html.classList.add('carbon');
    body.classList.add('carbon');
    snowBtn && snowBtn.classList.remove('active');
    carbonBtn && carbonBtn.classList.add('active');
  } else {
    html.classList.remove('carbon');
    body.classList.remove('carbon');
    carbonBtn && carbonBtn.classList.remove('active');
    snowBtn && snowBtn.classList.add('active');
  }

  if (persist) {
    localStorage.setItem('gods-time-logde-theme', theme);
  }
}
