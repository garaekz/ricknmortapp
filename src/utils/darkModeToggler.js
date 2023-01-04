export const setDarkMode = (mode) => {
  const currentMode = localStorage.getItem("darkMode");
  if (currentMode !== mode) {
    localStorage.setItem("darkMode", mode);
  }
};

export const isDarkMode = () => {
  return localStorage.getItem("darkMode") === "true";
}