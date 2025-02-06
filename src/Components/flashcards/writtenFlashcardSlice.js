import { createSlice } from '@reduxjs/toolkit';

const initialState = {

}

export const writtenFlashcardSlice = createSlice({
    name: "writtenFlashcard",
    initialState,
    reducers: {        
        logQuestion: (state, action) => {
            //console.log(state);
          state[action.payload.questionId] = (({ question, response, checklist}) => ({ question, response, checklist}))(action.payload);            
        },
        enterResponse: (state, action) => {
            //let index = state.findIndex((x) => x.questionId === action.payload.questionId);
            //console.log(action.payload.response);            
            state[action.payload.questionId].response = action.payload.response;
        },
        checkMarkingPoint: (state, action) => {            
            state[action.payload.questionId].checklist[action.payload.index].checked = action.payload.checked;            
          },
        reset: () => initialState

    }

});

export const {
    logQuestion,
    checkMarkingPoint,
    enterResponse,
    reset
 } = writtenFlashcardSlice.actions;
 
 export default writtenFlashcardSlice.reducer;
/*

const initialState = {
  code: "",
  answers: {
    "question-1": [
        
      ],          
    "question-2": {
      answer: "",
      id: ""},
    "question-3": {
      answer: "",
      id: ""},
    "question-4": {
      answer: "",
      id: ""},
    "question-5": [],
    "question-6": {
      answer: "",
      id: ""},
    "question-7": [],
    "question-8": {
      answer: "",
      id: ""},
    "question-9": [],
    "question-10": {
      answer: "",
      id: ""},
    "question-11": {
      answer: "",
      id: ""},
  }
}

export const year13HealthCheckSlice = createSlice({
    name: "year13HealthCheck",
    initialState,
    reducers: {
      selectAnswer: (state, action) => {   
        //console.log(action.payload);
        //console.log(state);     
        state.answers[action.payload.question] = action.payload.answerAndId;            
      },
      updateAnswer: (state, action)=> {
        if (!action.payload.index){
          
          state.answers[action.payload.question].splice(action.payload.index, 1);
        } else {
          console.log('else function called in slicey thing');
          state.answers[action.payload.question].push(action.payload.answerAndId);
        }
        //if (state.answers[action.payload.question].includes(action.payload.answer)){
        //  state.answers[action.payload.question].splice(action.payload.index, 1);
        //} else {
       // state.answers[action.payload.question].push(action.payload.answer);
      //}
      },
      identifierCodeToState: (state, action) => {
        state.code = action.payload;        
      },      
      /*selectAnswer: (state, action) => {        
        state.MCQAnswers[action.payload.index].selectedAnswer = action.payload.answer;            
      },*//*
      displayFeedback: (state, action) => {
        state.MCQAnswers[action.payload.index].displayedFeedback = action.payload.answerDetails;        
      },      */ /*
      reset: () => initialState
    },
  });

  export const {
    createMCQObject,    
    selectAnswer,
    updateAnswer,
    identifierCodeToState,
    displayFeedback, 
    reset
 } = year13HealthCheckSlice.actions;
 
 export default year13HealthCheckSlice.reducer;
 */