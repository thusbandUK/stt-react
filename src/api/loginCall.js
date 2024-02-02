import { API_ENDPOINT } from ".";

export const signupRequest = async (email, username, password) => {
    console.log(API_ENDPOINT);
    console.log(username+password)
    const response = await fetch(`${API_ENDPOINT}/signup`, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            username: username,
            password: password
        }),
        headers: {
            "Content-Type": "application/json",
        }
    }).then(res => {
      if(res.ok) {
        return console.log('well done, you have logged in');
        //res.json()
      }
      return res.text().then(text => console.log(text));
      //return res.text().then(text => {throw new Error(text)})
    })
    
}

export const loginRequest = async (email, password) => {
  console.log('login request called');
  const response = await fetch(`${API_ENDPOINT}/login`, {
    method: "POST",
    body: JSON.stringify({        
        username: email,
        password: password
    }),
    headers: {
        "Content-Type": "application/json",
    }
}).then(res => {
  if(res.ok) {
    return console.log('well done, you have logged in');
    //res.json()
  }
  return res.text().then(text => console.log(text));
  //return res.text().then(text => {throw new Error(text)})
})

}

/*

/*
    .then((returnedResponse) => {
      // Your response to manipulate
      console.log(returnedResponse);
      /*this.setState({
        complete: true
      });*//*
   }).catch((error) => {
     // Your error is here!
     console.log(error)
   });
    
    if (response.ok){
      console.log('user signed in');
    } else {
      console.log(response);
      throw new Error(response.error);
    }
    .then((returnedResponse) => {
      console.log(returnedResponse.status);

    }).catch((error) => {
      console.log(error)
    })*//*
    

    //return response.status;


export const updateBook = async (id, newTitle, newStart, newEnd) => {
    const response = await fetch(`${API_ENDPOINT}/books/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        newTitle,
        newStart,
        newEnd
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    return response.status;
  };
  */