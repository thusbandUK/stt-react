import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: "",
    email: "",
    password: "",
    nextLesson: "",
    lessonPrice: "",
    error: {
      username: "",
      password: "",
      email: "",
      general: ""
    }
}

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
      inputUsername: (state, action) => {
        state.username = action.payload;
      },
      inputEmail: (state, action) => {
        state.email = action.payload;
      },
      inputNextLesson: (state, action) => {
        state.nextLesson = action.payload;
      },
      inputLessonPrice: (state, action) => {
        state.lessonPrice = action.payload;
      },
      updateErrorConsole: (state, action) => {                
        action.payload.map((item) => {
          return state.error[item.path] = item.msg;
      })       
      },      
      reset: () => initialState      
    },
  });

  export const {
    inputUsername,
    inputEmail,
    inputNextLesson,
    inputLessonPrice,
    updateErrorConsole,
    reset
 } = loginSlice.actions;
 
 export default loginSlice.reducer;