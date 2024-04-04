
function AddNumber(numbone, numbtwo){
    let result = (numbone + numbtwo) * 5;
    return result
}

let number = AddNumber(10, 20);
console.log(number);
let numb_second = AddNumber(12, 18);
console.log(numb_second);
let numb_third = AddNumber(8, 10);
console.log(numb_third);



function CountString(name){

   if(name.length > 10){

    return true

   }else{
    return false
   }

   
    
}


let names = CountString('Maubright');
console.log(names);

let secondname = CountString('AjongMaubright')
console.log(secondname);
let thirdname = CountString('BrightPlace')
console.log(thirdname);