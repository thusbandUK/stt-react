import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    username: "",
    password: "",
    nextLesson: "",
    lessonPrice: "",

    
}




export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
      inputUsername: (state, action) => {
        state.username = action.payload;
      },
      inputNextLesson: (state, action) => {
        state.nextLesson = action.payload;
      },
      inputLessonPrice: (state, action) => {
        state.lessonPrice = action.payload;
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
    inputNextLesson,
    inputLessonPrice,
    /*createMCQObject,    
    selectAnswer,
    updateAnswer,
    identifierCodeToState,
    displayFeedback,*/ 
    reset
 } = loginSlice.actions;
 
 export default loginSlice.reducer;