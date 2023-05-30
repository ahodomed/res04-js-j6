class User{
    firstName;
    lastName;
    nickName;
    email;
    password;
    comfirmPassword;
    biography;
    
    
    constructor(firstName, lastName, nickName, email, password,comfirmPassword, biography=null){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.comfirmPassword = comfirmPassword;
        this.biography = biography;
        
    }
    
   validateFirstName()
   {
            let myform = document.querySelector("form");
            
            let myRegex = /^[A-Za-z][A-Za-z_]+$/;
            
            
            myform.addEventListener("submit",function()
        {
            
                     let fname = document.querySelector("#imput1");
            
                    if(fname.value.trim() == "")
                    {
                
                      event.preventDefault();
                      
                    //  let myerror = document.querySelector("#error");
                    //  myerror.innerHTML="ce champ est requis";
                    //  myerror.style.color = "red";

                
                    }else if(myRegex.test(fname.value)==false)
                    {
                
                                 event.preventDefault();

                     }else{
                            
                
                           }
            

        });
        
    }
    
    
    validateLastName()
    {
         let myform = document.querySelector("form");
            
            let myRegex = /^[A-Za-z][A-Za-z_]+$/;
            
            myform.addEventListener("submit",function()
        {
            
                    let lname = document.querySelector("#imput2");
            
                    if(lname.value.trim() == "")
                    {
                
                         event.preventDefault();
                
                    }else if(myRegex.test(lname.value)==false)
                    
                    {
                
                              event.preventDefault();

                     }else
                     
                        {
                            
                
                        }
            

        });
         

        
    }
    
    
    validateNickName()
    {
          let myform = document.querySelector("form");
            
            let myRegex ="^[A-Za-z][A-Za-z0-9_]$";
            
            myform.addEventListener("submit",function()
        {
            
                    let nname = document.querySelector("#imput3");
            
                    if(nname.value.trim() == "")
                    {
                
                         event.preventDefault();
                
                    }else if(myRegex.test(nname.value)==false)
                    
                    {
                
                              event.preventDefault();

                     }else
                     
                        {
                            
                
                        }
            

        });
    }
    
    validateEmail()
    {
          
         let myform = document.querySelector("form");
            
            let myRegex =("#^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$#");
            
            myform.addEventListener("submit",function()
        {
            
                    let email = document.querySelector("#imput4");
            
                    if(email.value.trim() == "")
                    {
                
                         event.preventDefault();
                
                    }else if(myRegex.test(email.value)==false)
                    
                    {
                
                              event.preventDefault();

                     }else
                     
                        {
                            
                
                        }
            

        });
    }
    
    
    validatePassword()
    {
            let myform = document.querySelector("form");
            
            let myRegex =("#^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$#");
            
            myform.addEventListener("submit",function()
        {
            
                    let pass = document.querySelector("#imput5");
                    let cpass = document.querySelector("#imput6");
                    
            
                    if(pass.value.trim() == "")
                    {
                
                         event.preventDefault();
                
                    }else if(myRegex.test(pass.value)==false)
                    
                    {
                
                              event.preventDefault();

                     }else
                     
                        {
                            
                
                        }
            

        });
    }
    
    validateBiography()
    {
           let myform = document.querySelector("form");
            myform.addEventListener("submit",function(){
            event.preventDefault();
        });
        
    }


validate()
{
    
    
}
}

export{
    User
};

