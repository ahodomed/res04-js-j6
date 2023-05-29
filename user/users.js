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
}

export{
    User
};



  












//  class pizza {
//     name;
//     ingredient1;
//     ingredient2;
//     ingredient3;

//     constructor(name, ingredient1,ingredient2, ingredient3){
//         this.name=name;
//         this.ingredient1=ingredient1;
//         this.ingredient2=ingredient2;
//         this.ingredient3=ingredient3;
//     }
    
// }

// export{
//     pizza
// };

  