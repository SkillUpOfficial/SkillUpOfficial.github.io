document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Загрузка сохранённой темы из localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme);
    updateIcon();
  } else {
    body.classList.add('dark-theme'); // Стандартная тема
  }

  // Переключение темы
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
      } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
      }
      updateIcon();
    });
  }

  // Обновление иконки
  function updateIcon() {
    if (!themeIcon) return;
    const isDark = body.classList.contains('dark-theme');
    themeIcon.className = isDark ? 'fas fa-moon' : 'fas fa-sun';
  }
});
