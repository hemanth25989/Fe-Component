function Validation(value){
    let error ={};
    const email_pattern =   /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //email validation pattern
    const password_patttern = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z.]+$/;


    if(value.email === ""){
        error.email = "Email is required";
    
    }else if(!email_pattern.test(value.email)){
        error.email = "Email din't match"
    }else {
        error.email= "" ;
    }
    if(value.password === ""){
        error.password = "password is required";
    
    }else if(!password_patttern.test(value.password)){
        error.password = "password din't match"
    }else {
        error.password= "" ;
    }

    return error;
}


export default Validation;