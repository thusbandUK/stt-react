import { API_ENDPOINT } from ".";

/*
The below functions are configured to receive and pass on messages in the following format:

success

{message: [various *string* depending on individual path]}

errors (note object key messages *plural* since >1 message may be returned) 

{messages:
  [
  {
    path: [string: username, password, email OR general]
    msg: [string: the message]
  }
]
}

the loginSlice reducer updateErrorConsole then updates the error object in the redux store

This is the format in which error messages are passed by the express-validator dependency at the back end

*/

//common headers

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": true,      
  "Access-Control-Allow-Headers": true, 
  "Access-Control-Allow-Methods": true 
};

//accepts email, username and password to sign up new user for new account

export const signupRequest = async (email, username, password) => {    
  try {
  const response = await fetch(`${API_ENDPOINT}/signup`, {
      method: "POST",
      body: JSON.stringify({
          email: email,
          username: username,
          password: password
      }),
      headers: headers
  })
  const responseData = await response.json();
  if (!response.ok) {      
    return {error: responseData};      
  }    
  return {success: responseData};
} catch (error) {    
  return error;    
}
}

//accepts email and password to sign user in to existing account

export const loginRequest = async (email, password) => {  
try {
const response = await fetch(`${API_ENDPOINT}/login`, {
  method: "POST",
  body: JSON.stringify({        
      email: email,
      password: password
  }),
  credentials: 'include',
  mode: 'cors',
  headers: headers
})
const responseData = await response.json();
if (!response.ok) {
    return {error: responseData};
  }
  return {success: responseData};
} catch (error) {
  //returns general error message
  return {messages: [{path: "general", msg: "Something went wrong with the server"}]};
}
}

//resends verification email, if no email arrived following sign up, to initiate email verification process

export const resendVerificationEmail = async (email) => {  
  try {
    const response = await fetch(`${API_ENDPOINT}/resendVerificationEmail`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,        
    }),
      headers: headers
    })
    const responseData = await response.json();
    if (!response.ok) {      
      return {error: responseData};
    }
    return {success: responseData};    
  } catch (error){    
    //sends generic error message
    return {messages: [{path: "general", msg: "Something went wrong with the server"}]};
  }
}

//accepts id and token harvested from email link to finalise verification of email process

export const verifyEmail = async (id, token) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/verifyEmail/${id}/${token}`, {
      method: 'GET',
      headers: headers
    })
    const responseData = await response.json();
    if (!response.ok) {      
      return {error: responseData};
    }
    return {success: responseData};
  } catch (error){
    //returns general error message
    return {messages: [{path: "general", msg: "Something went wrong with the server"}]};
  }
}

//sends email to initiate password reset process

export const resetPassword = async (email) => {  
  try {
    const response = await fetch(`${API_ENDPOINT}/resetPassword`, {
      method: 'POST',
      body: JSON.stringify({
        email: email,        
    }),
      headers: headers
    })
    const responseData = await response.json();
    if (!response.ok) {      
      return {error: responseData};
    }
    return {success: responseData};
  } catch (error){    
    return {messages: [{path: "general", msg: "Something went wrong with the server"}]};
  }
}

//transfers harvested id and token from incoming link and sends new password to finalise reset password process

export const enterNewPassword = async (id, token, password) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/reset-password-request/${id}/${token}`, {
      method: 'POST',
      body: JSON.stringify({        
        password: password,
    }),
      headers: headers
    })
    const responseData = await response.json();
    if (!response.ok) {      
      return {error: responseData};
    }
    return {success: responseData};    
  } catch (error){
    //returns general error message
    return {messages: [{path: "general", msg: "Something went wrong with the server"}]};
  }

}

//logout route

export const logoutRequest = async() => {
  try {
    const response = await fetch(`${API_ENDPOINT}/logout` , {
      method: "GET",
      credentials: "include",
      headers: headers
    })
    return response; 
  } catch (error) {    
    return error;
  }
}  