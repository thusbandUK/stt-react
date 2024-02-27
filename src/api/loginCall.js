import { API_ENDPOINT } from ".";

export const verifyEmail = async (id, token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/verifyEmail/${id}/${token}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true,      
        "Access-Control-Allow-Headers": true, 
        "Access-Control-Allow-Methods": true 
      }
    })
    if (!response.ok) {
      const message = await response.json();
      //console.log(message);
      console.log('response was not okay');
      console.log(message);
      throw new Error(message.message);
      //throw new Error('Network response was not ok');
      //throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return {success: data};
  } catch (error){
    console.log('error called');
    console.log(error.message);
    return {error: error.message};
  }
}



export const resendVerificationEmail = async (email) => {
  console.log('send email function triggered');
  try {
    const response = await fetch(`${API_ENDPOINT}/resendVerificationEmail`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,        
    }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true,      
        "Access-Control-Allow-Headers": true, 
        "Access-Control-Allow-Methods": true 
      }
    })
    if (!response.ok) {
      const message = await response.json();
      //console.log(message);
      
      throw new Error(message.message);
      //throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return {success: data};
  } catch (error){
    console.log(error.message);
    return {error: error.message};
  }
}

export const resetPasswordVerifyDetails = async (id, token) => {
  console.log('send email function triggered');
  try {
    const response = await fetch(`${API_ENDPOINT}/reset-password-request`, {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        token: token,
    }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true,      
        "Access-Control-Allow-Headers": true, 
        "Access-Control-Allow-Methods": true 
      }
    })
    if (!response.ok) {
      const message = await response.json();
      //console.log(message);
      
      throw new Error(message.message);
      //throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return {success: data};
  } catch (error){
    console.log(error.message);
    return {error: error.message};
  }

}

export const resetPassword = async (email) => {
  console.log('send email function triggered');
  try {
    const response = await fetch(`${API_ENDPOINT}/resetPassword`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,        
    }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Origin": true,      
        "Access-Control-Allow-Headers": true, 
        "Access-Control-Allow-Methods": true 
      }
    })
    if (!response.ok) {
      const message = await response.json();
      //console.log(message);
      
      throw new Error(message.message);
      //throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return {success: data};
  } catch (error){
    console.log(error.message);
    return {error: error.message};
  }
}

export const signupRequest = async (email, username, password) => {
    console.log(API_ENDPOINT);
    console.log(username+password)
    try {
    const response = await fetch(`${API_ENDPOINT}/signup`, {
        method: "POST",
        body: JSON.stringify({
            email: email,
            username: username,
            password: password
        }),
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": true,      
            "Access-Control-Allow-Headers": true, 
            "Access-Control-Allow-Methods": true 
        }
    })
    if (!response.ok) {
      console.log('response was not okay');
      const message = await response.json();
      //console.log(message);
      
      throw new Error(message.message);
      //throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
    return {success: data};
  } catch (error) {
    console.log(error.message);
    //return error;
    return {error: error.message};
  }
    /*
    .then(res => {
      if(res.ok) {
        return console.log('well done, you have logged in');
        //res.json()
      }
      return res.text().then(text => console.log(text));
      //return res.text().then(text => {throw new Error(text)})
    })*/
    
}

export const loginRequest = async (email, password) => {
  console.log('login request called');
  //const response = await 
  try {
  const response = await fetch(`${API_ENDPOINT}/login`, {
    method: "POST",
    body: JSON.stringify({        
        username: email,
        password: password
    }),
    credentials: 'include',
    mode: 'cors',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": true,      
            "Access-Control-Allow-Headers": true, 
            "Access-Control-Allow-Methods": true 
    }
})
  if (!response.ok) {
      const message = await response.json();
      console.log(message.message);
      console.log(Object.entries(message));

      throw new Error(message.message);
    }
    const data = await response.json();
    console.log(data);
    return {success: data};
  } catch (error) {
    console.log(error);
    return {error: error};
  }
}


export const logoutRequest = async() => {
  try {
    const response = await fetch(`${API_ENDPOINT}/logout` , {
      method: "POST",      
      headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": true,      
            "Access-Control-Allow-Headers": true, 
            "Access-Control-Allow-Methods": true 
      }
    })
    if (response.ok){
      return 'You have successfully logged out';
    }
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    //const data = await response.json();
    //console.log(response.status);
    //return data;
  } catch (error) {
    //console.log(error);
    return error;
  }
  }
