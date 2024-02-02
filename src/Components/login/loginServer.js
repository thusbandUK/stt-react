import React from 'react';

export async function LoginServer(username, password) {

    const loginRequest = new Request("/myEndpoint", {
        method: "POST",
        body: {
            username: username,            
            password: password        
        },
      });

    


    
}

//export default LoginServer;