import{
  Todo
}from "./todo.js";

let btn1 = document.querySelector("button");

btn1.addEventListener("click",function(){
  
  let contenu1 = document.querySelector("#imput1");
  let contenu2 = document.querySelector("#imput2");
  let contenu3 = document.querySelector("#imput3");
  let contenu4 = document.querySelector("#imput4");
  let contenu5 = document.querySelector("#imput5");
  
  
  let valeurs1 = contenu1.value();
  let valeurs2 = contenu2.value();
  let valeurs3 = contenu3.value();
  let valeurs4 = contenu4.value();
  let valeurs5 = contenu5.value();


  
  
});


window.addEventListener("DOMContentLoaded",function(){
        
        
        let liste =new Todo("premiereb description");

        
          
    console.log(liste);


  });


