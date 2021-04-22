export const toggleMode = () => {
  let dataTheme = document.documentElement.getAttribute('data-theme');
  if (dataTheme != 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', '');
  }
};
