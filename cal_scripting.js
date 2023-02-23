const cal_btn=document.querySelectorAll(".btn")
const input_field1=document.querySelector(".input_field")
let string=""

//  now as we know that we have many buttons of same class which we have to access 
// so, accessing them as an single entity will be very dificult it will be easy if we store the buttons or
// say, if we converts the buttons into array then we can easily access the buttons using indexing.

// to convert the buttons into array we have to use Array.from().
//  to apply eventlistener on each button we use forEach() to invoke the function for each button in array.
//  and that function is event listener.
Array.from(cal_btn).forEach((button)=>{
    button.addEventListener("click",function(e){
    //    now to if someone prees = btn then .
    if(e.target.innerHTML== '='){
        string=eval(string);
        input_field1.value=string
    }
     else if(e.target.innerHTML== 'C'){
        // window.location.reload()
        string=" "
        input_field1.value=string
    }

     else{
        string=string+e.target.innerHTML 
        input_field1.value=string
     }
    })
})