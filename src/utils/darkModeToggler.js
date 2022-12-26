import localforage from "localforage";

export const setDarkMode = async (mode) => {
  const currentMode = await localforage.getItem("darkMode");
  if (currentMode !== mode) {
    await localforage.setItem("darkMode", mode);
  }
};

export const isDarkMode = async () => {
  return await localforage.getItem("darkMode");
}