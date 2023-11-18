/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
const localStorageUtils = {
  // All LocalStorage keys
  TOKEN_KEY: "token", // localStorageUtils.TOKEN_KEY
  USER_KEY: "user", // localStorageUtils.USER_KEY

  // All LocalStorage methods -> // localStorageUtils.setItem(key, value)
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error storing data in localStorage:", error);
    }
  },

  getItem(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
      return null;
    }
  },

  removeItem(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing data from localStorage:", error);
    }
  },

  clearAll() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  },
};

export default localStorageUtils;
