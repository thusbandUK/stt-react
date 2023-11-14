//MIDDLEWARE
export const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      
      //makes a shallow copy of state object including only examBoard, menu and rowOfTubes
      //let detailsForStorage = (({ examBoard, menu, rowOfTubes, observationFormSlice }) => ({ examBoard, menu, rowOfTubes, observationFormSlice }))(getState());

      //previous logic
      localStorage.setItem('completeSavedState', JSON.stringify(getState()));

      //updated logic, saves detailsForStorage to local storage
      //localStorage.setItem('completeSavedState', JSON.stringify(detailsForStorage));
      return result;
    };
  };
  
  export const reHydrateStore = () => {    
    if (localStorage.getItem('completeSavedState') !== null) {      
      return JSON.parse(localStorage.getItem('completeSavedState')); // re-hydrate the store
    }
  };


  //you could add the page of the text box