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
        /*Object.keys(action.payload).map((item)=>{
          return state.error[item] = action.payload[item];
        }) */
        action.payload.map((item) => {
          return state.error[item.path] = item.msg;
      })       
      },
      /*
      selectAnswer: (state, action) => {   
             
        state.answers[action.payload.question] = action.payload.answerAndId;            
      },
      updateAnswer: (state, action)=> {
        if (!action.payload.index){
          
          state.answers[action.payload.question].splice(action.payload.index, 1);
        } else {
          
          state.answers[action.payload.question].push(action.payload.answerAndId);
        }
        
      },
      identifierCodeToState: (state, action) => {
        state.code = action.payload;        
      },      
      */
      
      reset: () => initialState
      
    },
  });

  export const {
    inputUsername,
    inputEmail,
    inputNextLesson,
    inputLessonPrice,
    updateErrorConsole,
    /*createMCQObject,    
    selectAnswer,
    updateAnswer,
    identifierCodeToState,
    displayFeedback,*/ 
    reset
 } = loginSlice.actions;
 
 export default loginSlice.reducer;