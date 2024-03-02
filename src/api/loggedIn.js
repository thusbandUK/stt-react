import { API_ENDPOINT } from ".";

export const welcomeDetails = async () => {
    console.log('welcome details called');
    try {
    const response = await fetch(`${API_ENDPOINT}/welcome`, {
        method: "GET",        
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
    if (!response.ok){
      console.log('response was not okay');
      throw new Error('response was not okay');
    }
    console.log('response was okay');
    const data = await response.json()
    //console.log(data);
    return data;
  } catch (error){
    console.log(error);
  }

}

export const deleteAccount = async (password) => {
  console.log('welcome details called');
  try {
  const response = await fetch(`${API_ENDPOINT}/delete-account`, {
      method: "POST",
      body: JSON.stringify({
        password: password,        
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
  if (!response.ok){
    console.log('response was not okay');
    throw new Error('response was not okay');
  }
  console.log('response was okay');
  //const data = await response.json()
  //console.log(data);
  return {success: "Your account has been deleted"};
} catch (error){
  console.log(error);
  return {error: error.message};
}

}