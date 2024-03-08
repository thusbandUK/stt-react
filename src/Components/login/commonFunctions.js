

export const errorParse = (array) => {
        
    console.log(typeof(array));
    array.map((error) => {
        if (error.path === "username"){
            return setUsernameStatus(error.msg)
        } else if (error.path === "password"){
            return setPasswordStatus(error.msg)
        } else if (error.path === "email"){
            return setemailStatus(error.msg)
        } else {
            return setTestStatus(error.msg)
        }
    })
}