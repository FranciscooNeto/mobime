export const TOKEN_USER = "token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_USER) !== null;
export const getToken = () => localStorage.getItem(TOKEN_USER);
export const login = token => {
  localStorage.setItem(TOKEN_USER, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_USER);
};