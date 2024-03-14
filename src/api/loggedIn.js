import { API_ENDPOINT } from ".";

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": true,      
  "Access-Control-Allow-Headers": true, 
  "Access-Control-Allow-Methods": true 
};

//fetches welcome details

export const welcomeDetails = async () => {    
    try {
    const response = await fetch(`${API_ENDPOINT}/welcome`, {
        method: "GET",        
        credentials: 'include',
        mode: 'cors',        
        headers: headers
    })
    if (!response.ok){      
      throw new Error('response was not okay');
    }    
    const data = await response.json()    
    return {success: data};
  } catch (error){
    console.log(error);
    return {error: error};
  }
}

//enables user to delete account

export const deleteAccount = async (password) => {
  try {
  const response = await fetch(`${API_ENDPOINT}/delete-account`, {
      method: "POST",
      body: JSON.stringify({
        password: password,        
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
} catch (error){  
  return {messages: [{path: "general", msg: "Something went wrong with the server"}]};
}
}