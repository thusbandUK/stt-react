import { configureStore } from '@reduxjs/toolkit';
import year13HealthCheckReducer from '../features/y13HealthCheck/y13HealthCheckSlice.js';
import loginReducer from '../Components/login/loginSlice.js';
//import examBoardReducer from '../features/examBoards/examBoardsSlice.js';
//import menuReducer from '../features/menu/menuSlice.js';
//import multipleChoiceQuestionReducer from '../features/textBoxCreator/textBoxElements/multipleChoiceQuestions/multipleChoiceQuestionSlice';
//import textBoxCreatorReducer from '../features/textBoxCreator/textBoxCreatorSlice';
//import rowOfTubesReducer from '../features/rowOfTestTubes/rowOfTestTubesSlice';
//import observationFormReducer from '../features/observations/observationFormSlice';
//import numberOfAtomsReducer from '../features/numberOfAtoms/numberOfAtomsSlice';
//import { reHydrateStore, localStorageMiddleware } from '../features/examBoards/examBoardMiddleware';
import { reHydrateStore, localStorageMiddleware } from './rehydrationMiddleware.js'; 
//import { gaMiddleware } from './usePageTracking';


export default configureStore({
    reducer: {
        healthCheck: year13HealthCheckReducer,
        login: loginReducer,
        //menu: menuReducer,
        //rowOfTubes: rowOfTubesReducer,
        //textBoxCreator: textBoxCreatorReducer,
        //multipleChoiceQuestion: multipleChoiceQuestionReducer,
        //observationForm: observationFormReducer,
        //numberOfAtoms: numberOfAtomsReducer
    },
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  
  })

/*
this was tacked on to getDefaultMiddleware()between the ) and the ,
.concat(localStorageMiddleware)
*/