import { createSlice } from '@reduxjs/toolkit';

// 로그인 상태를 로컬 스토리지에 저장하는 함수
export const saveStateToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('loginState', serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
};

// 로컬 스토리지에서 로그인 상태를 불러오는 함수
export const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('loginState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return undefined;
  }
};


export const saveStateToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('loginState', serializedState);
  } catch (err) {
    console.error('Error saving state to session storage:', err);
  }
};

// 세션 스토리지에서 로그인 상태를 불러오는 함수
export const loadStateFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem('loginState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from session storage:', err);
    return undefined;
  }
};

const initialState = loadStateFromSessionStorage() || {
  isLoggedIn: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      saveStateToSessionStorage(state);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      saveStateToSessionStorage(state);
      saveStateToLocalStorage(state);
    },
    autoLogin: (state) => {
      state.isLoggedIn = true;
      saveStateToLocalStorage(state);
    },
  },
});

export const { login, logout,autoLogin } = loginSlice.actions;
export default loginSlice.reducer;
